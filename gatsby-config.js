module.exports = {
  siteMetadata: {
    title: 'Idan Gazit',
    description: 'The personal site of Idan Gazit',
    author: {
      name: 'Idan Gazit',
      url: 'https://twitter.com/idangazit',
      email: 'idan@gazit.me',
      twitter: 'idangazit',
      github: 'idan',
    },
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      extensions: ['.mdx', '.md'],
      options: {
        remarkPlugins: [require('remark-abbr')],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-containers',
        ],
      },
    },
    // 'gatsby-plugin-feed-mdx',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'writing',
        path: `${__dirname}/writing`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-client-side-redirect',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
