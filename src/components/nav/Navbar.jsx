import React from "react";

const Navbar = ({ setSearch, search }) => {
  return (
    <header>
      <nav>
        <ul className="flex p-5 justify-between items-center">
          <li>Notes</li>
          <label htmlFor="search">
            <input
              className={`placeholder:italic placeholder:text-slate-400 block 
            bg-white w-full border border-slate-300 rounded-md 
              py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 
            focus:ring-sky-500 focus:ring-1 sm:text-sm text-black`}
              placeholder={`search...`}
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
