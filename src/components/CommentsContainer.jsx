import React, { useState, useEffect } from 'react';
import { commentDatas } from '../../public/commentData';
import { getComments } from '../api/request';
import Comment from './Comment';

const CommentsContainer = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    // getComments(id).then((res) => {
    //   setComments(res);
    // });
    console.log(commentDatas[0]);
    setComments(commentDatas[0]);
  }, []);

  const commentTest = commentDatas[0];
  console.log(commentTest[0].snippet);

  return (
    <div>
      <div className='mt-[24px] mb-[32px] px-2'>
        <div className='h-6 leading-6 mb-6'>
          <span className='mr-6'>댓글 {'1080'} 개</span>
          <span>정렬기준</span>
        </div>
        <div className='h-[40px] w-[100%] flex place-content-around leading-10'>
          <div className='mr-4'>
            <img
              src='https://yt3.ggpht.com/ytc/AMLnZu_Xgr3wLT7ux1nPpoSTlkUUPQiHJFFSVkOVo4La0-J20g=s48-c-k-c0x00ffffff-no-rj'
              className='rounded-full'
            />
          </div>
          <div className='text-zinc-300 text-[15px] w-[90%] h-[25px] leading-[25px] border-solid border-b border-neutral-600'>
            댓글추가...
          </div>
        </div>
        <div className='mt-10 mb-[32px] px-2'>
          <ul className='gap-[8px] columns-10 flex flex-col'>
            {commentTest.map((comment) => (
              <Comment
                key={comment.etag}
                img={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                name={comment.snippet.topLevelComment.snippet.authorDisplayName}
                publishedAt={comment.snippet.topLevelComment.snippet.publishedAt}
                updatedAt={comment.snippet.topLevelComment.snippet.updatedAt}
                text={comment.snippet.topLevelComment.snippet.textDisplay}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommentsContainer;
