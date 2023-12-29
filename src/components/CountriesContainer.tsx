import {
  getAllCountries,
  getCountriesByRegion,
  getCountriesBySearchName,
} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export const CountriesContainer = async ({ query, region }: any) => {
  console.log(query);
  let countriesToShow;

  if (query !== "") {
    countriesToShow = await getCountriesBySearchName(query);

    if (region !== "") {
      countriesToShow = countriesToShow.filter(
        (country: any) => country.region.toLowerCase() === region.toLowerCase()
      );
    }
  } else if (region !== "") {
    countriesToShow = await getCountriesByRegion(region);
  } else {
    countriesToShow = await getAllCountries();
  }

  return (
    <section className="py-8 flex flex-wrap justify-center sm:justify-between items-center gap-8 content-start">
      <Suspense>
        {Array.isArray(countriesToShow) ? (
          countriesToShow.map((country: any) => (
            <Link
              href={`/country/${country.name.common}`}
              key={country.name.common}>
              <article className="rounded-md bg-WhiteLight dark:bg-DarkModeDarkBlueElements basis-[260px] w-[260px] flex-grow flex-shrink h-[300px]">
                <Image
                  src={country.flags.png}
                  alt={country.flags.alt}
                  width={260}
                  height={145}
                  className="w-[260px] aspect-video rounded-t-md"
                />
                <aside className="p-4">
                  <h2 className="font-extrabold text-lg">
                    {country.name.common}
                  </h2>
                  <p className="text-sm">
                    <span className="font-semibold text-sm">Population: </span>
                    {country.population}
                  </p>
                  <p className="text-sm">
                    <span className="font font-semibold text-sm">Region: </span>
                    {country.region}
                  </p>
                  <p className="text-sm">
                    <span className="font font-semibold text-sm">
                      Capital:{" "}
                    </span>
                    {country.capital}
                  </p>
                </aside>
              </article>
            </Link>
          ))
        ) : (
          <article>
            <h3>
              Tu búsqueda no arrojó ningún resultado, vuelve a intentarlo.
            </h3>
          </article>
        )}
      </Suspense>
    </section>
  );
};
