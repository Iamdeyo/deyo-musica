'use client';

import { useGetPopularTrackQuery } from '@/redux/slices/apiSlice';
import { setTrack } from '@/redux/slices/trackSlice';
import { useDispatch } from 'react-redux';

const PopularTracks = () => {
  const { data, isError, isLoading } = useGetPopularTrackQuery();
  const dispacth = useDispatch();

  const selectTrack = (track) => {
    dispacth(setTrack([track]));
  };

  if (isError) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mt-10">
      <p className="text-2xl font-bold mb-4">Popular in your area</p>
      <div className="top-charts overflow-x-auto overflow-y-hidden snap-x flex w-full gap-8">
        {data.map((tr) => (
          <div
            className="flex flex-col flex-none gap-1 snap-start w-[153px]"
            key={tr.id}
            onClick={() => selectTrack(tr)}
          >
            <img
              src={tr.album.cover_medium}
              className="w-[153px] h-[153px] rounded-3xl"
            />
            <p className="text-xs truncate text-[#ffffff80]">{tr.title}</p>
            <p className="text-xs truncate text-[#ffffff80]">
              {tr.artist.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularTracks;
