import { Links } from "./Links";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce/lib";
import { useResultContext } from "./ResultsContentProvider";
import { BsSearch } from "react-icons/bs";
export const Search = () => {
  const [text, setText] = useState(null);
  const { setSearchTerm } = useResultContext();
  const { debouncedValue } = useDebounce(text, 300);
  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);
  return (
    <div className="relative sm:ml-32 md:ml-72 sm:-mt-10 mt-3 md:space-x-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 md:w-11/12 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Google or type a URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolute top-3.5 sm:left-80 text-2xl text-gray-500"
          onClick={setSearchTerm(text)}
        ></button>
      )}

      {!text && (
        <button
          type="button"
          className="absolute top-3.5 sm:left-80 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          <BsSearch />
        </button>
      )}
      <Links />
    </div>
  );
};
