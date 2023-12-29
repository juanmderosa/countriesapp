export const getAllCountries = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    return await res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching All Countries");
  }
};

export const getSingleCountry = async (country: string) => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching All Countries");
  }
};

export const getSingleCountryByCode = async (codeArr: string[]) => {
  try {
    const countriesData = [];

    for (const code of codeArr) {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
      const data = await res.json();
      countriesData.push(data[0].name.common);
    }
    return countriesData;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching Countries by Code");
  }
};

export const getCountriesBySearchName = async (name: string) => {
  try {
    const res = await fetch(` https://restcountries.com/v3.1/name/${name}`);
    return await res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching All Countries");
  }
};

export const getCountriesByRegion = async (region: string) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    return await res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching All Countries");
  }
};
