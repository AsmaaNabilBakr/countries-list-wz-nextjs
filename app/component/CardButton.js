"use client";
import { useRouter } from "next/navigation";
import useCountriesProvider from "../context/index";
function CardButton({ children, country }) {
  let { setCountryDetails } = useCountriesProvider();
  const router = useRouter();

  const countryDetail = () => {
    localStorage.setItem("country", JSON.stringify(country));
    setCountryDetails(country);
    router.push(`/details/${country.altSpellings[0]}`);
  };
  
  return <span onClick={() => countryDetail()}>{children}</span>;
}

export default CardButton;
