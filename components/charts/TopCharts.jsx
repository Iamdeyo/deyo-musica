'use client';

import { FiHeart } from 'react-icons/fi';
import useSWR from 'swr';

const TopCharts = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR('/api/playlist', fetcher);
  if (error) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="lg:ml-96">
      <p>Top Charts</p>
      <div className="top-charts overflow-x-auto overflow-y-hidden snap-x lg:overflow-y-auto lg:overflow-x-hidden lg:h-[570px] lg:flex-col">
        {data &&
          data.data.map((pl) => (
            <div
              className="bg-darkAlt flex-none snap-start px-4 pb-6 pt-4 rounded-[20px] w-screen max-w-xs min-w-[200px] relative flex flex-row gap-4 mr-4 lg:flex-row lg:pb-4 lg:max-w-[418px] h-fit lg:mr-0 lg:mb-4"
              key={pl.id}
            >
              <img
                src={pl.picture_medium}
                alt="cover_img"
                className="rounded-[10px] w-[100px] h-[100px] lg:h-[64px] lg:w-[64px]"
              />

              <div className="flex flex-col">
                <p className="text-lg truncate">{pl.title}</p>
                <p className="text-xs opacity-50 truncate">{pl.user.name}</p>
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
export default TopCharts;
