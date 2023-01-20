import React, { useState, useEffect } from 'react';
import { getMostPopularVideos } from '../api/request';
import VideoCard from '../components/VideoCard';
import { datas } from '../../public/datas';
import Buttons from '../components/Buttons';

const Home = () => {
  const [videos, setVideos] = useState();
  const [type, setType] = useState('');
  useEffect(() => {
    // getMostPopularVideos().then((data) => {
    //   setVideos(data);
    // });
    setVideos(datas);
  }, []);

  return (
    <>
      <div className='flex flex-col m-6'>
        <div className='h-fit w-80 p-4'>
          <iframe
            id='player'
            title='video'
            type='text/html'
            width='100%'
            height='100%'
            allowFullScreen
            src={`http://www.youtube.com/embed/SFO5eU4C4R4`}
            className=' w-[63rem] h-72 rounded-xl overflow-hidden'
          />
        </div>

        <Buttons setVideos={setVideos} setType={setType} />

        <ul className='w-full p-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10'>
          {videos &&
            videos.map((video) => <VideoCard key={video.id.videoId} video={video} type={type} />)}
        </ul>
      </div>
    </>
  );
};

export default Home;
