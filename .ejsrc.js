const locales = require('./locales');
module.exports = {
  locals: {
    ...locales.getLocale('en'),
    // Helper functions available in EJS templates
    getAlternateUrls: locales.getAlternateUrls,
    getPageMeta: locales.getPageMeta,
    getEnglishSlug: locales.getEnglishSlug,
    getFrenchSlug: locales.getFrenchSlug,
  },
};
