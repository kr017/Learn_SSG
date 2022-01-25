module.exports = function (config) {
  config.addPassthroughCopy("src/js");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
