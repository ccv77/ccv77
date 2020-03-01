const moment = require("moment");

module.exports = function(eleventyConfig) {
  // date filter (localized)
  eleventyConfig.addNunjucksFilter("date", function(date, format, locale) {
    locale = locale ? locale : "en";
    moment.locale(locale);
    return moment(date).format(format);
  });

  eleventyConfig.addNunjucksFilter("stringify", function(value) {
    return JSON.stringify(value);
  });

  eleventyConfig.addPassthroughCopy({
    "src/assets/images": "images/"
  });
  eleventyConfig.addPassthroughCopy("src/content/**/*.jpg");
};
