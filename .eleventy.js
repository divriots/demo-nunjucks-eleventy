let Nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader([
      "node_modules/@backlight-dev/divriots.starter-nunjucks/",
    ])
  );
  eleventyConfig.setLibrary("njk", nunjucksEnvironment);
};
