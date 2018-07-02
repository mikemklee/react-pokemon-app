import React from "react";

import FilterInput from "../components/FilterInput";
import TypeList from "../components/TypeList";

const Sidebar = ({
  keyword,
  onFilterChange,
  types,
  selectedType,
  selectType
}) => {
  return (
    <div className="sidebar">
      <FilterInput keyword={keyword} onChange={onFilterChange} />
      <TypeList
        types={types}
        selectedType={selectedType}
        selectType={selectType}
      />
    </div>
  );
};

export default Sidebar;
