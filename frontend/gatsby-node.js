/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


// Problem - chunk commons [mini-css-extract-plugin] Conflicting order. Following module has been added:
// https://robertmarshall.dev/blog/fix-warn-chunk-commons-mini-css-extract-plugin-error-in-gatsby-js/
// const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     plugins: [
//       new FilterWarningsPlugin({
//         exclude:
//           /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
//       }),
//     ],
//   });
// };


const path = require(`path`);



exports.createPages = async ({ graphql, actions: { createPage }  }) => {

 
  await graphql(`
     {
      allWpPage {
          nodes {
            id
            uri
            slug
            title
            content
          }
        }
     }
   `).then(result => {
    // console.log(result.data.allWpPage.nodes);
    result.data.allWpPage.nodes.forEach(node => {
      createPage({
        path: `${node.uri}`,
        component: path.resolve(`./src/templates/page.tsx`),
        context: {
          // This is the $slug variable passed to blog-post.js
          uri: node.uri,
          slug: node.slug,
        },
      });
    });
  });
}