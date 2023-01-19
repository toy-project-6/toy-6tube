import React, { useEffect, useState } from 'react';
import { getViewCount, getChannelImg } from '../api/request';
import {BsDot} from 'react-icons/bs'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { useNavigate, useLocation } from 'react-router-dom';
import numberToKorean from '../util/numberToKorean';
import HoverVideo from './HoverVideo';
import VideoCardInfo from './VideoCardInfo';
import * as ReactTooltip from 'react-tooltip';

//발행날짜 라이브러리
dayjs.extend(relativeTime);
dayjs.locale('ko');

const VideoCard = ({video, chVideoId, type}) => {
  const {thumbnails} = video.snippet
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
  // const videoId = type ==='channel'? chVideoId : video.id
  const [channelData, setChannelData] = useState([])
  const [hover, setHover] = useState(false)
  const related = type === 'relatedVideo'

  const navigate = useNavigate()
  const location = useLocation()
  const home = location.pathname === '/'

  const handleOver = () => {
    setTimeout(() => {
      setHover(true)
  }, 1000)
  }

  return (
    <li onMouseOver={handleOver} onMouseLeave={() => setHover(false)} className={related ? 'hidden gap-4 lg:flex' : 'cursor-pointer grid gap-4'}>
      {/* {home && hover ? <HoverVideo video={video.snippet} videoId={videoId} chVideoId={chVideoId} type={type}/> : null} */}
      <img onClick={() => {navigate(`/detail/${videoId}`, {state: {video}})}} src={thumbnails.medium.url} className={related ? 'min-w-[168px] h-[94px] object-cover rounded-lg' : 'rounded-lg'}/>
      { channelData && video ? (<VideoCardInfo video={video.snippet} videoId={videoId} chVideoId={chVideoId} type={type}/>) : ''}
    </li>
  );
};

export default VideoCard;
