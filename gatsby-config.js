const SITE_URL = "http://localhost:8000/";
module.exports = {
  siteMetadata: {
    title: "pugachev demo",
    siteUrl: SITE_URL,
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_REFRESH: true,
    QUERY_ON_DEMAND: true,
    GRAPHQL_TYPEGEN: true,
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_WEBPACK_CACHE: true,
    LMDB_STORE: true,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/static/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("postcss-nested"),
          require("tailwindcss"),
          require("autoprefixer"),
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "cars",
        path: "./src/data/",
      },
      __key: "cars",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: "./src/",
      },
      __key: "static",
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    "gatsby-transformer-json",
  ],
};

