import HomeIcon from '@/public/assets/home.svg';
import PlaylistIcon from '@/public/assets/playlist.svg';
import RadioIcon from '@/public/assets/radio.svg';
import ProfileIcon from '@/public/assets/profile.svg';
import VideosIcon from '@/public/assets/videos.svg';
import LogoutIcon from '@/public/assets/Logout.svg';

const SideNav = () => {
  return (
    <div className="hidden lg:block absolute left-5 top-28">
      <div className="bg-darkAlt px-4 py-7 rounded-[32px] flex flex-col gap-8">
        <div className=" text-icons opacity-25 hover:text-iconsHover hover:opacity-100 cursor-pointer">
          <HomeIcon />
        </div>
        <div className=" text-icons opacity-25 hover:text-iconsHover hover:opacity-100 cursor-pointer">
          <PlaylistIcon />
        </div>
        <div className=" text-icons opacity-25 hover:text-iconsHover hover:opacity-100 cursor-pointer">
          <RadioIcon />
        </div>
        <div className=" text-icons opacity-25 hover:text-iconsHover hover:opacity-100 cursor-pointer">
          <VideosIcon />
        </div>
      </div>
      <div className="bg-darkAlt px-4 py-7 rounded-[32px] flex flex-col gap-8 mt-5">
        <div className=" text-icons opacity-25 hover:text-iconsHover hover:opacity-100 cursor-pointer">
          <ProfileIcon />
        </div>
        <div className=" text-icons opacity-25 hover:text-iconsHover hover:opacity-100 cursor-pointer">
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};
export default SideNav;
