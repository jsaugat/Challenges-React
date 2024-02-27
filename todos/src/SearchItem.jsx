import React from "react";

function SearchItem({ onSearch, filteredItem }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="search.."
        value={filteredItem}
        onChange={(e) => onSearch(e)}
      />
    </div>
  );
}

export default SearchItem;
