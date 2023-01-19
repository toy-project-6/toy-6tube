import React from 'react'
import YouTube from 'react-youtube';
import {AiOutlineClockCircle} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import VideoCardInfo from './VideoCardInfo';


const HoverVideo = ({video, videoId, chVideoId, type}) => {
  
  // console.log('안녕', title)
  // console.log('이동혁', video)
  return (
    <div className='w-30 bg-[#212121] rounded-lg absolute'>
      <YouTube
        videoId={videoId}
        opts={{
          width: "300",
          height: "200",
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
          },
        }}
      />
      <VideoCardInfo video={video} videoId={videoId} chVideoId={chVideoId}/>
      <div className='w-30 flex flex-col gap-2'>
        <button className='w-30 p-2 text-white bg-neutral-500 rounded-full flex items-center justify-center'><AiOutlineClockCircle className='mr-2'/>나중에 볼  동영상</button>
        <button className='w-30 p-2 text-white bg-neutral-500 rounded-full flex items-center justify-center'><MdPlaylistAdd className='mr-2'/>현재 재생 목록에 추가</button>
      </div>
    </div>
  )
}

export default HoverVideo
