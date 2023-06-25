'use client';

import { useGetPlaylistQuery } from '@/redux/slices/apiSlice';
import { FiHeart } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const TopCharts = () => {
  const router = useRouter();
  const { data, isError, isLoading } = useGetPlaylistQuery();
  if (isError) return <div>Error fetching data</div>;

  const handlePlaylistRoute = (pl) => {
    router.push(`/playlist/${pl.id}`);
  };
  return (
    <div className="">
      <p className="font-bold text-xl mb-4">Top Charts</p>
      <div className="top-charts overflow-x-auto overflow-y-hidden snap-x lg:overflow-y-auto lg:overflow-x-hidden lg:h-[329px] lg:flex-col">
        {/* Loading Skeleton */}
        {isLoading && (
          <>
            <LoadingSkeletion /> <LoadingSkeletion /> <LoadingSkeletion />
          </>
        )}
        {data &&
          data.map((pl) => (
            <div
              className="bg-darkAlt flex-none snap-start px-4 pb-6 pt-4 rounded-[20px] w-screen max-w-xs min-w-[200px] relative flex flex-row gap-4 mr-4 lg:flex-row lg:pb-4 lg:max-w-[418px] h-fit lg:mr-0 lg:mb-4 cursor-pointer duration-200 ease-in-out border border-[#fff0] hover:border-iconsHover hover:text-iconsHover"
              key={pl.id}
              onClick={() => handlePlaylistRoute(pl)}
            >
              <img
                src={pl.picture_medium}
                alt="cover_img"
                className="rounded-[10px] w-[100px] h-[100px] lg:h-[64px] lg:w-[64px]"
              />

              <div className="flex flex-col">
                <p className="text-lg w-2/3 lg:w-full truncate">{pl.title}</p>
                <p className="text-xs opacity-50 w-2/3 lg:w-full truncate">
                  {pl.user.name}
                </p>
                <p className="text-sm mt-6 lg:mt-0">{'22:20'}</p>
                <span className="flex w-9 h-9 items-center justify-center rounded-full border border-[#ffffff27] absolute top-4 right-4 lg:top-1/2 lg:transform lg:-translate-y-1/2">
                  <FiHeart className="text-iconsHover" />
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const LoadingSkeletion = () => {
  return (
    <div className="bg-darkAlt flex-none px-4 pb-6 pt-4 rounded-[20px] w-screen max-w-xs min-w-[200px] relative flex flex-row gap-4 mr-4 lg:flex-row lg:pb-4 lg:max-w-[418px] h-fit lg:mr-0 lg:mb-4">
      <div className="rounded-[10px] w-[100px] h-[100px] lg:h-[64px] lg:w-[64px] bg-slate-800 animate-pulse"></div>

      <div className="flex flex-col animate-pulse w-full">
        <p className="h-5 bg-gray-800 rounded-2xl w-2/3"></p>
        <p className="h-3 mt-2 bg-gray-800 rounded-2xl w-1/2"></p>
        <p className="h-2 bg-gray-800 rounded-2xl w-1/3 mt-6 lg:mt-3"></p>
      </div>
    </div>
  );
};
export default TopCharts;
