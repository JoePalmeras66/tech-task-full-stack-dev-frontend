import { Column } from "react-table";

export interface IRandomUser {
    first: string;
    last: string;
    gender: string;
    email: string;
}

export interface SetUpTableProps {
    columns: Column<IRandomUser>[],
    data: IRandomUser[]
  }