module.exports = {
  siteMetadata: {
    title: 'Open Source Healthcare Journal',
    description: 'Innovative open source ideas to change healthcare for the better',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'opensourcehealthcare.org',
        short_name: 'Open Source Healthcare Journal',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#5D6666',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(
            './src/components/article.js'
          ),
        },
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/articles/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
}
