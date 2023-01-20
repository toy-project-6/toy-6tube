import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { search } from '../api/request';
import VideoCard from '../components/VideoCard';

const Search = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const [videos, setVideos] = useState();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get('query');

  useEffect(() => {
    if (!searchTerm) return;
    search(searchTerm).then((data) => {
      setVideos(data);
    });
  }, [searchTerm]);

  return (
    <ul className='w-full m-6 p-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10'>
      {videos &&
        videos.map((video) => <VideoCard key={video.id.videoId} video={video} type='search' />)}
    </ul>
  );
};

export default Search;
