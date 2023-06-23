'use client';

import { useGetPlaylistTracksQuery } from '@/redux/slices/apiSlice';
import { FiHeart, FiMoreVertical, FiPlay } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setTrack } from '@/redux/slices/trackSlice';
import MusicPlusIcon from '@/public/assets/music-square-add.svg';
import PlayIcon from '@/public/assets/playall.svg';
import { setLikes, setMyCollection } from '@/redux/slices/collectionSlice';
import { useState } from 'react';
import { useEffect } from 'react';

const Playlist = ({ params }) => {
  const dispacth = useDispatch();
  const { data, isLoading, isError } = useGetPlaylistTracksQuery(params.id);
  // const [myCollections, setMyCollections] = useState(null)
  const [liked, setLiked] = useState(false);

  // const myCollectionsData = useSelector((state) => state.collection.myCollections);

  // useEffect(()=>{

  // },[])

  const addToCollection = () => {
    dispacth(setMyCollection(data));
  };

  const addLikeTracks = (track) => {
    dispacth(setLikes(track));
  };

  const selectTrack = (track) => {
    dispacth(setTrack([track]));
  };
  const selectAllTracks = () => {
    dispacth(setTrack(data.tracks));
  };
  if (isError) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="px-4 lg:ml-24 lg:pl-0 lg:pr-6">
      <div className="flex flex-col mb-[25px] gap-6 md:flex-row md:mb-[50px]">
        <div className="w-full md:max-w-[284px]">
          <img
            src={data.playlist.picture_big}
            className="w-full max-w-md mx-auto max-h-80 rounded-3xl"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-4xl text-[#A4C7C6] md:mt-auto">
            {data.playlist.title}
          </p>
          <p className="text-sm text-[#EFEEE0] my-[10px]">
            {data.playlist.user.name}
          </p>
          <p className="text-sm text-[#EFEEE0]">
            {data.playlist.tracklist.length} songs
          </p>
          <div className="mt-[25px] flex justify-between md:mt-auto md:justify-start gap-2 playlist-btn">
            <span
              className="flex gap-3 p-3 rounded-[32px] items-center bg-[#ffffff12] cursor-pointer"
              onClick={selectAllTracks}
            >
              <PlayIcon />
              <span>Play all</span>
            </span>
            <span
              className="flex gap-3 p-3 rounded-[32px] items-center bg-[#ffffff12] cursor-pointer"
              onClick={addToCollection}
            >
              <MusicPlusIcon />
              <span>Add to collection</span>
            </span>
            <span className="flex gap-3 p-3 rounded-[32px] items-center bg-[#ffffff12] cursor-pointer">
              <FiHeart size={16} className="text-black" />
              <span>Like</span>
            </span>
          </div>
        </div>
      </div>
      <div className="snap-y overflow-y-auto overflow-x-hidden flex gap-[14px] w-full flex-col">
        {data?.tracks.map((tr) => (
          <div
            className="h-[56px] playlist-tracks flex items-center px-2 cursor-pointer md:justify-between"
            key={tr.id}
            onClick={() => selectTrack(tr)}
          >
            <div className="flex items-center gap-5 md:w-2/12">
              <img
                src={tr.album.cover_small}
                alt="track_img"
                className="w-[39px] h-[39px] col-start-1 rounded-md row-span-2"
              />
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  addLikeTracks(tr);
                }}
                className="hidden md:block"
              >
                <FiHeart />
              </span>
            </div>
            <div className="flex flex-col md:justify-between md:w-5/12 gap-[6px] ml-[14px] md:flex-row">
              <p className="text-xs ">{tr.title}</p>
              <p className="text-[10px] ">{tr.artist.name}</p>
            </div>
            <div className="flex flex-col gap-2 ml-auto md:justify-between md:w-2/12 md:flex-row">
              <FiMoreVertical className=" justify-self-end lg:order-last text-iconsHover" />
              <p className="text-xs justify-self-end">{tr.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Playlist;
