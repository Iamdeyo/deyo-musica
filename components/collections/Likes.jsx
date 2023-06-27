import { setTrack } from '@/redux/slices/trackSlice';
import { FiPlay } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
const Likes = () => {
  const data = useSelector((state) => state.collection.likes);
  const dispacth = useDispatch();

  const selectTrack = (track) => {
    dispacth(setTrack([track]));
  };

  return (
    <div className="flex gap-5 sm:gap-6 flex-wrap h-full">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="w-full collections h-[240px] sm:w-[calc(33%-24px)] lg:w-[calc(25%-24px)] xl:w-[calc(20%-24px)] relative snap-start"
            style={{ backgroundImage: `url(${item.album.cover_big})` }}
          >
            <div className="flex flex-col h-full px-4 pb-6 w-full  justify-end rounded-[20px] hover:border-iconsHover  ease-in-out duration-200">
              <p className="text-2xl truncate w-2/3">{item.title}</p>
              <p className=" truncate w-2/3 text-[10px] opacity-75">
                {item.artist.name}
              </p>
              <p className="mt-8 opacity-0 sm:hidden ">2.3m likes</p>
            </div>

            <span
              className="p-3 inline-block rounded-full bg-[#face6666] absolute right-5 bottom-6 hover:animate-pulse"
              onClick={() => selectTrack(item)}
            >
              <FiPlay className="fill-iconsHover text-iconsHover" />
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default Likes;
