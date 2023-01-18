import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  },
});

export const mostPopular = async () => {
  const response = await instance.get('/videos', {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: '25',
    },
  });
  return response.data.items;
};

export const related = async (videoId) => {
  const response = await instance.get('/search', {
    params: {
      part: 'snippet',
      maxResults: '11',
      relatedToVideoId: videoId,
      type: 'video',
    },
  });
  console.log(response);
  return response.data.items;
};