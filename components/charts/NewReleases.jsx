'use client';
import useSWR from 'swr';

const NewReleases = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR('/api/tracks', fetcher);

  if (error) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mt-10">
      <p className="text-2xl font-bold mb-4">New release.</p>
      <div className="overflow-x-auto overflow-y-hidden snap-x flex w-full gap-8">
        {data.data.map((tr) => (
          <div
            className="flex flex-col flex-none gap-1 snap-start w-[153px]"
            key={tr.id}
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
export default NewReleases;
