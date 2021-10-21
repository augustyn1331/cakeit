/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const archiveTemplate = path.resolve("./src/templates/achive.js");
  const result = await graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const { allWpCategory, wp } = result.data;

  allWpCategory.edges.forEach(category => {
    const postsPerPage = wp.readingSettings.postsPerPage;
    const { count: numberOfPosts, name, id, uri } = category.node;
    const numberOfPages = Math.ceil(numberOfPosts / postsPerPage);
    if (numberOfPosts > 0 || name !== "uncategorized") {
      Array.from({ length: numberOfPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `${uri}` : `${uri}${i + 1}`,
          component: archiveTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numberOfPages,
            currentPage: i + 1,
            catId: id,
            catName: name,
            catUri: uri,
            categories: allWpCategory,
          },
        });
      });
    }
  });
};
