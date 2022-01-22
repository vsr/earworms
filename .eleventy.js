module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("html", (contents) => contents);
  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy("src/earworms.webmanifest");
  eleventyConfig.addPassthroughCopy("src/sw.js");
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
