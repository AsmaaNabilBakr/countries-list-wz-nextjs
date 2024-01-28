import React from "react";
import Image from "next/image";

import CardButton from "./CardButton";
function CountryCard({ country }) {
  return (
    <div className="card w-1/5 desktop:w-1/5 mobile:w-1/2 mr-1 ml-1 relative rounded-md bg-white dark:bg-element-dark mb-14 drop-shadow-lg cursor-pointer">
      <CardButton country={country}>
        <div className="h-2/4 relative">
          <Image
            unoptimized={({ src }) => src} 
            src={country.flags.png}
            fill={true}
            alt={country.flags.alt | ""}
          />
        </div>
        <div className="flex flex-col justify-between text-base text-text-light dark:text-text-dark p-8 h-1/2 ">
          <div className="text-xl font-semibold ">{country.name.common}</div>
          <div className="flex flex-col">
            <p className="mb-2">
              <span className="font-medium mr-2">Population:</span>
              {country.population.toLocaleString("de-DE") }
            </p>
            <p className="mb-2">
              <span className="font-medium mr-2">Region:</span>
              {country.region}
            </p>
            <p className="mb-2">
              <span className="font-medium mr-2">Capital:</span>
              {country.capital}
            </p>
          </div>
        </div>
      </CardButton>
    </div>
  );
}

export default CountryCard;
