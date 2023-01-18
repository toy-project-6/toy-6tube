import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  },
});

// export const mostPopular = async () => {
//   const response = await instance.get('/videos', {
//     params: {
//       part: 'snippet',
//       chart: 'mostPopular',
//       maxResults: '25',
//     },
//   });
//   return response.data.items;
// };
