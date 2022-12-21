import {
  useReactTable,
  ColumnDef,
  TableOptions,
} from '@tanstack/react-table'
import { HeaderGenericReactTable } from './HeaderGenericReactTable';
import { BodyGenericReactTable } from './BodyGenericReactTable';
import { PaginationGenericReactTable } from './PaginationGenericReactTable';
/* import { FooterGenericReactTable } from './FooterGenericReactTable'; */

export interface GenericReactTableProps<TData extends object> extends TableOptions<TData>{
  columns: ColumnDef<TData, string>[],
  data: TData[],
}

export const GenericReactTable = <TDataType extends object>(props: GenericReactTableProps<TDataType>) => {
    const table = useReactTable<TDataType>({...props});
    return (
      <>
      <table>
        <HeaderGenericReactTable table={table}/>
        <BodyGenericReactTable table={table}/>
        <PaginationGenericReactTable table={table} />
        {/* <FooterGenericReactTable table={table}/> */}
      </table>
    </>
    )
};