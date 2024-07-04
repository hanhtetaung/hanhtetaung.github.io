module.exports = {
  pathPrefix: "/portfolio",
  plugins: [
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
  ],
}