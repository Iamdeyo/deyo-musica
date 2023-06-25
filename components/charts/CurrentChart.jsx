'use client';

import { FiHeart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const CurrentChart = () => {
  const currentPlaylist = useSelector((state) => state.collection.playlist);
  const profileImgs = [
    'https://loremflickr.com/320/240/girl/all',
    'https://loremflickr.com/320/240/boy/all',
    'https://loremflickr.com/320/240/boy/',
    'https://loremflickr.com/320/240/brazil,girl/all',
    'https://loremflickr.com/320/240/paris,girl/',
  ];
  return (
    <div
      className="current-playlist rounded-[20px] w-full h-[503px] bg-[#609eaf] lg:h-[373px]"
      style={
        currentPlaylist && {
          backgroundImage: `url(${currentPlaylist.picture_xl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }
      }
    >
      <div
        className="rounded-[20px] bg-[50px] w-full h-full px-8 pt-8 pb-11 flex flex-col "
        style={
          currentPlaylist && {
            background:
              'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 40%)',
          }
        }
      >
        <p className="text-xs ">Current playlist</p>
        <p className="font-bold text-4xl mt-auto">
          {currentPlaylist ? (
            <Link
              className="hover:text-iconsHover hover:underline duration-200 ease-in-out"
              href={`/playlist/${currentPlaylist.id}`}
            >
              {' '}
              {currentPlaylist?.title}{' '}
            </Link>
          ) : (
            'Musica'
          )}
        </p>
        <p className="text-sm font-normal  sm:mb-auto  sm:w-1/2">
          {currentPlaylist
            ? currentPlaylist.user.name
            : 'A simple react music by deyo'}
        </p>
        <div className="flex items-center mt-10 sm:mt-0 ml-[15.3px]">
          {profileImgs.map((profileImg, index) => (
            <img
              key={index}
              src={profileImg}
              alt="profile"
              className="rounded-full -ml-[15.3px] w-[34px] h-[34px]"
            />
          ))}

          <span className="ml-5 mr-4">
            <FiHeart size={24} fill="white" />
          </span>
          <p className="text-2xl">
            {currentPlaylist ? currentPlaylist.likes : '10'} Likes
          </p>
        </div>
      </div>
    </div>
  );
};
export default CurrentChart;
