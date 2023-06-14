'use client';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [searchBar, setSearchBar] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchBar = () => {
    setSearchBar((prev) => (prev = !prev));
  };
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSearch}
      className={`flex font-semibold items-end ml-auto lg:ml-16  ${
        searchBar ? '' : ''
      }`}
    >
      <label
        htmlFor="search"
        className={` text-2xl lg:text-2xl lg:mr-6 delay-150 duration-150 ease-in-out p-1 ${
          searchBar ? 'mr-4' : 'text-3xl'
        }`}
        onClick={handleSearchBar}
      >
        <FiSearch className=" text-[#ffffff3f]" />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`bg-yellow-300 input-nobg placeholder:text-[#404040] duration-150 ease-in-out h-full pb-1 focus:border-b ${
          searchBar ? 'w-full' : 'w-0'
        } lg:w-full`}
      />
    </form>
  );
};
export default SearchBar;
