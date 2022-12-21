import { Table } from "@tanstack/react-table";

export const ShowCountRowsGenericReactTable = <TDataType extends object>(
    props: {table: Table<TDataType>, showCountRows?: boolean}
    ) => {
    const {showCountRows = false} = props;
    if(!showCountRows) return <></>; 
    return(
        <>
            <div>{props.table.getRowModel().rows.length} Rows</div>
        </>
    )
}