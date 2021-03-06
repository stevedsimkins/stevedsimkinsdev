module.exports = {
  siteMetadata: {
    title: 'Steve Simkins - Front End Web3 Developer',
    author: 'Steve Simkins',
    description: 'Web portfolio of Steve Simkins',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Front End Web3 Developer',
        short_name: 'Steve Simkins',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/code-solid.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
