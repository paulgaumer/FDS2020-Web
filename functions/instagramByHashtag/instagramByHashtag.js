require('isomorphic-fetch');

// Instagram request config
const userId = process.env.GATSBY_INSTA_USER_ID;
const accessToken = process.env.GATSBY_INSTA_ACCESS_TOKEN;
const baseUrl = `https://graph.facebook.com/v8.0/`;

// Instagram request content
const fields = `id,media_url,media_type,permalink`;

// Netlify cache
const cache = {
  // Initial values
  lastFetch: 0,
  posts: [],
};

async function getHashtagId(hashtag) {
  const res = await fetch(
    `${baseUrl}ig_hashtag_search?user_id=${userId}&q=${hashtag}&access_token=${accessToken}`
  );
  const data = await res.json();
  if (!data.data) {
    // If the hashtag is incorrect & deosn't match an ID, use #fetedelascience as a backup
    return '17843702416043440';
  } else {
    const hashtagId = data.data[0].id;
    return hashtagId;
  }
}

async function getRecentMedia(hashtagId) {
  const res = await fetch(
    `${baseUrl}${hashtagId}/recent_media?user_id=${userId}&fields=${fields}&access_token=${accessToken}`
  );
  const data = await res.json();
  return data.data;
}
async function getTopMedia(hashtagId) {
  const res = await fetch(
    `${baseUrl}${hashtagId}/top_media?user_id=${userId}&fields=${fields}&access_token=${accessToken}`
  );
  const data = await res.json();
  return data.data;
}

const sortPosts = (posts) => {
  return posts.filter((p) => p.media_type === 'IMAGE').slice(0, 10);
};

async function getPosts(hashtag) {
  // first see if we have a cache from the last 10 min
  const timeSinceLastFetch = Date.now() - cache.lastFetch;
  if (timeSinceLastFetch <= 200000) {
    return cache.posts;
  }
  //Get the corresponding ID from the requested hashtag
  const hashtagId = await getHashtagId(hashtag);
  //Get most recent media (< 24h) for the hashtag
  const recentMedia = await getRecentMedia(hashtagId);
  if (recentMedia.length >= 10) {
    const posts = sortPosts(recentMedia);
    cache.lastFetch = Date.now();
    cache.posts = posts;
    return posts;
  } else {
    //If there are less than 10 recent media, use top media as a backup
    const topMedia = await getTopMedia(hashtagId);
    const posts = sortPosts(topMedia);
    cache.lastFetch = Date.now();
    cache.posts = posts;
    return posts;
  }
}

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const posts = await getPosts(data.hashtag);
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(posts),
  });
};
