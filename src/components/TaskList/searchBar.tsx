import React, { FC } from 'react';
import { IoSearch } from 'react-icons/io5';

interface SearchBarProps {
  sortArrow: boolean;
  sortTasks(): void;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: FC<SearchBarProps> = ({ sortArrow, sortTasks, setSearchInput, searchInput }) => {
  return (
    <div className="mt-20 flex items-start justify-start w-full"> {
      
    }
      <div className="w-full max-w-md relative">
        <input
          value={searchInput}
          placeholder="Cautare task"
          onChange={(e) => setSearchInput(e.target.value)}
          className="shadow-xl rounded-md px-3 py-1 border w-full focus-visible:outline-0 pl-10"
        />
        <IoSearch className="absolute top-2 left-2 text-gray-500" />
        <div className="border-t mb-4 w-full"></div> {

        }
        <div className="flex justify-start">
          {sortArrow ? (
            <span onClick={sortTasks} className="text-1xl text-red-500 cursor-pointer hover:scale-105 transition">
              Sortare crescătoare
            </span>
          ) : (
            <span onClick={sortTasks} className="text-1xl text-red-500 cursor-pointer hover:scale-105 transition">
              Sortare descrescătoare
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
