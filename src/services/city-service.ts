import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";
import { filterCountryAtom, filterStateAtom } from "./randomusers-service";

const fetchAllCities = async (country: string, state: string) => {
    const response = await fetch(
      `http://localhost:8080/techtask/api/v1/location/cities?country=${country}&state=${state}`
    );
    if (!response.ok) {
      throw new Error("Problem fetching all cities");
    }
    const states: string[] = await response.json();
    states.push("");
    return states;
};

const [allCities] = atomsWithQuery<string[]>((get) => ({
  queryKey: ["allCities", get(filterCountryAtom), get(filterStateAtom)],
  queryFn: () => fetchAllCities(get(filterCountryAtom), get(filterStateAtom))
}));

export const cityAtom = atom(async (get) => {
  const all = get(allCities);
  return all;
});

export const sortedCitiesAtom = atom(async (get) => {
  const sortedCities = get(cityAtom);
  return sortedCities.sort((a, b) => a.localeCompare(b));
})