import { useTable } from 'react-table'
import { IRandomUser, RandomUserTableProps } from '../Types/RandomUserTypes'

import styles from "./RandomUserTable.module.scss"

export const RandomUserTable = (props: RandomUserTableProps<IRandomUser>) => {
  const table = useTable<IRandomUser>({...props})
  return (
    <table className={styles.tableWrapper} {...table.getTableProps()}>
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
        {table.rows.map((row, i) => {
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
}