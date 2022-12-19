import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

export interface IRandomUser {
    first: string;
    last: string;
    gender: string;
    email: string;
}

export interface IRandomUserPageInfo {
    contents: IRandomUser[],
    pageIndex: number,
    pageSize: number,
    pageCount: number,
    totalElements: number
}

export const filterCountryAtom = atom<string>("Germany");
export const pageIndexAtom = atom<number>(0);
export const pageSizeAtom = atom<number>(10);

const [allRandomUsers] = atomsWithQuery<IRandomUserPageInfo>((get) => ({
    queryKey: ["allRandomUsers", get(filterCountryAtom),  get(pageIndexAtom), get(pageSizeAtom)],
    queryFn: async ({ queryKey: [, country, page, size] }) => {
      const res = await fetch(`http://localhost:8080/api/v1/randomusers/all?country=${country}&page=${page}&size=${size}`);
      return res.json();
    }
}));

export const allRandomUsersAtom = atom((get) => {
    const filterCountry = get(filterCountryAtom);
    const pageIndex = get(pageIndexAtom);
    const pageSize = get(pageSizeAtom);
    const all = get(allRandomUsers);
    return {pageInfo: all, country: filterCountry, pageIndex: pageIndex, pageSize: pageSize };
});