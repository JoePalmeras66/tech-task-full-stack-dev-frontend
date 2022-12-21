import { atom } from "jotai";
import { loadable } from "jotai/utils"
import { atomsWithQuery } from "jotai-tanstack-query";
import { createColumnHelper } from "@tanstack/table-core";

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

const columnHelper = createColumnHelper<IRandomUser>();

export const columnsRandomUsers = [
    columnHelper.accessor('first', {
        header: () =>'First Name',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('last', {
        header: () =>'Last Name',
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('gender', {
        header: () => 'Gender',
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('email', {
        header: () => 'E-Mail',
        cell: info => info.renderValue(),
    }),
]

export const filterCountryAtom = atom<string>("Germany");
export const pageIndexAtom = atom<number>(0);
export const pageSizeAtom = atom<number>(10);

const fetchAllRandomUsersByCountry = async (country: string, page: number, size: number) => {
    const response = await fetch(
        `http://localhost:8080/api/v1/randomusers/all?country=${country}&page=${page}&size=${size}`
      );
      if (!response.ok) {
        throw new Error("Problem fetching all RandomUsers");
      }
      const randomusers: IRandomUserPageInfo = await response.json();
      return randomusers;
}

const [allRandomUsers] = atomsWithQuery<IRandomUserPageInfo>((get) => ({
    queryKey: ["allRandomUsers", get(filterCountryAtom),  get(pageIndexAtom), get(pageSizeAtom)],
    queryFn: () => fetchAllRandomUsersByCountry(get(filterCountryAtom), get(pageIndexAtom), get(pageSizeAtom))
}));

const allRandomUsersAtom = atom(async (get) => {
    const all = get(allRandomUsers);
    return all;
});

export const loadableAsyncAllRandomUsersAtom = atom(async (get) => {
    const loadableAsyncAll = get(loadable(allRandomUsersAtom));
    return loadableAsyncAll;
})
