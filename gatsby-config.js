/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Hello! Typescript!`,
    authors: [
      { name: "Tori", slug: "tori" },
      { name: "Neko", slug: "neko" },
      { name: "Inu", slug: "inu" },
    ],
  },
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
