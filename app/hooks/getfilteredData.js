export const getFilteredData = async (
  type,
  query,
  setCountriesToShow,
  setIsNoResult
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/${type}/${query}`);
  if (res.status === 404) {
    setCountriesToShow([]);
    setIsNoResult(true);
  } else {
    const data = await res.json();
    setCountriesToShow(data);
    setIsNoResult(false);
  }
};
