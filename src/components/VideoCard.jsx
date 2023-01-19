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

// 디테일페이지 비디오카드
export const DetailVideoCard = ({ video }) => {
  const { channelTitle, publishedAt, thumbnails, title } = video.snippet;
  console.log(video);

  const handleClick = () => {};

  return (
    <li className='cursor-pointer hidden gap-4 lg:flex'>
      <img
        src={thumbnails.standard.url}
        className='min-w-[168px] h-[94px] object-cover rounded-lg'
      />
      <div>
        <div className='w-[202px]'>
          <p className='text-[14px] text-[#f1f1f1] h-[40px] overflow-hidden text-ellipsis'>
            {title}
          </p>
          <p className='text-[12px] leading-4 text-[#AAAAAA] '>{channelTitle}</p>
          <p className='text-[12px] leading-4 text-[#AAAAAA] '>
            조회수 {'100만'}회 • {dayjs().to(dayjs(publishedAt))}
          </p>
        </div>
      </div>
    </li>
  );
};
