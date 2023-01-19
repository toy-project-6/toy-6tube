import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

//발행날짜 라이브러리
dayjs.extend(relativeTime);
dayjs.locale('ko');

const VideoCard = ({ video }) => {
  // console.log('video', video)

  const { channelTitle, publishedAt, thumbnails, title } = video.snippet;
  return (
    <li className='cursor-pointer grid gap-4'>
      <img src={thumbnails.standard ? thumbnails.standard.url : thumbnails.high.url} />
      <div>
        <img />
        <div className='grid gap-2'>
          <p className='line-clamp-3 leading-6'>{title}</p>
          <p>{channelTitle}</p>
          <p>조회수 {dayjs().to(dayjs(publishedAt))}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
