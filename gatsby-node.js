const { startCase, camelCase } = require("lodash");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type CarsJson implements Node {
      make: String
  }`);
};

const titleCase = (str) => startCase(camelCase(str));
const normalizeTitle = (title) => {
  const getTitle = (tlc) => {
    if (tlc.startsWith("rolls royce")) {
      return "rolls royce";
    }
    if (tlc.startsWith("mercedes benz") || tlc.startsWith("mercedes-benz")) {
      return "mercedes";
    }
    return tlc.split(" ")[0];
  };

  return titleCase(getTitle(title.toLowerCase()));
};

exports.onCreatePage = ({ page, actions, getNodesByType }) => {
  if (page.componentPath.endsWith("{CarsJson.slug}.tsx")) {
    const { slug } = page.context;
    const { createPage, deletePage } = actions;

    const carNode = getNodesByType("CarsJson").find((c) => c.slug === slug);
    const carMake = normalizeTitle(carNode.title);

    deletePage(page);
    createPage({
      ...page,
      page:'404',
      context: {
        ...page.context,
        make: carMake,
      },
    });
  }
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};

exports.createResolvers = ({ createResolvers, getNodesByType }) =>
  createResolvers({
    CarsJsonThumbnails: {
      imageFile: {
        type: "File",
        resolve: (source) =>
          getNodesByType("File").find((fNode) => fNode.name === source.name),
      },
    },
    CarsJson: {
      imageFile: {
        type: "File",
        resolve: (carJsonSourceNode) =>
          getNodesByType("File").find(
            (fNode) => fNode.name === carJsonSourceNode.slug
          ),
      },
      make: {
        type: "String",
        resolve: ({ title }) => titleCase(normalizeTitle(title)),
      },
    },
    CarsJsonCategory: {
      cars: {
        type: "[CarsJson]",
        resolve: ({ carSlugs }) => {
          const allCars = getNodesByType("CarsJson");
          return allCars.filter((c) => carSlugs.includes(c.slug));
        },
      },
    },
  });

exports.sourceNodes = ({
  actions,
  createNodeId,
  createContentDigest,
  getNodesByType,
}) => {
  const { createNode } = actions;

  const dictionary = getNodesByType("CarsJson").reduce((all, next) => {
    next.category.forEach((c) => {
      if (!all[c.slug]) {
        all[c.slug] = {
          title: c.title,
          carSlugs: [],
        };
      }

      if (!all[c.slug].carSlugs.includes(next.slug)) {
        all[c.slug].carSlugs.push(next.slug);
      }
    });

    return all;
  }, {});

  Object.entries(dictionary).forEach(([slug, category]) => {
    const node = {
      ...category,
      slug,
      id: createNodeId(`category-${slug}`),
      parent: null,
      children: [],
      internal: {
        type: "CarsJsonCategory",
        mediaType: "text/html",
        contentDigest: createContentDigest(category),
      },
    };
    createNode(node);
  });

  const { join } = require("path");
  const { readFileSync } = require("fs");

  const b1 = readFileSync(
    join(__dirname, "html-parts", "block1.html")
  ).toString();
  const b2 = readFileSync(
    join(__dirname, "html-parts", "block2.html")
  ).toString();

  const homeNode = {
    b1,
    b2,
  };
  const homePageNode = {
    ...homeNode,
    id: createNodeId(`home-page`),
    parent: null,
    children: [],
    internal: {
      type: "HomePage",
      mediaType: "text/html",
      contentDigest: createContentDigest(homeNode),
    },
  };

  createNode(homePageNode);
};
