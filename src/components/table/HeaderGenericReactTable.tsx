import { Table, flexRender } from "@tanstack/react-table"

export const HeaderGenericReactTable = <TDataType extends object>(props: {table: Table<TDataType>}) => {
    return(
        <thead>
          {props.table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
    )
}