'use client';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FiPause, FiPlay } from 'react-icons/fi';
import { BiShuffle } from 'react-icons/bi';
import PrevIcon from '@/public/assets/previous.svg';
import NextIcon from '@/public/assets/next.svg';
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
  const [shuffle, setShuffle] = useState(false);

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
    if (shuffle) {
      let shuffledSongIndex;
      do {
        shuffledSongIndex = Math.floor(Math.random() * tracks.length);
      } while (shuffledSongIndex === currentTrackIndex);

      setCurrentTrackIndex(shuffledSongIndex);
    } else {
      // Increment the current song index
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    }
  };

  const handleShuffle = () => {
    setShuffle((prev) => (prev = !prev));
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
  };

  return (
    <div className="fixed left-0 bottom-0 z-20 player">
      <div className="h-full flex px-4 py-6 relative">
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

        <button className="shuffle-btn" onClick={handleShuffle}>
          <BiShuffle className={shuffle && 'text-iconsHover'} />
        </button>

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
