module.exports = {
  siteMetadata: {
    title: `Document by Code Bushi`,
    name: `Code Bushi`,
    siteUrl: `https://gatsby-theme-document.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/codebushi/gatsby-theme-document`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/HuntaroSan`,
      },
    ],
    sidebarConfig: {
      forcedNavOrder: [
        "/introduction",
        "/week-1",
        "/week-2",
        "/week-3",
        "/week-4",
        "/week-5",
      ],
      ignoreIndex: true,
    },
  },
  plugins: [{ resolve: `gatsby-theme-document` }],
};
