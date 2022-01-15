// next.config.js

// const nextTranslate = require('next-translate')

// module.exports = nextTranslate()

// const { nextI18NextRewrites } = require('next-i18next/rewrites')

// const localeSubpaths = {
//     en: 'en',
//     de: "de",
// };

const { i18n } = require("./next-i18next.config");

const withImages = require("next-images");

module.exports = withImages({
  // rewrites: async () => nextI18NextRewrites(localeSubpaths),
  // publicRuntimeConfig: { localeSubpaths },
  // useFileSystemPublicRoutes: false,
  i18n,
});
// module.exports = withImages();
