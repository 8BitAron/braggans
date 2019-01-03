module.exports = {
  siteMetadata: {
    title: `My little corner of the web!`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-91662027-2'
      }
    },
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-remark'
  ]
}
