import React from 'react';
import { commentDatas } from '../../public/commentData';

const Comment = ({ id, img, name, publishedAt, updatedAt, text }) => {
  console.log(id);
  return (
    <li key={id} className='h-[98px] flex'>
      <div className='w-10 h-10 mr-4'>
        <img src={img} className='rounded-full' />
      </div>
      <div>
        <div className='flex'>
          <div className='h-5'>{name}</div>
          <div>
            {publishedAt}
            {publishedAt !== updatedAt ? ' (수정됨)' : ''}
          </div>
        </div>
        <div>
          <div className='h-10'>{text}</div>
        </div>
      </div>
    </li>
  );
};

export default Comment;
