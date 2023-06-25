'use client';

import { useGetNewTrackQuery } from '@/redux/slices/apiSlice';
import { setTrack } from '@/redux/slices/trackSlice';
import { useDispatch, useSelector } from 'react-redux';

const NewTracks = () => {
  const { data, isError, isLoading } = useGetNewTrackQuery();
  const dispacth = useDispatch();

  const selectTrack = (track) => {
    dispacth(setTrack([track]));
  };

  const { currentTrack } = useSelector((state) => state.track);

  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="mt-10">
      <p className="text-2xl font-bold mb-4">New releases.</p>
      <div className="top-charts overflow-x-auto overflow-y-hidden snap-x flex w-full gap-8">
        {isLoading && (
          <>
            <LoadingSkeletion />
            <LoadingSkeletion />
            <LoadingSkeletion />
          </>
        )}
        {data?.map((tr) => (
          <div
            className="flex flex-col flex-none gap-1 snap-start w-[159px] px-[2px] duration-200 ease-in-out border border-transparent hover:border-iconsHover rounded-md group"
            key={tr.id}
            onClick={() => selectTrack(tr)}
          >
            <div className="w-[153px] h-[153px] rounded-3xl relative">
              <img
                src={tr.album.cover_medium}
                className="w-[153px] h-[153px] rounded-3xl"
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
                  className="equalizer-svg absolute left-0 bottom-0 w-[151px] rounded-3xl rotate-180" // Add a CSS class to the SVG element
                >
                  <rect x="0" y="3" width="2" height="0" className="rect-1" />
                  <rect x="9" y="3" width="2" height="0" className="rect-1" />
                  <rect x="3" y="3" width="2" height="0" className="rect-2" />
                  <rect x="18" y="3" width="2" height="0" className="rect-2" />
                  <rect x="6" y="3" width="2" height="0" className="rect-3" />
                  <rect x="15" y="3" width="2" height="0" className="rect-3" />
                  <rect x="21" y="3" width="2" height="0" className="rect-4" />
                  <rect x="12" y="3" width="2" height="0" className="rect-4" />
                </svg>
              )}
            </div>

            <p className="text-xs group-hover:text-iconsHover truncate text-[#ffffff80]">
              {tr.title}
            </p>
            <p className="text-xs group-hover:text-iconsHover truncate text-[#ffffff80]">
              {tr.artist.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const LoadingSkeletion = () => {
  return (
    <div className="flex flex-col flex-none gap-1 w-[153px]">
      <div className="w-[153px] h-[153px] bg-gray-800 rounded-3xl animate-pulse"></div>
      <p className="h-4 ml-1 animate-pulse bg-gray-800 rounded-xl w-2/3"></p>
      <p className="h-3 ml-1 animate-pulse bg-gray-800 rounded-xl w-1/2"></p>
    </div>
  );
};
export default NewTracks;
