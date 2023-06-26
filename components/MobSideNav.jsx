'use client';
import { Videos, Logout, Home, Playlist, Profile, Radio } from './svgs';
import { FiX } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobSideNav = ({ toggleMenu }) => {
  const pathname = usePathname();
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
          className={`flex h-10 group items-center gap-4 text-icons  hover:opacity-100 cursor-pointer ${
            pathname === '/'
              ? 'opacity-100 text-iconsHover'
              : 'text-icons opacity-25'
          }`}
          onClick={toggleMenu}
        >
          <Home className="group-hover:text-iconsHover" />
          <p className="font-bold group-hover:text-white">Home</p>
        </Link>
        <Link
          href={'/collections'}
          className={`flex h-10 group items-center gap-4 text-icons  hover:opacity-100 cursor-pointer ${
            pathname.includes('collections')
              ? 'opacity-100 text-iconsHover'
              : 'text-icons opacity-25'
          }`}
          onClick={toggleMenu}
        >
          <Playlist className="group-hover:text-iconsHover" />
          <p className="font-bold group-hover:text-white">My collections</p>
        </Link>
        <div className="flex h-10 group items-center gap-4 text-icons opacity-25 hover:opacity-100 cursor-pointer">
          <Radio className="group-hover:text-iconsHover" />
          <p className="font-bold group-hover:text-white">Radio</p>
        </div>
        <div className="flex h-10 group items-center gap-4 text-icons opacity-25 hover:opacity-100 cursor-pointer">
          <Videos className="group-hover:text-iconsHover" />
          <p className="font-bold group-hover:text-white">Music Videos</p>
        </div>
        <div className="flex h-10 group items-center gap-4 text-icons opacity-25 hover:opacity-100 cursor-pointer">
          <Profile className="group-hover:text-iconsHover" />
          <p className="font-bold group-hover:text-white">Profile</p>
        </div>
        <div className="flex h-10 group items-center gap-4 text-icons opacity-25 hover:opacity-100 cursor-pointer">
          <Logout className="group-hover:text-iconsHover" />
          <p className="font-bold group-hover:text-white">Logout</p>
        </div>
      </div>
    </>
  );
};
export default MobSideNav;
