module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("html", (contents) => contents);

  // Return your Object options:
  return {
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
