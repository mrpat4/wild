const path = require("path");
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr", "fr"],
    interpolation: {
      escapeValue: false,
    },
  },
  localePath: path.resolve("./public/static/locales"),
};
