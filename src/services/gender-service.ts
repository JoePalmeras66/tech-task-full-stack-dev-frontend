import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

const fetchAllGenders = async () => {
    const response = await fetch(
      `http://localhost:8080/techtask/api/v1/genders`
    );
    if (!response.ok) {
      throw new Error("Problem fetching all genders");
    }
    const genders: string[] = await response.json();
    genders.push("");
    return genders;
};

const [allGenders] = atomsWithQuery<string[]>(() => ({
  queryKey: ["allGenders"],
  queryFn: () => fetchAllGenders()
}));

export const genderAtom = atom(async (get) => {
  const all = get(allGenders);
  return all;
});

export const sortedGendersAtom = atom(async (get) => {
  const sortedGenders = get(genderAtom);
  return sortedGenders.sort((a, b) => a.localeCompare(b));
})