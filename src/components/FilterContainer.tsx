"use client";
import Image from "next/image";
import Search from "@/assets/icons/Search.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import ArrowDown from "@/assets/icons/ArrowDown.svg";

export const FilterContainer = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleRegionChange = (selectetion: string) => {
    const params = new URLSearchParams(searchParams);
    if (selectetion) {
      params.set("region", selectetion);
    } else {
      params.delete("region");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form className="flex sm:justify-between sm:items-center flex-col gap-4 sm:flex-row">
      <div className="w-full sm:w-2/5 h-10 flex items-center gap-4 justify-start sm:px-4 rounded-md bg-WhiteLight dark:bg-DarkModeDarkBlueElements">
        <Image
          src={Search}
          width={20}
          height={20}
          alt="Search Button"
        />
        <input
          type="text"
          className="w-full h-full text-left  focus:outline-none rounded-md bg-WhiteLight dark:bg-DarkModeDarkBlueElements"
          placeholder="Search for a country..."
          onChange={(e) => handleChange(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
      <div className="content-select w-2/4 sm:w-1/4 h-10 relative">
        <select
          name="region"
          className="inline-block w-full cursor-pointer h-10 outline-none rounded-md relative px-4 appearance-none bg-WhiteLight dark:bg-DarkModeDarkBlueElements dark:placeholder:text-WhiteLight"
          onChange={(e) => handleRegionChange(e.target.value)}>
          <option
            value=""
            className="">
            Filter by Region
          </option>
          <option
            value=""
            className="">
            All
          </option>
          <option
            value="Africa"
            className="">
            Africa
          </option>
          <option
            value="Americas"
            className="">
            America
          </option>
          <option
            value="Asia"
            className="">
            Asia
          </option>
          <option
            value="Europe"
            className="">
            Europe
          </option>
          <option
            value="Oceania"
            className="hover:bg-LightModeInputLightGray">
            Oceania
          </option>
        </select>
      </div>
    </form>
  );
};
