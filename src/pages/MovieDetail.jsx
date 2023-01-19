import React from 'react';
import YouTube from 'react-youtube';
import Header from '../components/Header';
import Nav from '../components/Nav';
import RelatedVideos from '../components/RelatedVideos';

const MovieDetail = () => {
  return (
    <div className='w-full h-fit mt-5 flex flex-nowrap justify-around bg-black'>
      <YouTube />
      <RelatedVideos />
    </div>
  );
};

export default MovieDetail;
