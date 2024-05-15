import React from 'react';
import { FaSearch } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";


const Home = () => {
  return (
    <div className="mt-5">
      <form class="max-w-md mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="text-gray-800" />
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex float-right mt-3">
        <h1 className="text-xl font-bold text-white">Book List</h1>
        <MdOutlineAddBox className="text-sky-800 text-4xl" />
      </div>
    </div>
  );
}

export default Home