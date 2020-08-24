require('isomorphic-fetch');

const hashtag = 'fetedelascience';

const url = `https://www.instagram.com/explore/tags/${hashtag}/?__a=1&max_id=QVFDVHN4NE5RVFNQQzgyd0RWXzVxa19sR0Znb1pWbzE0dGFpSUFMNWVNcEVPalV2ZVBjSWhxbDhNV3B3QUs5M05rbWJ1NFpFeF9IWmRqRE9jT3o5VEtNWA==`;

const cache = {
  // Initial values
  lastFetch: 0,
  posts: [],
};

async function getPosts() {
  // first see if we have a cache in 30 min
  // const timeSinceLastFetch = Date.now() - cache.lastFetch;
  // if (timeSinceLastFetch <= 600000) {
  //   return cache.posts;
  // }
  console.log('YOO FROM GETPOSTS');
  console.log(url);
  const data = await fetch(url).then((res) => res.json());
  const posts = slimUpPosts(data);
  // cache.lastFetch = Date.now();
  // cache.posts = posts;
  return posts;
}

function slimUpPosts(response) {
  return response.graphql.hashtag.edge_hashtag_to_media.edges
    .slice(0, 10)
    .map((edge) => ({
      thumbnail: edge.node.thumbnail_src,
      url: `https://instagram.com/p/${edge.node.shortcode}`,
      caption: edge.node.edge_media_to_caption.edges[0].node.text,
      id: edge.node.id,
    }));
}

exports.handler = async (event, context, callback) => {
  const posts = await getPosts();
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(posts),
  });
};
