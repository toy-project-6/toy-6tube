import React from 'react';
import dayjs from 'dayjs';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';

const VideoPlayer = ({ id, state, channelData, subscriberCount, viewCount }) => {
  const { channelTitle, description, publishedAt, tags, title } = state.video.snippet;
  return (
    <div className='flex flex-col gap-3 items-center px-2 grow lg:w-9/12 xs:w-fit'>
      <div className='relative w-full h-0 pt-[29rem]'>
        <iframe
          id='player'
          title='video'
          type='text/html'
          width='640'
          height='360'
          allowFullScreen
          src={`http://www.youtube.com/embed/${id}`}
          className='absolute top-0 left-0 w-full h-full'
        />
      </div>

      <div className='h-fit w-full'>
        <h2 className='text-xl font-semibold pb-2'>{title}</h2>
        <div className='flex justify-between items-center pb-5'>
          <div className='flex gap-3 items-center font-medium'>
            <img
              src={channelData?.thumbnails?.default.url}
              alt='채널 이미지'
              className='rounded-full w-10 h-10'
            />
            <div>
              <div className='text-base'>{channelTitle}</div>
              <div className='text-xs opacity-90'>
                구독자 {Number(subscriberCount).toLocaleString()}명
              </div>
            </div>
            <button className='bg-white hover:bg-gray-400 hover:text-white text-sm py-2 px-4 text-black rounded-3xl ml-5'>
              구독
            </button>
          </div>
          <div className='hidden xl:flex items-center gap-2 h-fit'>
            <div className='flex'>
              <button className='flex items-center gap-2 bg-[#272727] hover:bg-[#3d3d3d] h-9 text-xs py-2 px-4 rounded-l-3xl'>
                <GoThumbsup className='w-4 h-4' />
                <p>좋아요</p>
              </button>

              <button className='h-9 text-sm bg-[#272727] hover:bg-[#3d3d3d] py-2 px-4 rounded-r-3xl'>
                <GoThumbsdown className='w-4 h-4' />
              </button>
            </div>

            <button className='flex items-center gap-2 bg-[#272727] hover:bg-[#3d3d3d] h-9 text-xs py-2 px-4 rounded-3xl'>
              <RiShareForwardLine className='w-4 h-4' />
              공유
            </button>
            <button className='flex items-center gap-2 bg-[#272727] hover:bg-[#3d3d3d] h-9 text-xs py-2 px-4 rounded-3xl'>
              <MdOutlinePlaylistAdd className='w-4 h-4' />
              저장
            </button>
            <button className='flex items-center gap-2 bg-[#272727] hover:bg-[#3d3d3d] h-9 text-xs py-2 px-3 rounded-3xl'>
              <FiMoreHorizontal />
            </button>
          </div>
        </div>

        <div className='bg-[#272727] hover:bg- p-3 rounded-lg'>
          <div className='text-sm flex gap-2 font-semibold'>
            <p>조회수 {Number(viewCount).toLocaleString()}회</p>
            <p>{dayjs().to(dayjs(publishedAt))}</p>
            <p className='opacity-25'>#{tags && tags[0]}</p>
            <p className='opacity-25'>#{tags && tags[1]}</p>
          </div>
          <br />
          <div className='text-xs font-light'>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
