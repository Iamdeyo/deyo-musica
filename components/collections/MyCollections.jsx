import { setTrack } from '@/redux/slices/trackSlice';
import { FiPlay } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

const MyCollections = () => {
  const dispacth = useDispatch();
  const data = useSelector((state) => state.collection.myCollections);

  const selectAllTracks = (tracks) => {
    dispacth(setTrack(tracks));
  };
  return (
    <div className="flex gap-5 sm:gap-6 flex-wrap h-full">
      {data?.map((item, index) => {
        return (
          <div
            key={item.playlist.id}
            className={`w-full collections h-[240px] sm:w-[calc(33%-24px)] lg:w-[calc(25%-24px)] xl:w-[calc(20%-24px)] relative snap-start`}
            style={{ backgroundImage: `url(${item.playlist.picture_big})` }}
          >
            <div className="flex flex-col h-full px-4 pb-6 w-full  justify-end rounded-[20px] hover:border-iconsHover  ease-in-out duration-200">
              <p className="text-2xl truncate w-2/3">{item.playlist.title}</p>
              <p className=" truncate w-2/3 text-[10px] opacity-75">
                {item.playlist.user.name}
              </p>
              <p className="mt-8 sm:hidden">2.3m likes</p>
            </div>

            <span
              className="p-3 inline-block rounded-full bg-[#face6666] absolute right-5 bottom-6 hover:animate-pulse"
              onClick={() => selectAllTracks(item.tracks)}
            >
              <FiPlay className="fill-iconsHover text-iconsHover" />
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default MyCollections;
