import { useTable } from 'react-table'
import { BasicReactTableProps } from '../../Types/BasicReactTableProps';

const BasicReactTable = <TDataType extends object>(props: BasicReactTableProps<TDataType>) => {
    const table = useTable<TDataType>({...props});
    return (
        <table {...table.getTableProps()}>
          <thead>
            {table.headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...table.getTableBodyProps()}>
            {table.rows.map((row) => {
              table.prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      )
};

export default BasicReactTable;