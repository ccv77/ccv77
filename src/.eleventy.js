const moment = require("moment");

module.exports = function(eleventyConfig) {
  // date filter (localized)
  eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
    locale = locale ? locale : "en";
    moment.locale(locale);
    return moment(date).format(format);
  });

  eleventyConfig.addPassthroughCopy({
    "src/assets/images": "images" 
  });


  eleventyConfig.addCollection("projects_en", function(collection) {
    return collection.getFilteredByGlob("src/en/projects/*.md");
  });
};



