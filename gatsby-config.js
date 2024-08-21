module.exports = {
  pathPrefix: "/portfolio",
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": `${__dirname}/imgs/robin.png`
      }
    },
    'gatsby-plugin-postcss',
    `gatsby-plugin-provide-react`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/projects`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ],
}