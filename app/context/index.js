"use client";
import {
  Suspense,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../loading";
const Countries = createContext();

export function CountriesProvider({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [countryDetails, setCountryDetails] = useState({});
  const [isNoSearchResult, setIsNoResult] = useState(false);


  useEffect(() => {
    const getData = setTimeout(async () => {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const res = await data.json();
      setAllCountries(res);
      setCountriesToShow(res);
    });
  }, []);
  return (
    <Countries.Provider
      value={{
        allCountries,
        countryDetails,
        setCountryDetails,
        countriesToShow,
        setCountriesToShow,
        isNoSearchResult,
        setIsNoResult
      }}
    >
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </Countries.Provider>
  );
}

export default function useCountriesProvider() {
  return useContext(Countries);
}
