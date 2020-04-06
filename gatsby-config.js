module.exports = {
  siteMetadata: {
    title: `Web Development and Design | Full Stack Web Developer | Freelance Portfolio`,
    description: `Hire Professional Freelance & React Developer. Building animations and interactive experiences, high quality solutions, website maintenance & security. Contact me to make your website or web app`,
    keywords:
      "Web Developer Portfolio, Web Design, React Developer, Full Stack Developer, Front End Developer, Portfolio, Pep del Baño, MusicLab 3D Cube, MeetUp, PlanBe, gatsby website, awesome design, Web Application",
    lang: "en",
    author: `Pep del Baño`,
    twitterUsername: `pepdbm89`,
    image: `src/images/screenshot.png`,
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
      resolve: `gatsby-plugin-styled-components`,
    },
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
        background_color: `#2d2d2d`,
        theme_color: `#2d2d2d`,
        display: `minimal-ui`,
        icon: `src/images/pepdev.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
