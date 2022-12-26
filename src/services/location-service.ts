import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

const fetchAllLocations = async () => {
    const response = await fetch(
      `http://localhost:8080/techtask/api/v1/location/countries`
    );
    if (!response.ok) {
      throw new Error("Problem fetching all countries");
    }
    const locations: string[] = await response.json();
    return locations;
};

const [allLocationCountries] = atomsWithQuery<string[]>(() => ({
  queryKey: ["allLocationCountries"],
  queryFn: () => fetchAllLocations()
}));

export const locationCountriesAtom = atom(async (get) => {
  const all = get(allLocationCountries);
  return all;
});

export const sortedLocationCountriesAtom = atom(async (get) => {
  const sortedLocationCountries = get(locationCountriesAtom);
  return sortedLocationCountries.sort((a, b) => a.localeCompare(b));
})