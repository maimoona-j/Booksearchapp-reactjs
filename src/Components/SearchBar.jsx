import React from "react";
import { useState } from "react";
import Books from "../Components/Books";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
  };

  return (
    <div>
      <div className="mt-12 mb-24 lg:w-auto w-[340px] border border-black bg-teal-700 shadow-lg rounded-full  lg:p-0 p-1">
        <input
          type="text"
          className="mb-4 lg:ml-[350px] ml-4 border border-black  rounded-full w-full placeholder:pl-3"
          value={searchTerm}
          onChange={handleSearchTerm}
          placeholder="search your book here"
        />
      </div>
      <Books searchTerm={searchTerm} />
    </div>
  );
}
