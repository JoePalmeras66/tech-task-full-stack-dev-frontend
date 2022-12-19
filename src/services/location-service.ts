import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

const fetchAllLocations = async () => {
    const response = await fetch(
      `http://localhost:8080/locations`
    );
    if (!response.ok) {
      throw new Error("Problem fetching all locations");
    }
    const locations: string[] = await response.json();
    return locations;
};

const [allLocationCountries] = atomsWithQuery<string[]>(() => ({
  queryKey: ["allLocationCountries"],
  queryFn: () => fetchAllLocations()
}));

export const locationCountriesAtom = atom((get) => {
  const all = get(allLocationCountries);
  return all;
});

export const sortedLocationCountriesAtom = atom((get) => {
  const sortedLocationCountries = get(locationCountriesAtom);
  return sortedLocationCountries.sort((a, b) => a.localeCompare(b));
})