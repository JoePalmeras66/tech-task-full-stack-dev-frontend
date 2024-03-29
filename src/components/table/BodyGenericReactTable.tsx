import { Table, flexRender } from "@tanstack/react-table";

export const BodyGenericReactTable = <TDataType extends object>(props: {table: Table<TDataType>}) => {
    return(
        <tbody>
          {props.table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
    )

}