import React from 'react';
import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';

const MovieDetail = () => {
  // const { state } = useLocation();
  return (
    <div className='w-[100%]'>
      <div className='mt-14 m-[24px] relative pt-[24px]'>
        <RelatedVideos />
      </div>
    </div>
  );
};

export default MovieDetail;
