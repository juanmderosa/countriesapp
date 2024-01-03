import { getSingleCountry } from "@/lib/data";
import Image from "next/image";
import { BorderCountries } from "@/components/BorderCountries";
import { Currencies, Currency, Languages } from "@/lib/definitions";
import { BackButton } from "@/components/BackButton";

const page = async ({ params }: { params: { name: string } }) => {
  const { name } = params;
  const country = await getSingleCountry(name);

  const currencies: Currencies[] = Object.values(country[0].currencies);
  const currency: Currency = currencies[0];
  const languages: Languages[] = Object.values(country[0].languages);
  const borderCountries: string[] = country[0].borders
    ? Object.values(country[0].borders)
    : [];

  return (
    <main className="px-4 lg:px-20 py-8 ">
      <BackButton />
      <section className="mt-10 flex lg:flex-row flex-col gap-8 items-center">
        <aside className="w-full lg:w-[45%] flex items-center justify-center">
          <Image
            src={country[0].flags.svg}
            width={440}
            height={360}
            alt={country[0].flags.alt}
            className="object-contain w-[440px] h-[360px]"
          />
        </aside>
        <article className="w-full lg:w-[55%]">
          <h1 className="text-2xl font-bold mb-12">{country[0].name.common}</h1>
          <div className="flex flex-col lg:flex-row justify-start gap-2 lg:gap-4 mb-8 w-full">
            <div className=" flex flex-col flex-wrap gap-2 lg:w-1/2 w-full">
              <p className="text-lg">
                <span className="font-semibold text-lg">Native name: </span>
                {country[0].name.common}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-sm">Population: </span>
                {country[0].population}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-sm">Region: </span>
                {country[0].region}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-sm">Sub-Region: </span>
                {country[0].subregion}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-sm">Capital: </span>
                {country[0].capital}
              </p>
            </div>
            <div className=" flex flex-col flex-wrap gap-2  lg:w-1/2 w-full">
              <p className="text-sm">
                <span className="font-semibold text-sm">
                  Top Level Domain:{" "}
                </span>
                {country[0].tld}
              </p>
              <p className="text-sm capitalize">
                <span className="font-semibold text-sm ">Currency: </span>
                {currency.name}
              </p>
              <p className="text-sm">
                <span className="font font-semibold text-sm">Languages: </span>
                {languages.join(", ")}
              </p>
            </div>
          </div>
          <BorderCountries borderCountries={borderCountries} />{" "}
        </article>
      </section>
    </main>
  );
};

export default page;
