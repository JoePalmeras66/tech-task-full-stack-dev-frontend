import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";
import { filterCityAtom, filterStateAtom } from "./randomusers-service";

const fetchAllCountries = async (state: string, city:string) => {
    const response = await fetch(
      `http://localhost:8080/techtask/api/v1/location/countries?state=${state}&city=${city}`
    );
    if (!response.ok) {
      throw new Error("Problem fetching all countries");
    }
    const countries: string[] = await response.json();
    countries.push("");
    return countries;
};

export const [allCountries] = atomsWithQuery<string[]>((get) => ({
  queryKey: ["allCountries", get(filterStateAtom), get(filterCityAtom)],
  queryFn: () => fetchAllCountries(get(filterStateAtom), get(filterCityAtom))
}));

export const countriesAtom = atom(async (get) => {
  const all = get(allCountries);
  return all;
});

export const sortedCountriesAtom = atom(async (get) => {
  const sortedCountries = get(countriesAtom);
  return sortedCountries.sort((a, b) => a.localeCompare(b));
})