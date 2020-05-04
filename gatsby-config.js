/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-pnpm`,
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
  ],
}
