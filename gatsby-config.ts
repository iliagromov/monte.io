import type { GatsbyConfig } from "gatsby";

const siteMetadata = require('./src/data/siteMetadata');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {

  siteMetadata,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  flags: {
    // FAST_DEV: true,
    // FAST_REFRESH: true,
    DEV_SSR: true,
    // QUERY_ON_DEMAND: false,
    // LAZY_IMAGES: false
  },
  plugins: [
    `gatsby-plugin-no-index`,
    // {
    //   resolve: "gatsby-plugin-nginx-redirect",
    //   options: {
    //     inputConfigFile: `${__dirname}/nginx.conf`,
    //     outputConfigFile: `${__dirname}/nginx.out.conf`,
    //     whereToIncludeRedirects: "server.http" // defaults to: "server"
    //   },
    // },
    {
      resolve: `gatsby-plugin-fastify`,
      options: {
        /* discussed below */
        features: {
          redirects: true,
        },
      },
    },
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
    // INFO: wp используем как админку, все посты кэширем в mdx файлы, на случай если wp отвалится фронт всёровно будет работать

    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     url:  "https://gromov-studio.site/monte/graphql",
    //     // url:  "http://monte.io/graphql",
    //     // url:  "http://localhost:8080/graphql",
    //     // baseUrl: `monte.io`,
    //     baseUrl: `gromov-studio.site`,
    //     // protocol: `https`,
    //     verbose: true,
    //     develop: {
    //       hardCacheMediaFiles: true,

    //       // server wp update  5min times
    //       nodeUpdateInterval: 300000,
    //     },
    //     debug: {
    //       // graphql: {
    //       //   writeQueriesToDisk: true,
    //       //   showQueryVarsOnError: true,
    //       //   panicOnError: true,
    //       // },
    //     },
    //     useACF: true,
        
    //   },
    // }, 
  "gatsby-transformer-remark", 
  `gatsby-plugin-react-helmet`,
 
  "gatsby-plugin-image", 

  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaults: {
        formats: [`auto`],
        placeholder: `blurred`,
        quality: 100,
        backgroundColor: `transparent`,
      },
    },
  },
  "gatsby-transformer-sharp", 
  
  "gatsby-plugin-sass", 
  {
    resolve: "gatsby-plugin-sitemap",
  }, 
   // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  "gatsby-plugin-react-svg",
  // {
  //   resolve: 'gatsby-plugin-react-svg',
  //   options: {
  //     rule: {
  //       include: 'src/assets/images\/.*\.svg/,',
  //       options: {
  //         tag: "symbol",
  //         name: "MyIcon",
  //         props: {
  //           className: "my-class",
  //           title: "example"
  //         },
  //         filters: [value => console.log(value)]
  //       }
  //     },
      
  //   },
  // },

  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
    },
  },
  // {
  //   resolve: `gatsby-plugin-canonical-urls`,
  //   options: {
  //     siteUrl: siteMetadata.siteUrl
  //   },
  // },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteMetadata.title,
      display: `standalone`,
      icon: `src/assets/icons/gatsby-icon.png`, // This path is relative to the root of the site.
      lang: `no`,
    },
  },
  // {
  //   resolve: 'gatsby-plugin-i18n',
  //   options: {
  //     langKeyDefault: siteMetadata.languages.defaultLangKey,
  //     useLangKeyLayout: true,
  //     prefixDefault: false,
  //   },
  // },

  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/assets/images/`
    },
    __key: "images"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "animations",
      "path": `${__dirname}/src/assets/animations/`
    },
    __key: "animations"
  }, 

  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/assets/svg/`
    },
    __key: "svg"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": `${__dirname}/src/pages/`
    },
    __key: "pages"
  },
  
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "news",
      "path": `${__dirname}/src/posts/news`
    },
  },
  
  ]
};

export default config;
