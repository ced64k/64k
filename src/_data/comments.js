const comments = require("../wordpress-db-import/wp_comments.json")
  .rows.filter((c) => c.comment_approved === "1")
  .reduce((collection, c) => {
    if (!collection[c.comment_post_ID]) collection[c.comment_post_ID] = [];
    collection[c.comment_post_ID].push(c);
    return collection;
  }, {});

// console.log(Object.keys(comments).map((k) => [k, comments[k].length]));

module.exports = comments;
