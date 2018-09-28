const siteConfig = require('./config/site');
const themeConfig = require('./config/theme');
const pathsConfig = require('./config/paths');

module.exports = {
  siteMetadata: {
    title: siteConfig.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'the-waterfalls',
        short_name: 'the-waterfalls',
        start_url: '/',
        background_color: themeConfig.primaryColor,
        theme_color: themeConfig.primaryColor,
        display: 'minimal-ui',
        icon: 'src/img/logo.svg', // This path is relative to the root of the site.
      },
    },
    {
      // Resolve data markdown to path
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/${pathsConfig.data}`,
        name: 'pages',
      },
    },
    {
      // Resolve images
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: themeConfig.primaryColor,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
