import fs from 'fs';
import markdownIt from 'markdown-it';

const md = new markdownIt({
	html: true,
	breaks: false,
	linkify: true
});

export default {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	eleventyComputed: {
		excerpt: (data) => {
			if (!data.page || !data.page.inputPath) {
				return '';
			}
			
			try {
				const content = fs.readFileSync(data.page.inputPath, 'utf8');
				const excerptMarker = '<!-- excerpt -->';
				
				if (content.includes(excerptMarker)) {
					// Extract only the text before the excerpt marker
					const beforeExcerpt = content.split(excerptMarker)[0];
					// Remove frontmatter (everything between --- and ---)
					const markdownContent = beforeExcerpt.replace(/^---[\s\S]*?---/, '').trim();
					
					if (markdownContent) {
						// Convert markdown to HTML and remove id attributes to avoid duplicates
						let html = md.render(markdownContent);
						html = html.replace(/\s+id=["'][^"']*["']/gi, '');
						return html;
					}
				}
			} catch (err) {
				// File not found or can't be read
				console.error('Error reading excerpt:', err);
			}
			
			return '';
		}
	}
};
