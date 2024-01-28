"use client";
import React, { Suspense } from "react";
import useCountriesProvider from "../context";
import CountryCard from "./CountryCard";
import Loading from "../loading";

function CountriesList() {
  let { countriesToShow } = useCountriesProvider();
  return (
      <div className="flex flex-wrap mt-20 desktop:justify-between mobile:justify-center ">
        {countriesToShow.length > 0 ?
          countriesToShow.map((country, i) => (
            <CountryCard key={i} country={country} />
          )): <Loading />}
      </div>
  );
}

export default CountriesList;
