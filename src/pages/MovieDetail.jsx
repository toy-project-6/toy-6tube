import React from 'react';
import VidoePlayer from '../components/VideoPlayer'
import { useLocation } from 'react-router-dom';

const MovieDetail = () => {
  const {state} = useLocation()
  console.log('이동혁', state)
  return (
    <div>
      <VidoePlayer />
    </div>
  )
};

export default MovieDetail;
