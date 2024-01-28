import React from "react";
import CountriesFilter from "./CountriesFilter";
import CountriesSearch from "./CountriesSearch";
function ListSearchAndFilter() {
  return (
    <div className="flex items-center
     justify-between mobile:flex-wrap mobile:justify-center
      mobile:w-screen desktop:w-full
      desktop:flex-nowrap desktop:justify-between ">
      <CountriesSearch />
      <CountriesFilter />
    </div>
  );
}

export default ListSearchAndFilter;
