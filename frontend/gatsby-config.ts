import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `frontend`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // url:  "https://gromov-studio.site/graphql",
        url:  "http://monte.io/graphql",
        // url:  "http://localhost:8080/graphql",
        baseUrl: `monte.io`,
        // baseUrl: `gromov-studio.site`,
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
  "gatsby-transformer-sharp", 
  "gatsby-plugin-sass", 
  "gatsby-plugin-google-gtag", 
  "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  "gatsby-plugin-mdx", 
  "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }
  ]
};

export default config;
