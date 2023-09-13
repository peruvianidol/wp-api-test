const fetch = require("node-fetch");
const pagesURL = process.env.WORDPRESS_REST_API_URL + 'posts/?type=page';

module.exports = async function () {
  console.log("Fetching data...");

  return fetch(pagesURL)
    .then((res) => res.json())
    .then((json) => json);
};