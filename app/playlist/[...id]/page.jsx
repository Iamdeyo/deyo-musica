'use client';

import { useGetPlaylistTracksQuery } from '@/redux/slices/apiSlice';
import { FiHeart, FiMoreVertical, FiPlay } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setTrack } from '@/redux/slices/trackSlice';
import { PlayAll, MusicAdd } from '@/components/svgs';
import {
  removeFromLikes,
  removeFromMyCollection,
  setLikes,
  setMyCollection,
  setPlaylist,
} from '@/redux/slices/collectionSlice';

import LoadingPage from '@/app/loading';

const Playlist = ({ params }) => {
  const dispacth = useDispatch();
  const { data, isLoading, isError } = useGetPlaylistTracksQuery(params.id);

  const { likes, myCollections } = useSelector((state) => state.collection);

  const { currentTrack } = useSelector((state) => state.track);

  const convertSecondsToMinutes = (seconds) => {
    const minutes = Math.floor(seconds / 60); // Calculate the whole minutes
    const remainingSeconds = seconds % 60; // Calculate the remaining seconds

    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`; // Format the minutes and seconds
  };

  const handleMyCollections = () => {
    if (myCollections.some((pl) => pl.playlist.id === data.playlist.id)) {
      dispacth(removeFromMyCollection(data.playlist.id));
    } else {
      dispacth(setMyCollection(data));
    }
  };

  const handleLikeTracks = (track) => {
    if (likes.some((like) => like.id === track.id)) {
      dispacth(removeFromLikes(track.id));
    } else {
      dispacth(setLikes(track));
    }
  };

  const selectTrack = (track) => {
    dispacth(setTrack([track]));
  };
  const selectAllTracks = () => {
    dispacth(setTrack(data.tracks));
    dispacth(setPlaylist(data.playlist));
  };
  if (isError) return <div>Error fetching data</div>;
  if (isLoading) return <LoadingPage />;

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
              className="flex gap-3 p-3 rounded-[32px] items-center bg-[#ffffff12] cursor-pointer duration-200 ease-in-out hover:text-iconsHover"
              onClick={selectAllTracks}
            >
              <PlayAll />
              <span>Play all</span>
            </span>
            <span
              className="flex gap-3 p-3 rounded-[32px] items-center bg-[#ffffff12] cursor-pointer duration-200 ease-in-out hover:text-iconsHover"
              onClick={handleMyCollections}
            >
              <MusicAdd />
              <span>
                {myCollections.some((pl) => pl.playlist.id === data.playlist.id)
                  ? 'Remove from'
                  : 'Add to'}{' '}
                collections
              </span>
            </span>
            <label className="flex gap-3 p-3 rounded-[32px] items-center bg-[#ffffff12] cursor-pointer duration-200 ease-in-out hover:text-iconsHover">
              <input type="checkbox" className="hidden peer" />
              <FiHeart
                size={16}
                className="text-iconsHover peer-checked:fill-iconsHover"
              />
              <span>Like</span>
            </label>
          </div>
        </div>
      </div>
      <div className="snap-y overflow-y-auto overflow-x-hidden flex gap-[14px] w-full flex-col">
        {data?.tracks.map((tr) => (
          <div
            className="h-[56px] playlist-tracks flex items-center px-2 cursor-pointer md:justify-between duration-500 ease-in-out hover:bg-iconsHover hover:font-bold hover:text-black group"
            key={tr.id}
            onClick={() => selectTrack(tr)}
          >
            <div className="flex items-center gap-5 md:w-2/12">
              <div className="w-[39px] h-[39px] col-start-1 relative rounded-md row-span-2">
                <img
                  src={tr.album.cover_small}
                  alt="track_img"
                  className="w-[39px] h-[39px] rounded-md"
                />
                {currentTrack && currentTrack.id === tr.id && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="equalizer-svg absolute left-0 bottom-0 w-full rounded-md rotate-180" // Add a CSS class to the SVG element
                  >
                    <rect x="0" y="3" width="2" height="0" className="rect-1" />
                    <rect x="9" y="3" width="2" height="0" className="rect-1" />
                    <rect x="3" y="3" width="2" height="0" className="rect-2" />
                    <rect
                      x="18"
                      y="3"
                      width="2"
                      height="0"
                      className="rect-2"
                    />
                    <rect x="6" y="3" width="2" height="0" className="rect-3" />
                    <rect
                      x="15"
                      y="3"
                      width="2"
                      height="0"
                      className="rect-3"
                    />
                    <rect
                      x="21"
                      y="3"
                      width="2"
                      height="0"
                      className="rect-4"
                    />
                    <rect
                      x="12"
                      y="3"
                      width="2"
                      height="0"
                      className="rect-4"
                    />
                  </svg>
                )}
              </div>

              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleLikeTracks(tr);
                }}
                className="hidden md:block"
              >
                {likes.some((like) => like.id === tr.id) ? (
                  <FiHeart fill="red" color="red" />
                ) : (
                  <FiHeart />
                )}
              </span>
            </div>
            <div className="flex flex-col md:justify-between md:w-5/12 gap-[6px] ml-[14px] md:flex-row">
              <p className="text-xs ">{tr.title}</p>
              <p className="text-[10px] ">{tr.artist.name}</p>
            </div>
            <div className="flex flex-col gap-2 ml-auto md:justify-between md:w-2/12 md:flex-row">
              <FiMoreVertical className=" justify-self-end lg:order-last text-iconsHover group-hover:text-black" />
              <p className="text-xs justify-self-end">
                {convertSecondsToMinutes(tr.duration)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Playlist;
