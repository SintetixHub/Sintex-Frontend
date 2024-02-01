import React, { useState, useCallback } from 'react';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = useCallback((event) => {
        setSearchValue(event.target.value);
    }, []);

    return (
        <div className="flex justify-end">
            <div className="">
                <input
                    {...props}
                    className="shadow appearance-none border border-black dark:border-white rounded-lg mr-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64 dark:bg-zinc-700 dark:text-white"
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