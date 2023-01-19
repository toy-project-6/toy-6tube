import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { search } from '../api/request';
import VideoCard from '../components/VideoCard';

const Search = () => {
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
    <ul className='w-full mt-16 p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
      {videos && videos.map((video) => <VideoCard key={video.id.videoId} video={video} />)}
    </ul>
  );
};

export default Search;
