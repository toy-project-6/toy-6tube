import React, { useEffect, useState } from 'react';
import { getViewCount, getChannelImg } from '../api/request';
import { BsDot } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { useNavigate } from 'react-router-dom';
import numberToKorean from '../util/numberToKorean';
import * as ReactTooltip from 'react-tooltip';

//발행날짜 라이브러리
dayjs.extend(relativeTime);
dayjs.locale('ko');

const VideoCard = ({ video, chVideoId, type }) => {
  const { channelId, channelTitle, publishedAt, thumbnails, title } = video.snippet;
  //channelDetailPage의 경우 videoId를 불러오는 api 경로가 달라 타입을 지정해 chVideoId로 아이디를 받아옴
  //searchPage의 경우에도 마찬가지
  let videoId = '';
  if (type === 'channel') {
    videoId = chVideoId;
  } else if (type === 'search') {
    videoId = video.id.videoId;
  } else {
    videoId = video.id;
  }
  const [viewCount, setViewCount] = useState(0);
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    getViewCount(videoId).then((response) => setViewCount(response));
    getChannelImg(channelId).then((response) => setChannelData(response));
  }, []);

  const navigate = useNavigate();

  //부가적인 객체를 전달할 때, 두번째 인자에 객체를 전달하면 됨
  const handleClick = () => {
    navigate(`/channel/${channelId}`, { state: channelId });
  };

  return (
    <li className='cursor-pointer grid gap-4'>
      <img
        onClick={() => {
          navigate(`/detail/${videoId}`, { state: { video } });
        }}
        src={thumbnails.medium.url}
        className='rounded-lg'
      />
      <div className='flex gap-4'>
        <img src={channelData} className='rounded-full w-6 h-6' />
        <div className='grid gap-0.5'>
          <p className='text-white line-clamp-2 leading-6 font-bold'>{title}</p>
          <p onClick={handleClick} className='text-sm font-semibold text-zinc-300 hover:text-white'>
            {channelTitle}
          </p>
          <p className='text-xs flex font-semibold text-zinc-300'>
            조회수 {viewCount && numberToKorean(viewCount)}회 <BsDot />{' '}
            {dayjs().to(dayjs(publishedAt))}
          </p>
        </div>
        <BiDotsVerticalRounded className='w-5 h-5 flex-shrink-0 text-white' />
      </div>
    </li>
  );
};

export default VideoCard;

// 디테일페이지 비디오카드
export const DetailVideoCard = ({ video }) => {
  const { channelId, channelTitle, publishedAt, thumbnails, title } = video.snippet;
  const navigate = useNavigate();

  const videoClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <li className='hidden gap-4 lg:flex'>
      <img
        onClick={() => videoClick(video.id.videoId)}
        src={thumbnails.standard.url}
        className='cursor-pointer min-w-[168px] h-[94px] object-cover rounded-lg'
      />
      <div className='w-[202px] cursor-pointer' onClick={() => videoClick(video.id.videoId)}>
        <p className='text-[14px] text-[#f1f1f1] h-[40px] overflow-hidden text-ellipsis'>{title}</p>
        <div>
          <p className='text-[12px] leading-4 text-[#AAAAAA] '>{channelTitle}</p>
          <p className='text-[12px] leading-4 text-[#AAAAAA] '>
            조회수 {'100만'}회 • {dayjs().to(dayjs(publishedAt))}
          </p>
        </div>
      </div>
    </li>
  );
};
