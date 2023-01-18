import React, { useState, useEffect } from 'react';
import { mostPopular } from '../api/request';
import VideoCard from '../components/VideoCard';
import Nav from '../components/Nav';

const Home = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    mostPopular().then((data) => {
      setVideos(data);
    });
  }, []);

  return (
    <ul className='w-full p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
      {videos && videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </ul>
  );
};

export default Home;
