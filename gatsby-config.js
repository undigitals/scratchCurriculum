module.exports = {
  siteMetadata: {
    title: `Scratch curriculum by Joseph`,
    name: `Scratch `,
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
        "/week-1",
        "/week-2",
        "/week-3",
        "/week-4",
        "/week-5",
        "/week-6",
        "/week-7",
        "/week-8",
        "/week-9",
        "/week-10",
        "/week-11",
        "/week-12",
        "/week-13",
      ],
      ignoreIndex: true,
    },
  },
  plugins: [{ resolve: `gatsby-theme-document` }],
};
