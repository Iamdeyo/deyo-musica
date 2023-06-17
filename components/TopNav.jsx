'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainLogo from '@/public/assets/logo.svg';
import { FiMenu } from 'react-icons/fi';
import SearchBar from './SearchBar';
import MobSideNav from './MobSideNav';
import { useState } from 'react';

const TopNav = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prev) => (prev = !prev));
  };
  return (
    <div className="px-4 py-6 lg:px-6 lg:mb-6">
      <div className="flex items-center gap-4">
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <FiMenu size={30} />
        </div>
        <Link
          href={'/'}
          className="min-w-[38px] h-[38px] flex items-center justify-center"
        >
          <MainLogo width={36} height={36} />
        </Link>

        <SearchBar />
      </div>
      {/* side nav mobile */}
      {menu && (
        <div className={`lg:hidden z-50 mob-side-nav`} onClick={toggleMenu}>
          <MobSideNav toggleMenu={toggleMenu} />
        </div>
      )}
    </div>
  );
};
export default TopNav;
