module.exports = {
  siteMetadata: {
    title: `Programmer:  Manoj Daswani`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  
  plugins: [
     `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-remark-bracketed-spans`,
    `gatsby-plugin-sass`,

    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        "gatsby-remark-bracketed-spans",
      ],
    },
    },
    
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [{
    //       family: `Oswald`,
    //       subsets: [`latin`],
    //     },
    //     {
    //       family: `Open Sans`,
    //       variants: [`400`, `700`]
    //     },
    //     ],
    //   },
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}