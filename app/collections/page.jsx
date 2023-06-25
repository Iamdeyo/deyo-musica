'use client';
import Likes from '@/components/collections/Likes';
import MyCollections from '@/components/collections/MyCollections';
import { useState } from 'react';

function Collections() {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [mode, setMode] = useState('collections');

  const modeHandler = () => {
    mode === 'collections' ? setMode('likes') : setMode('collections');
  };

  return (
    <div className="px-4 lg:ml-24 lg:pl-0 lg:pr-6">
      <div className="flex gap-4 sm:gap-2 mb-10">
        <span
          onClick={modeHandler}
          className={`text-center rounded-3xl  text-sm py-[10px] w-full cursor-pointer hover:opacity-80 duration-200 ease-in-out sm:w-fit sm:px-[17.5px]
           ${
             mode === 'collections'
               ? 'bg-iconsHover text-[#1D2123]'
               : 'border border-[#efeee0] text-[#EFEEE0]'
           }
          `}
        >
          My collection
        </span>
        <span
          onClick={modeHandler}
          className={`text-center rounded-3xl  text-sm py-[10px] w-full cursor-pointer hover:opacity-80 duration-200 ease-in-out sm:w-fit sm:px-[17.5px]
           ${
             mode !== 'collections'
               ? 'bg-iconsHover text-[#1D2123]'
               : 'border border-[#efeee0] text-[#EFEEE0]'
           }
          `}
        >
          Likes
        </span>
      </div>
      <div>{mode === 'collections' ? <MyCollections /> : <Likes />}</div>
    </div>
  );
}
export default Collections;
