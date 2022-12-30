import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

const fetchAllCountries = async () => {
    const response = await fetch(
      `http://localhost:8080/techtask/api/v1/location/countries`
    );
    if (!response.ok) {
      throw new Error("Problem fetching all countries");
    }
    const countries: string[] = await response.json();
    countries.push("");
    return countries;
};

export const [allCountries] = atomsWithQuery<string[]>(() => ({
  queryKey: ["allCountries"],
  queryFn: () => fetchAllCountries()
}));

export const countriesAtom = atom(async (get) => {
  const all = get(allCountries);
  return all;
});

export const sortedCountriesAtom = atom(async (get) => {
  const sortedCountries = get(countriesAtom);
  return sortedCountries.sort((a, b) => a.localeCompare(b));
})