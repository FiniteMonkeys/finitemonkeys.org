module.exports = {
  siteMetadata: {
    title: `finitemonkeys.org`,
    description: `so much shakespeare, so little time`,
    author: `@CraigCottingham`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `finitemonkeys.org`,
        short_name: `finitemonkeys`,
        start_url: `/`,
        background_color: `#FBECC2`,
        theme_color: `#FBECC2`,
        display: `minimal-ui`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-files`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
