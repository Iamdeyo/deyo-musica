import { FiHeart } from 'react-icons/fi';
import RecImg from '@/public/assets/Rectangle14.png';

const CurrentChart = () => {
  const profileImgs = [
    'https://loremflickr.com/320/240/girl/all',
    'https://loremflickr.com/320/240/boy/all',
    'https://loremflickr.com/320/240/boy/',
    'https://loremflickr.com/320/240/brazil,girl/all',
    'https://loremflickr.com/320/240/paris,girl/',
  ];
  return (
    <div className="rounded-[20px] w-full h-[503px] px-8 pt-8 pb-11 bg-[#609EAF] flex flex-col lg:h-[373px]">
      <p className="text-xs ">Current playlist</p>
      <p className="font-bold text-4xl mt-auto">R & B Hits</p>
      <p className="text-sm font-normal lg:mb-auto lg:w-1/2">
        All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
        habit, and so much more
      </p>
      <div className="flex items-center mt-10 lg:mt-0 ml-[15.3px]">
        {profileImgs.map((profileImg, index) => (
          <img
            key={index}
            src={profileImg}
            alt="profile"
            className="rounded-full -ml-[15.3px] w-[34px] h-[34px]"
          />
        ))}

        <span className="ml-5 mr-4">
          <FiHeart size={24} fill="white" />
        </span>
        <p className="text-2xl">33k Likes</p>
      </div>
    </div>
  );
};
export default CurrentChart;
