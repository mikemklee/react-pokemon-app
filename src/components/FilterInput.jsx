import React from "react";

const FilterInput = ({ keyword, onChange }) => {
  return (
    <div className="filterInput">
      <input
        onChange={onChange}
        type="text"
        value={keyword}
        placeholder="Filter"
      />
    </div>
  );
};

export default FilterInput;
