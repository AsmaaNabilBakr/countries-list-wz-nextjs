"use client";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useEffect, useState } from "react";
import useCountriesProvider from "../context/index";
import useDebounce from "../hooks/useDebounce";
import { getFilteredData } from "../hooks/getfilteredData";
function CountriesSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  let { setCountriesToShow, allCountries, setIsNoResult } =
    useCountriesProvider();

  useEffect(() => {
    if (debouncedSearch) {
      getFilteredData(
        "name",
        searchQuery,
        setCountriesToShow,
        setIsNoResult
      );
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (searchQuery === "") {
      setCountriesToShow(allCountries);
      setIsNoResult(false);
    }
  }, [searchQuery]);

  return (
    <div className="flex w-full desktop:w-1/2 desktop:justify-start mobile:justify-center ">
      <label className="relative block w-1/2">
        <SearchOutlinedIcon className="z-10 w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 dark:text-white" />

        <input
          type="text"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a country..."
          className="form-input w-8/12 mobile:w-full p-4 pl-10 bg-white dark:bg-input-dark dark:text-text-dark drop-shadow-lg"
        />
      </label>
    </div>
  );
}

export default CountriesSearch;
