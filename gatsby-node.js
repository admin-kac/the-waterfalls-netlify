const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const pathsConfig = require('./config/paths');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // Generate file path from file path starting @ `basePath` (https://www.gatsbyjs.org/packages/gatsby-source-filesystem/#createfilepath)
    const filePath = createFilePath({
      node,
      getNode,
      basePath: pathsConfig.data,
    });
    // Append new queryable slug node field w/ the filepath
    createNodeField({
      name: `slug`,
      node,
      value: filePath,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              path
            }
          }
        }
      }
    }
  `)
  .then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const entries = result.data.allMarkdownRemark.edges;

    entries.forEach(edge => {
      const id = edge.node.id;

      createPage({
        path: edge.node.frontmatter.path || edge.node.fields.slug, // check for a path first
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `${pathsConfig.views}/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    entries.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      const tagRoute = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagRoute,
        component: path.resolve(`${pathsConfig.views}/tags.js`),
        context: {
          tag,
        },
      });
    });
  });
};
