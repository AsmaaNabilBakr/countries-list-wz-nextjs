"use client";
import { useState, useEffect } from "react";
import useCountriesProvider from "../context/index";
import { getFilteredData } from "../hooks/getfilteredData";

export default function CountriesFilter() {
  let { setCountriesToShow, allCountries, setIsNoResult } = useCountriesProvider();
  const [selectedRegion, setSelectedRegion] = useState("All");
  const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    if (selectedRegion === "All") {
      setCountriesToShow(allCountries);
    } else
      getFilteredData(
        "region",
        selectedRegion,
        setCountriesToShow,
        setIsNoResult
      );
  }, [selectedRegion]);

  return (
    <div className="w-full desktop:w-1/3 desktop:justify-end mobile:w-screen flex justify-end mobile:justify-center mobile:mt-5">
      <label className="relative block align w-4/12 mobile:w-6/12">
        <select
          name="filter"
          defaultValue={regions[0]}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="form-input w-full p-4 bg-white dark:bg-input-dark drop-shadow-lg text-text-light dark:text-text-dark"
        >
          {regions.map((region, i) => (
            <option key={i} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
