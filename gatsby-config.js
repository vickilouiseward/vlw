require('dotenv').config({
  path: '.env'
})

module.exports = {
  // pathPrefix: '/vlw',
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {}
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-formium',
      options: {
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        accessToken: process.env.FORMIUM_TOKEN
      }
    }
  ]
}
