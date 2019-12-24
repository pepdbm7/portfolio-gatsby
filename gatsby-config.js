module.exports = {
  siteMetadata: {
    title: `PepDev, Web Developer`,
    author: `Pep del Baño`,
    description: `Full Stack Developer | Javascript web development and making projects | Barcelona`,
    social: {
      twitter: `pepdbm7`,
      instagram: `pepdbm7`,
      linkedin: `pepdbm7`,
      github: `pepdbm7`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `logos`,
        path: `${__dirname}/src/assets/technologies`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-page-progress`,
      options: {
        includePaths: [`/`],
        excludePaths: [],
        height: 3,
        prependToBody: true,
        color: `gold`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/technologies/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
