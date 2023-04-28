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
        component: path.resolve(`./src/templates/page-single-seo.tsx`),
        context: {
          // This is the $slug variable passed to blog-post.js
          uri: node.uri,
          slug: node.slug,
        },
      });
    });
  });
  await graphql(`
    {
      allWpPost {
        nodes {
          id  
          slug
          uri
          title
          content
          categories {
            nodes {
              id
              slug
              name
            }
          }
        }
      }
    }`)
    .then(result => {
      result.data.allWpPost.nodes.forEach(node => {
        // console.log(node);
        createPage({
          path: `news/${node.slug}`,
          component: path.resolve(`./src/templates/page-single-news.tsx`),
          context: {
            // This is the $slug variable passed to blog-post.js
            slug: node.slug,
            uri: node.uri,
            name: node.name,
            categories: node.name,
          },
        });
      })
    });
  // await graphql(`
  //    {
  //     allWpCategory {
  //       edges {
  //         node {
  //           id
  //           name
  //           posts {
  //             nodes {
  //               id
  //               title
  //               uri
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //    }
  //  `).then(result => {
  //   // console.log('result.data');
  //   // console.log(result.data.allWpCategory.edges);
  //   result.data.allWpCategory.edges.forEach(edge => {
  //     console.log(edge.node.name);
  //     createPage({
  //       path: `categories/${edge.node.name}`,
  //       component: path.resolve(`./src/templates/page-single-news.tsx`),
  //       context: {
  //         // This is the $slug variable passed to blog-post.js
  //         uri: edge.node.name,
  //       },
  //     });

  //     edge.node.posts.nodes.forEach(node =>{
  //       console.log(node);
  //       createPage({
  //         path: `posts/${node.slug}`,
  //         component: path.resolve(`./src/templates/page-single-news.tsx`),
  //         context: {
  //           // This is the $slug variable passed to blog-post.js
  //           uri: node.name,
  //           slug: node.slug,
  //         },
  //       });
  //     });
  //   });
  // });
}