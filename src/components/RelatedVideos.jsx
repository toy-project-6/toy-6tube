import React, { useState, useEffect } from 'react';
import { related } from '../api/request';
import { datas } from '../../public/datas';
import VideoCard from './VideoCard';

const RelatedVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // related('HO6cbtdmkIc').then((res) => {
    //   setVideos(res);
    // });
    // console.log(datas);
    setVideos(datas);
  }, []);

  return (
    <div className='w-[402px] absolute right-0 pr-[24px]'>
      <ul className='gap-[8px] columns-10 flex flex-col'>
        {videos.map((video) => (
          // <DetailVideoCard key={Object.entries(video.id)[1][1]} video={video} />
          <VideoCard type='relatedVideo' key={Object.entries(video.id)[1][1]} video={video} />
        ))}
      </ul>
    </div>
  );
};

export default RelatedVideos;
