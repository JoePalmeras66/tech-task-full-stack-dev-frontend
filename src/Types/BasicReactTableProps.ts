import { Column, TableOptions } from "react-table";

export interface TDataType {}

export interface BasicReactTableProps<TDataType extends object> extends TableOptions<TDataType>{
    columns: readonly Column<TDataType>[],
    data: readonly TDataType[],
}