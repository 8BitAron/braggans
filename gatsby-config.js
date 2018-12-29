module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/utils/typography.js`
      }
    },
    `gatsby-plugin-styled-components`
  ]
}
