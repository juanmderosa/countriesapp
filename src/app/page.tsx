import { CountriesContainer } from "@/components/CountriesContainer";
import { FilterContainer } from "@/components/FilterContainer";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    region?: string;
  };
}) {
  const query = searchParams?.query || "";
  const region = searchParams?.region || "";
  return (
    <main className="px-4 sm:px-20 py-8 ">
      <FilterContainer />
      <CountriesContainer
        query={query}
        region={region}
      />
    </main>
  );
}
