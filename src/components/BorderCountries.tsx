import { getSingleCountryByCode } from "@/lib/data";
import Link from "next/link";

interface BorderCountriesProps {
  borderCountries: string[];
}

export const BorderCountries = async ({
  borderCountries,
}: BorderCountriesProps) => {
  const countries = await getSingleCountryByCode(borderCountries);

  return (
    <div>
      <p className="font-semibold text-sm flex gap-4 items-center flex-wrap">
        Border Countries:{" "}
        {countries.map((country) => (
          <Link
            key={country}
            href={`/country/${country}`}
            className="border border-DarkModeDarkBlueElements border-solid flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold">
            {country}
          </Link>
        ))}
      </p>
    </div>
  );
};
