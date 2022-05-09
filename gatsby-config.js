const SITE_URL = "https://brombil.com";
module.exports = {
  siteMetadata: {
    title: "pugachev demo",
    siteUrl: SITE_URL,
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_REFRESH: true,
    QUERY_ON_DEMAND: true,
    FAST_DEV: true,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-babel-remove-prop-types",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: "./src/static/",
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

