import React, {useEffect, useState} from 'react'
import { getViewCount, getChannelImg } from '../api/request';
import {BsDot} from 'react-icons/bs'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { useNavigate } from 'react-router-dom';

//발행날짜 라이브러리
dayjs.extend(relativeTime);
dayjs.locale("ko");

const VideoCard = ({video}) => {
  const {channelId, channelTitle, publishedAt, thumbnails, title} = video.snippet
  const [viewCount, setViewCount] = useState(0)
  const [channelData, setChannelData] = useState([])

useEffect(() => {
  const videoId = video.id
  getViewCount(videoId).then((response) => setViewCount(response))

  getChannelImg(channelId).then(response => setChannelData(response))

}, [])

const navigate = useNavigate()

//부가적인 객체를 전달할 때, 두번째 인자에 객체를 전달하면 됨
const handleClick = () => {
  navigate(`/channel/${channelId}`, { state: channelId })   
}

  return (
    <li className='cursor-pointer grid gap-4'>
      <img src={thumbnails.standard.url}/>
      <div className='flex gap-4'>
        <img src={channelData} className='rounded-full w-6 h-6'/>
        <div className='grid gap-0.5'>
          <p className='line-clamp-2 leading-6 font-bold'>{title}</p>
          <p onClick={handleClick} className='text-sm font-semibold text-zinc-300 hover:text-white'>{channelTitle}</p>
          <p className='flex text-sm font-semibold text-zinc-300'>조회수 {viewCount}회 <BsDot/> {dayjs().to(dayjs(publishedAt))}</p>
        </div>
        <BiDotsVerticalRounded className='text-xl'/>
      </div>
    </li>
  )
}

export default VideoCard
