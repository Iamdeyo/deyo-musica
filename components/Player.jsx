'use client';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FiPause, FiPlay } from 'react-icons/fi';
import PrevIcon from '@/public/assets/previous.svg';
import NextIcon from '@/public/assets/next.svg';
import VolIcon from '@/public/assets/volume-high.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { removeCurrentTrack, setCurrentTrack } from '@/redux/slices/trackSlice';

const Player = () => {
  const dispacth = useDispatch();
  const getTracks = useSelector((state) => state.track.track);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [track, setTrack] = useState(null);

  useEffect(() => {
    setTracks(getTracks);
    setCurrentTrackIndex(0);
  }, [getTracks]);

  useEffect(() => {
    setTrack(tracks[currentTrackIndex]);
  }, [currentTrackIndex, tracks]);

  const currentTrack = () => {
    dispacth(setCurrentTrack(track));
  };

  const handleNextSong = () => {
    // Increment the current song index
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const handleEndSong = () => {
    if (currentTrackIndex + 1 === tracks.length) {
      dispacth(removeCurrentTrack());
    }
    handleNextSong();
  };

  const handlePlauseSong = () => {
    dispacth(removeCurrentTrack());
  };

  const handlePrevSong = () => {
    // Decrement the current song index
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
  };

  const customIcons = {
    play: <FiPlay fill="#fff" className="sm:text-[12px]" />,
    pause: <FiPause fill="#fff" className="sm:text-[12px]" />,
    previous: <PrevIcon />,
    next: <NextIcon />,
    volume: <VolIcon />,
  };

  return (
    <div className="fixed left-0 bottom-0 z-20 player">
      <div className="h-full flex px-4 py-6">
        <div className="flex items-center h-full sm:w-[20%] gap-3 ">
          {track && (
            <img
              src={track?.album.cover_medium}
              alt="track_cover"
              className="w-[57.41px] h-[57.41px] rounded-[16.4px]"
            />
          )}
          <div className="flex-1 min-w-0">
            <p className="font-bold truncate">{track?.title}</p>
            <p className="text-xs text-[#ffffff70] font-bold">
              {track?.artist.name}
            </p>
          </div>
        </div>

        <AudioPlayer
          src={track?.preview}
          showSkipControls={true}
          showJumpControls={false}
          showFilledVolume={true}
          customIcons={customIcons}
          onClickNext={handleNextSong}
          onClickPrevious={handlePrevSong}
          onEnded={handleEndSong}
          onPlay={currentTrack}
          onPause={handlePlauseSong}
        />
      </div>
    </div>
  );
};
export default Player;
