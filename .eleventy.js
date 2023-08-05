module.exports = function(eleventyConfig) {
  require("dotenv").config();
  return {
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};