import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiFillVideoCamera,
  AiFillGoogleCircle,
  AiFillBell,
  AiOutlineSearch,
} from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { HiMicrophone } from 'react-icons/hi';
import logo from '../assets/logo.png';

const Header = () => {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <header className='relative bg-[#212121]'>
      <div className='mx-auto max-w-full px-6 h-14 border-solid border-b border-gray-600'>
        <div className='h-full flex items-center justify-between'>
          <div className='flex justify-between w-32'>
            <AiOutlineMenu
              className='w-5 h-5 fill-white cursor-pointer'
              onClick={() => setIsFolded(!isFolded)}
            />
            <img src={logo} alt='logo' className='h-5 cursor-pointer' />
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <BiSearch className='w-5 h-5 fill-white' />
          </div>
          <div className='hidden space-x-10 md:flex'>
            <div className='flex items-center'>
              <div className='flex items-center relative'>
                <input
                  type='search'
                  name='video'
                  id='videoSearch'
                  className='rounded-sm w-72 h-7'
                />
                <AiOutlineSearch className='w-5 h-5 fill-slate-700 absolute right-2 ' />
              </div>
              <HiMicrophone className='w-5 h-5 fill-white ml-3 cursor-pointer' />
            </div>
          </div>
          <div className='flex justify-between w-32'>
            <AiFillVideoCamera className='w-5 h-5 fill-white cursor-pointer' />
            <AiFillGoogleCircle className='w-5 h-5 stroke-white fill-white cursor-pointer' />
            <AiFillBell className='w-5 h-5 stroke-white fill-white cursor-pointer' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
