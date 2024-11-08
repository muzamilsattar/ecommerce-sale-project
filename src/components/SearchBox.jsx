import { SearchIcon } from 'lucide-react';

function SearchBox() {
  return (
    <form className="w-full max-w-md mx-auto">
      <div className="flex rounded-md ">
        <input
          placeholder="Search Products"
          type="text"
          className="w-full lg:w-[20rem] py-2 px-4 text-sm lg:text-base font-mono text-black placeholder:text-gray-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
