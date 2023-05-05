import type { GatsbyConfig } from "gatsby";

const siteMetadata = require('./src/data/siteMetadata')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {

  siteMetadata,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-no-index`,
    {
      // https://www.npmjs.com/package/gatsby-plugin-google-gtag/v/2.1.11#user-content-how-to-use
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-GWGR1D0YZY'],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        // String value for your clarity project id
        // Project id is found in your clarity dashboard url
        // https://clarity.microsoft.com/projects/view/{clarity_project_id}/
        clarity_project_id: 'flktsr5nvj',
        // Boolean value for enabling clarity while developing
        // true will enable clarity tracking code on both development and production environments
        // false will enable clarity tracking code on production environment only
        enable_on_dev_env: true,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url:  "https://gromov-studio.site/monte/graphql",
        // url:  "http://monte.io/graphql",
        // url:  "http://localhost:8080/graphql",
        // baseUrl: `monte.io`,
        baseUrl: `gromov-studio.site`,
        // protocol: `https`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,

          // server wp update  5min times
          nodeUpdateInterval: 300000,
        },
        debug: {
          // graphql: {
          //   writeQueriesToDisk: true,
          //   showQueryVarsOnError: true,
          //   panicOnError: true,
          // },
        },
        useACF: true,
        

        // excludeFieldNames: ['comments', 'blocksJSON', 'previewBlocks', 'previewBlocksJSON'],
        // type: {
        //   Post: {
        //     limit:
        //       process.env.NODE_ENV === `development`         ? // The number of posts to fetch on development
        //           30
        //         : // ... and on build
        //           null,
        //   },
        //   Comment: {
        //     limit: 0,
        //   },
        //   MediaItem: {
        //     localFile: {
        //       requestConcurrency: 5,
        //     },
        //     lazyNodes: false,
        //   },
        // },
        // html: {
        //   useGatsbyImage: true,
        //   fallbackImageMaxWidth: 200,
        //   createStaticFiles: true,
        //   imageMaxWidth: 756,
        // },
        // schema: {
        //   timeout: 3000000,
        //   requestConcurrency: 1,
        //   previewRequestConcurrency: 1,
        //   perPage: 1,
        // },
        // production: {
        //   allow404Images: true,
        //   hardCacheMediaFiles: true,
        // },
      },
    }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  
  // "gatsby-plugin-sitemap", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images/`
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": `${__dirname}/src/pages/`
    },
    __key: "pages"
  },
  `gatsby-plugin-image`,
  "gatsby-transformer-sharp", 
  "gatsby-plugin-sass", 
  "gatsby-plugin-mdx", 
  "gatsby-transformer-remark", 
   // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: 'gatsby-plugin-i18n',
    options: {
      langKeyDefault: siteMetadata.languages.defaultLangKey,
      useLangKeyLayout: true,
      prefixDefault: false,
    },
  },
  ]
};

export default config;
