import HomeIcon from '@/public/assets/home.svg';
import PlaylistIcon from '@/public/assets/playlist.svg';
import RadioIcon from '@/public/assets/radio.svg';
import ProfileIcon from '@/public/assets/profile.svg';
import VideosIcon from '@/public/assets/videos.svg';
import LogoutIcon from '@/public/assets/Logout.svg';
import { FiX } from 'react-icons/fi';
import Link from 'next/link';

const MobSideNav = ({ toggleMenu }) => {
  return (
    <>
      <span
        // onClick={toggleMenu}
        className="absolute cursor-pointer text-white left-3 top-3 hover:text-iconsHover"
      >
        <FiX size={30} />
      </span>
      <div
        className="bg-darkAlt w-full max-w-xs pl-8 pt-20 h-full flex flex-col gap-4 "
        onClick={(e) => e.stopPropagation()}
      >
        <Link
          href={'/'}
          className="flex h-10 group items-center gap-4 text-icons opacity-25 hover:opacity-100 cursor-pointer"
        >
          <HomeIcon className="group-hover:text-iconsHover" />
          <p className="font-bold group-hover:text-white">Home</p>
        </Link>
        <Link
          href={'/collections'}
          className="flex h-10 group items-center gap-4 text-icons opacity-25 hover:opacity-100 cursor-pointer"
        >
          <PlaylistIcon className="group-hover:text-iconsHover" />
          <p className="font-bold group-hover:text-white">My collections</p>
        </Link>
        <div className="flex h-10 group items-center gap-4 text-icons opacity-25 hover:opacity-100 cursor-pointer">
          <RadioIcon className="group-hover:text-iconsHover" />
          <p className="font-bold group-hover:text-white">Radio</p>
        </div>
        <div className="flex h-10 group items-center gap-4 text-icons opacity-25 hover:opacity-100 cursor-pointer">
          <VideosIcon className="group-hover:text-iconsHover" />
          <p className="font-bold group-hover:text-white">Music Videos</p>
        </div>
        <div className="flex h-10 group items-center gap-4 text-icons opacity-25 hover:opacity-100 cursor-pointer">
          <ProfileIcon className="group-hover:text-iconsHover" />
          <p className="font-bold group-hover:text-white">Profile</p>
        </div>
        <div className="flex h-10 group items-center gap-4 text-icons opacity-25 hover:opacity-100 cursor-pointer">
          <LogoutIcon className="group-hover:text-iconsHover" />
          <p className="font-bold group-hover:text-white">Logout</p>
        </div>
      </div>
    </>
  );
};
export default MobSideNav;
