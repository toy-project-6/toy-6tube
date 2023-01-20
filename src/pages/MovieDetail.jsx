import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import { getChannelData, getSubscriberInfo, getViewCount } from '../api/request';
import VideoPlayer from '../components/VideoPlayer';

const MovieDetail = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const { id } = useParams();
  const { state } = useLocation();
  const { channelId, channelTitle, description, publishedAt, tags, title } = state.video.snippet;
  const [viewCount, setViewCount] = useState(0);
  const [channelData, setChannelData] = useState({});
  const [subscriberCount, setSubscriberCount] = useState(0);

  useEffect(() => {
    getViewCount(id).then((response) => setViewCount(response));
    getChannelData(channelId).then((response) => setChannelData(response));
    getSubscriberInfo(channelId).then((response) => setSubscriberCount(response));
  }, []);

  return (
    <div className='h-fit w-full mt-5 m-4 flex flex-row gap-5 bg-black text-white'>
      <VideoPlayer
        id={id}
        state={state}
        viewCount={viewCount}
        channelData={channelData}
        subscriberCount={subscriberCount}
      />
      <RelatedVideos />
    </div>
  );
};

export default MovieDetail;
