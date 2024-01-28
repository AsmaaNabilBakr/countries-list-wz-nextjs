"use client";
import React, { useEffect, useState } from "react";
import useCountriesProvider from "../../context";
import { useRouter } from "next/navigation";
import Image from "next/image";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
function CountryDetails() {
  let { countryDetails } = useCountriesProvider();
  const router = useRouter();
  const [country, setCountry] = useState(countryDetails);
  const [languages, setLanguages] = useState();
  const [currency, setCurrency] = useState();

  useEffect(() => {
    setCountry(
      JSON.stringify(countryDetails) === "{}"
        ? JSON.parse(localStorage.getItem("country"))
        : countryDetails
    );
  }, []);
  useEffect(() => {
    if (JSON.stringify(country) !== "{}") {
      setLanguages(Object.keys(country?.languages));
      setCurrency(Object.keys(country?.currencies));
    }
  }, [country]);

  return (
    <div className="container-center pt-20">
      <button
        onClick={() => router.back()}
        className="flex justify-center items-center
       p-2 bg-element-light dark:bg-element-dark dark:text-white
      rounded desktop:w-1/12 mobile:w-1/3 drop-shadow-lg desktop:ml-0 mobile:ml-28"
      >
        <KeyboardBackspaceIcon className="h-6 w-6 text-blue-500 mr-2" />
        Back
      </button>
      {JSON.stringify(country) !== "{}" && (
        <div className="pt-20 flex flex-wrap items-center justify-center mobile">
          <div className="flex w-1/2 desktop:w-1/2 mobile:w-full desktop:justify-start mobile:justify-center desktop:mb-0 mobile:mb-10">
            <Image
              unoptimized={({ src }) => `${src}`}
              src={country?.flags?.png}
              width={400}
              height={400}
              alt={country?.flags?.alt | ""}
            />
          </div>
          <div className="flex flex-col w-1/2 desktop:w-1/2 mobile:w-2/4 justify-start">
              <h1 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">
                {country?.name?.common}
              </h1>
              <div className="flex mobile:flex-wrap ">
                <div className="flex flex-col w-1/2 desktop:w-1/2 mobile:w-full text-text-light dark:text-text-dark">
                  <p className="mb-2">
                    <span className="font-medium mr-2 ">Native Name:</span>
                    {country?.name?.nativeName?.nld?.common}
                  </p>
                  <p className="mb-2">
                    <span className="font-medium mr-2">Population:</span>
                    {country?.population.toLocaleString("de-DE")}
                  </p>
                  <p className="mb-2">
                    <span className="font-medium mr-2">Region:</span>
                    {country?.region}
                  </p>
                  <p className="mb-2">
                    <span className="font-medium mr-2">Sub Region:</span>
                    {country?.subregion}
                  </p>
                  <p className="mb-2">
                    <span className="font-medium mr-2">Capital:</span>
                    {country?.capital}
                  </p>
                </div>
                <div className="flex flex-col mobile:mt-10 text-text-light dark:text-text-dark">
                  <p className="mb-2">
                    <span className="font-medium mr-2">Top Level Domain:</span>
                    {country?.tld[0]}
                  </p>
                  <p className="mb-2">
                    <span className="font-medium mr-2">Currencies:</span>
                    {currency?.length &&
                      currency.map((code, index) => (
                        <span key={code}>
                          {country?.currencies[code].name}
                          {index !== currency.length - 1 && ","}
                        </span>
                      ))}
                  </p>
                  <p className="mb-2">
                    <span className="font-medium mr-2">Languages:</span>
                    {languages?.length &&
                      languages.map((code, index) => (
                        <span key={code}>
                          {country?.languages[code]}
                          {index !== languages.length - 1 && ","}
                        </span>
                      ))}
                  </p>
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
