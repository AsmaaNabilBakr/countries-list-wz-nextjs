"use client";
import useCountriesProvider from "./context";

export default function Loading() {
  let { isNoSearchResult } = useCountriesProvider();

  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex w-screen h-full justify-center items-center">
      {isNoSearchResult ? "No Countries to Show" : "Loading..."}
    </div>
  );
}
