/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await graphql(`
     {
       allWpPost(sort: { fields: [date], order:DESC }) {
         nodes {
           title
           excerpt
           content
           slug
         }
       }
     }
   `).then(result => {
    result.data.allWpPost.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/blog-post.tsx`),
        context: {
          // This is the $slug variable passed to blog-post.js
          slug: node.slug,
        },
      });
    });
  });
}