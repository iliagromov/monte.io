// gatsby-node.js
const util = require('./src/utils/shared-function.ts');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const response = await util();
  console.log("🚀 ~ file: gatsby-node.js:6 ~ exports.sourceNodes= ~ response:", response)

  response.data.forEach((item) => {
    actions.createNode({
      ...item,
      id: createNodeId(item.date),
      internal: {
        type: 'staticResults',
        contentDigest: createContentDigest(item)
      }
    });
  });
};

/*exports.onCreateWebpackConfig = ({ getConfig, actions, plugins }) => {
  actions.setWebpackConfig({
    // отключить  source-map в итоговой сборке
    devtool: getConfig().mode === "production" ? false : "source-map",
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    // по желанию вырубить react-dev-tools
    plugins: [
      plugins.define({
        '__REACT_DEVTOOLS_GLOBAL_HOOK__': `({ isDisabled: true })`
      })
    ],
  })
}
*/
const path = require("path");

// const BrandsJSON = require('./brands.json');
const PageData = require('./PageData.json');

/* 
* Новости получаем с wp и генерируем в md файлы,
* в случае если wp отвалится у нас будет рабочая копия новостей
* также сократится время сборки проекта
*/

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const resultNews = await graphql(`
    query GetAllNews {
      allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "news"}}}
      ){
        nodes {
          id
          frontmatter {
            slug
            category
          }
        }
      }
    }
  `)

  if (resultNews.errors) {
    reporter.panicOnBuild('Error loading MDX result', resultNews.errors)
  }

  // Create blog post pages.
  const news = resultNews.data.allMarkdownRemark.nodes
  news.forEach(node => {
    createPage({
      path: `${node.frontmatter.category}/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/page-single-news.tsx`),
      context: {
        id: node.id,
        slug: node.frontmatter.slug
      },
    })
  })



  // Прохожусь по всем брендам, моделям, движкам, годам и создаю SEO страницы
  /**
   */
  /**
   * @type brand
   * {
              name: string
              slug: string
              path: string
              contex: {
                  id: 'id-number-slug',
                  slug: string,
                  pageData: {
                      title: string
                      description: string
                      titleH1: string
                      models?: []
                      engines?: []
                      years?: []
                      canonical?: string,
                      brand?: string,
                      model?: string,
                      engine?: string,
                      year?: string,
                  }
              }
          }
   * 
   */
  PageData.brands.forEach((brand) => {

    createPage({
      path: brand.slug,
      component: path.resolve(`./src/templates/page-single-seo.tsx`),
      context: brand.context
    });

    brand.models.forEach((model) => {
      createPage({
        path: model.path,
        component: path.resolve(`./src/templates/page-single-seo.tsx`),
        context: model.context
      });

      model.engines.forEach((engine) => {
        createPage({
          path: engine.path,
          component: path.resolve(`./src/templates/page-single-seo.tsx`),
          context: engine.context
        });

        engine.years.forEach((year, idx) => {
          createPage({
            path: year.path,
            component: path.resolve(`./src/templates/page-store-seo.tsx`),
            context: year.context
          });
        });
      });
    });
  });/**/
}