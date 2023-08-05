* Use node-fetch@2 (https://stackoverflow.com/questions/69087292/requirenode-fetch-gives-err-require-esm)
* Different URL for non-hosted Wordpress (https://developer.wordpress.com/docs/api/1.1/get/sites/%24site/posts/) where $site is yourdomain.wordpress.com
* Different JSON structure. 
  - Use title instead of title.rendered
  - Use "posts.posts" to paginate data in Eleventy.