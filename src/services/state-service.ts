import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";
import { filterCityAtom, filterCountryAtom } from "./randomusers-service";

const fetchAllStates = async (country: string, city: string) => {
    const response = await fetch(
      `http://localhost:8080/techtask/api/v1/location/states?country=${country}&city=${city}`
    );
    if (!response.ok) {
      throw new Error("Problem fetching all states");
    }
    const states: string[] = await response.json();
    states.push("");
    return states;
};

export const [allState] = atomsWithQuery<string[]>((get) => ({
  queryKey: ["allState", get(filterCountryAtom), get(filterCityAtom)],
  queryFn: () => fetchAllStates(get(filterCountryAtom), get(filterCityAtom))
}));

export const stateAtom = atom(async (get) => {
  const all = get(allState);
  return all;
});

export const sortedStatesAtom = atom(async (get) => {
  const sortedState = get(stateAtom);
  return sortedState.sort((a, b) => a.localeCompare(b));
})