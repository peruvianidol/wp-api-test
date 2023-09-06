const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
  require("dotenv").config();

  eleventyConfig.addFilter('longDate', dateObj => {
    return DateTime.fromISO(dateObj, {zone: 'utc'}).toFormat('LLLL d, yyyy');
  });

  eleventyConfig.addFilter('w3Date', dateObj => {
    return DateTime.fromISO(dateObj, {zone: 'utc'}).toISO();
  });
  
  return {
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};