'use client';

import { Videos, Logout, Home, Playlist, Profile, Radio } from './svgs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideNav = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:block fixed left-5 top-28 ">
      <div className="bg-darkAlt px-4 py-7 rounded-[32px] flex flex-col gap-8">
        <Link
          href={'/'}
          className={` hover:text-iconsHover hover:opacity-100 cursor-pointer ${
            pathname === '/'
              ? 'text-iconsHover opacity-100'
              : 'text-icons opacity-25'
          }`}
        >
          <Home />
        </Link>
        <Link
          href={'/collections'}
          className={` hover:text-iconsHover hover:opacity-100 cursor-pointer ${
            pathname.includes('collections')
              ? 'text-iconsHover opacity-100'
              : 'text-icons opacity-25'
          }`}
        >
          <Playlist />
        </Link>
        <div className=" text-icons opacity-25 hover:text-iconsHover hover:opacity-100 cursor-pointer">
          <Radio />
        </div>
        <div className=" text-icons opacity-25 hover:text-iconsHover hover:opacity-100 cursor-pointer">
          <Videos />
        </div>
      </div>
      <div className="bg-darkAlt px-4 py-7 rounded-[32px] flex flex-col gap-8 mt-5">
        <div className=" text-icons opacity-25 hover:text-iconsHover hover:opacity-100 cursor-pointer">
          <Profile />
        </div>
        <div className=" text-icons opacity-25 hover:text-iconsHover hover:opacity-100 cursor-pointer">
          <Logout />
        </div>
      </div>
    </div>
  );
};
export default SideNav;
