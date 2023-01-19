import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import RelatedVideos from '../components/RelatedVideos';

const MovieDetail = () => {
  return (
    <div className='w-[100%] bg-[#212121]'>
      <div className='mt-14 m-[24px] relative pt-[24px]'>
        <RelatedVideos />
      </div>
    </div>
  );
};

export default MovieDetail;
