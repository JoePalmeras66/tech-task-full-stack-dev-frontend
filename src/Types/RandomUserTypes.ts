import { Column, TableOptions } from "react-table";
import { TDataType } from "./BasicReactTableProps";


export interface IRandomUser extends TDataType {
    first: string;
    last: string;
    gender: string;
    email: string;
}