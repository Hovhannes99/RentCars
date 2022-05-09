const _ = require("lodash");

function extractMinWidths(breakpoints) {
  return _.flatMap(breakpoints, (breakpoints) => {
    if (_.isString(breakpoints)) {
      breakpoints = { min: breakpoints };
    }

    if (!Array.isArray(breakpoints)) {
      breakpoints = [breakpoints];
    }

    return _(breakpoints)
      .filter((breakpoint) => {
        return _.has(breakpoint, "min") || _.has(breakpoint, "min-width");
      })
      .map((breakpoint) => {
        return _.get(breakpoint, "min-width", breakpoint.min);
      })
      .value();
  });
}

function mapMinWidthsToPadding(minWidths, screens, paddings) {
  if (typeof paddings === "undefined") {
    return [];
  }

  if (!_.isObject(paddings)) {
    return [
      {
        screen: "DEFAULT",
        minWidth: 0,
        padding: paddings,
      },
    ];
  }

  const mapping = [];

  if (paddings.DEFAULT) {
    mapping.push({
      screen: "DEFAULT",
      minWidth: 0,
      padding: paddings.DEFAULT,
    });
  }

  _.each(minWidths, (minWidth) => {
    Object.keys(screens).forEach((screen) => {
      const screenMinWidth = _.isPlainObject(screens[screen])
        ? screens[screen].min || screens[screen]["min-width"]
        : screens[screen];

      if (`${screenMinWidth}` === `${minWidth}`) {
        mapping.push({
          screen,
          minWidth,
          padding: paddings[screen],
        });
      }
    });
  });

  return mapping;
}

module.exports = function () {
  return function ({ addComponents, theme, variants }) {
    const screens = theme("container.screens", theme("screens"));
    const minWidths = extractMinWidths(screens);
    const paddings = mapMinWidthsToPadding(
      minWidths,
      screens,
      theme("container.padding")
    );

    const generatePaddingFor = (minWidth) => {
      const paddingConfig = _.find(
        paddings,
        (padding) => `${padding.minWidth}` === `${minWidth}`
      );

      if (!paddingConfig) {
        return {};
      }

      return {
        paddingRight: paddingConfig.padding,
        paddingLeft: paddingConfig.padding,
      };
    };

    const atRules = _(minWidths)
      .sortBy((minWidth) => parseInt(minWidth))
      .sortedUniq()
      .map((minWidth) => {
        let container = {
          ...generatePaddingFor(minWidth),
        };

        if (parseInt(minWidth) >= 1440) {
          container["max-width"] = minWidth;
        }

        const cleanContainer = Object.entries(container)
          .filter(([, value]) => !!value)
          .reduce((agg, [key, value]) => ({ ...agg, [key]: value }), {});

        if (Object.keys(cleanContainer).length === 0) {
          return;
        }

        return {
          [`@media (min-width: ${minWidth})`]: {
            ".container": cleanContainer,
          },
        };
      })
      .filter((rule) => !!rule)
      .value();

    addComponents(
      [
        {
          ".container": Object.assign(
            { width: "100%" },
            theme("container.center", false)
              ? { marginRight: "auto", marginLeft: "auto" }
              : {},
            generatePaddingFor(0)
          ),
        },
        ...atRules,
      ],
      variants("container")
    );
  };
};
