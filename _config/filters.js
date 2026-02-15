import { DateTime } from "luxon";

export default function(eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		// Handle both string dates (ISO format, SQL format) and Date objects
		let dt;
		if (typeof dateObj === 'string') {
			// Try SQL format first (MySQL: "2022-04-06 21:58:20")
			dt = DateTime.fromSQL(dateObj, { zone: zone || "utc" });
			// If that fails, try ISO format
			if (!dt.isValid) {
				dt = DateTime.fromISO(dateObj, { zone: zone || "utc" });
			}
			dt = dt.setLocale('fr');
		} else {
			dt = DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).setLocale('fr');
		}
		return dt.toFormat(format || "dd LLLL yyyy");
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		// Handle both string dates (ISO format, SQL format) and Date objects
		let dt;
		if (typeof dateObj === 'string') {
			// Try SQL format first (MySQL: "2022-04-06 21:58:20")
			dt = DateTime.fromSQL(dateObj, { zone: "utc" });
			// If that fails, try ISO format
			if (!dt.isValid) {
				dt = DateTime.fromISO(dateObj, { zone: "utc" });
			}
		} else {
			dt = DateTime.fromJSDate(dateObj, { zone: "utc" });
		}
		return dt.toFormat('yyyy-LL-dd');
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return the keys used in an object
	eleventyConfig.addFilter("getKeys", target => {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "post", "posts"].indexOf(tag) === -1);
	});

	eleventyConfig.addFilter("sortAlphabetically", strings =>
		(strings || []).sort((b, a) => b.localeCompare(a))
	);

	// Get comments for a specific post by legacy WordPress ID
	eleventyConfig.addFilter("getCommentsForPost", function(legacyId, commentsData) {
		if (!legacyId || !commentsData || !commentsData.rows) {
			return [];
		}
		
		return commentsData.rows
			.filter(comment => comment.comment_post_ID === legacyId && comment.comment_approved === "1")
			.sort((a, b) => new Date(a.comment_date) - new Date(b.comment_date));
	});

	// Convert newlines to br tags
	eleventyConfig.addFilter("nl2br", function(content) {
		if (!content) return '';
		return content.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>');
	});

	// Get featured image path for a post
	eleventyConfig.addFilter("getFeaturedImagePath", function(post) {
		if (!post || !post.data || !post.data.featured) {
			return '';
		}
		
		const featured = post.data.featured;
		
		// If the featured image is already an absolute path or starts with /, return it as is
		if (featured.startsWith('/') || featured.startsWith('http')) {
			return featured;
		}
		
		// Otherwise, construct the path from the post's input path
		// The images are in the same directory as the source markdown file
		// which is under content/blog/YYYY/MM/DD/
		// We need to extract the date path from the post URL
		const urlParts = post.url.split('/').filter(p => p);
		// Get the first 3 parts (YYYY/MM/DD)
		if (urlParts.length >= 3) {
			const datePath = urlParts.slice(0, 3).join('/');
			return `/blog/${datePath}/${featured}`;
		}
		
		// Fallback to relative path
		return featured;
	});
};
