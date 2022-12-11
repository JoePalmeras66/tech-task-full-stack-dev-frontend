import { Column, TableOptions } from "react-table";
import { TDataType } from "./BasicReactTableProps";

export const columnsRandomUser: readonly Column<IRandomUser>[] = [
    {
      Header: 'First Name',
      accessor: 'first',
    },
    {
      Header: 'Last Name',
      accessor: 'last',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
      Header: 'E-Mail',
      accessor: 'email',
    },
  ]

export interface IRandomUser extends TDataType {
    first: string;
    last: string;
    gender: string;
    email: string;
}