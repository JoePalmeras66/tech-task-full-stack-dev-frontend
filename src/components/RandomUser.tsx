import { ColumnDef, createColumnHelper, getCoreRowModel } from "@tanstack/react-table";
import { useMemo } from "react";
import { useAtom } from "jotai";
import { GenericReactTable, GenericReactTableProps } from "./table/GenericReactTable";
import { IRandomUser, loadableAsyncAllRandomUsersAtom } from "../services/randomuser-service";

export const RandomUser = () => {

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

  const [loadableData] = useAtom(loadableAsyncAllRandomUsersAtom);
  if (loadableData.state === 'hasError') return <div>Error</div>;
  if (loadableData.state === 'loading')  return <div>Loading...</div>

  const randomUserTableProps: GenericReactTableProps<IRandomUser> = {
    columns: columns,
    data: loadableData.data.contents,
    getCoreRowModel: getCoreRowModel(),
  }

  return (
    <>
      <GenericReactTable
         {...randomUserTableProps}
      />
    </>
  );
};