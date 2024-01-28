import ListSearchAndFilter from "./component/ListSearchAndFilter";
import CountriesList from "./component/CountriesList";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container-center pt-20">
        <ListSearchAndFilter />
        <CountriesList />
    </main>
  );
}
