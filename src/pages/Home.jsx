import React, {useState, useEffect} from 'react';
import { mostPopular } from '../api/request';
import VideoCard from '../components/VideoCard';

const Home = () => {
  const [videos, setVideos] = useState()

  useEffect(() => {
    mostPopular().then(data =>{setVideos(data)})
  }, [])

  console.log(videos)

  return (
    <ul className='flex'>
      <h1 className='text-red-800'>안녕하세요</h1>
      {
        videos && (
          videos.map((video) => <VideoCard key={video.id} video={video}/>)
        )
      }
    </ul>
  );
};

export default Home;
