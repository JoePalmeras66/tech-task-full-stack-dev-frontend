import { ColumnDef, createColumnHelper, getCoreRowModel } from "@tanstack/react-table";
import { useMemo } from "react";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { GenericReactTable, GenericReactTableProps } from "./table/GenericReactTable";
import { atomsWithQuery } from "jotai-tanstack-query";

export type IRandomUser = {
  first: string;
  last: string;
  gender: string;
  email: string;
}

export const RandomUser = (props: {country: string, page: number, size: number}) => {

  const columnHelper = createColumnHelper<IRandomUser>()

  const columns = useMemo<ColumnDef<IRandomUser, string>[]>(
    () => [
      columnHelper.accessor('first', {
         header: () =>'First Name',
         cell: info => info.getValue(),
         footer: info => info.column.id,
       }),
       columnHelper.accessor('last', {
         header: () =>'Last Name',
         cell: info => info.renderValue(),
         footer: info => info.column.id,
       }),
       columnHelper.accessor('gender', {
         header: () => 'Gender',
         cell: info => info.renderValue(),
         footer: info => info.column.id,
       }),
       columnHelper.accessor('email', {
         header: () => 'E-Mail',
         cell: info => info.renderValue(),
         footer: info => info.column.id,
       }),
     ],
    [columnHelper]
  );

  const countryAtom = atom<string>(props.country);
  const pageAtom = atom<number>(props.page);
  const sizeAtom = atom<number>(props.size);
  const [randomUserAtom] = atomsWithQuery((get) => ({
    queryKey: ["randomUsersByCountryPaginated", get(countryAtom),  get(pageAtom), get(sizeAtom)],
    queryFn: async ({ queryKey: [, country, page, size] }): Promise<{ data: IRandomUser[] }> => {
      const res = await fetch(`http://localhost:8080/api/v1/randomusers/all?country=${country}&page=${page}&size=${size}`);
      return res.json();
    }
  }));

  const { data } = useAtomValue(randomUserAtom);
//  const setCountry = useSetAtom(countryAtom);
  const setPage = useSetAtom(pageAtom);
  //const setSize = useSetAtom(sizeAtom);

  const randomUserTableProps: GenericReactTableProps<IRandomUser> = {
    columns: columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
  }

  return (
    <>
      <GenericReactTable
         {...randomUserTableProps}
      />
      <button onClick={() => setPage((x) => x - 1)}>Prev</button>
      <button onClick={() => setPage((x) => x + 1)}>Next</button>
    </>
  );
};