import { useState, useCallback } from "react";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  return (
    <div className="flex justify-end">
      <div className="">
        <input
          {...props}
          className="appearance-none rounded-lg border-2 border-zinc-500 py-2 px-3 text-gray-700 leading-tight focus:outline-none w-64 bg-transparent dark:text-white"
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Buscar..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
