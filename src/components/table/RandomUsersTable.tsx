import { ColumnDef, getCoreRowModel, getPaginationRowModel } from "@tanstack/react-table";
import { useMemo } from "react";
import { useAtom } from "jotai";
import { GenericReactTable, GenericReactTableProps } from "./GenericReactTable";
import { IRandomUser, columnsRandomUsers, loadableAsyncAllRandomUsersAtom } from "../../services/randomusers-service";

export const RandomUsersTable = () => {

  const columns = useMemo<ColumnDef<IRandomUser, string>[]>(
    () => columnsRandomUsers,
    []
  );

  const [loadableData] = useAtom(loadableAsyncAllRandomUsersAtom);
  if (loadableData.state === 'hasError') return <div>Error</div>;
  if (loadableData.state === 'loading')  return <div>Loading...</div>

  const randomUserTableProps: GenericReactTableProps<IRandomUser> = {
    columns: columns,
    data: loadableData.data.contents,
    manualPagination: true,
    pageCount: loadableData.data.pageCount,
    initialState: {
      pagination: {
        pageIndex: loadableData.data.pageIndex,
        pageSize: loadableData.data.pageSize,
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  }

  return (
    <>
      <GenericReactTable
         {...randomUserTableProps}
      />
    </>
  );
};