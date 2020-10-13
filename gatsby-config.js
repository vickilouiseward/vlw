module.exports = {
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
    }
  ],
  pathPrefix: '/vlw'
}
