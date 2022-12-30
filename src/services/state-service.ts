import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";
import { filterCountryAtom } from "./randomusers-service";

const fetchAllState = async (country: string) => {
    const response = await fetch(
      `http://localhost:8080/techtask/api/v1/location/states?country=${country}`
    );
    if (!response.ok) {
      throw new Error("Problem fetching all countries");
    }
    const states: string[] = await response.json();
    states.push("");
    return states;
};

const [allState] = atomsWithQuery<string[]>((get) => ({
  queryKey: ["allState", get(filterCountryAtom)],
  queryFn: () => fetchAllState(get(filterCountryAtom))
}));

export const stateAtom = atom(async (get) => {
  const all = get(allState);
  return all;
});

export const sortedStatesAtom = atom(async (get) => {
  const sortedState = get(stateAtom);
  return sortedState.sort((a, b) => a.localeCompare(b));
})