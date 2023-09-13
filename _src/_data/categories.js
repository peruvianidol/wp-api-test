const fetch = require("node-fetch");
const categoriesURL = process.env.WORDPRESS_REST_API_URL + 'categories/';

module.exports = async function () {
  console.log("Fetching data...");

  return fetch(categoriesURL)
    .then((res) => res.json())
    .then((json) => json);
};