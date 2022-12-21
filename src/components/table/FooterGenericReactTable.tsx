import { Table, flexRender } from "@tanstack/react-table"

export const FooterGenericReactTable = <TDataType extends object>(props: {table: Table<TDataType>}) => {
    return(
        <tfoot>
          {props.table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
    )

}