const fetch = require("node-fetch");
const postsURL = process.env.WORDPRESS_REST_API_URL + 'posts/';

module.exports = async function () {
  console.log("Fetching data...");

  return fetch(postsURL)
    .then((res) => res.json())
    .then((json) => json);
};