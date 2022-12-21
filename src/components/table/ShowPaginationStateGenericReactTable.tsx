import { Table } from "@tanstack/react-table";

export const ShowPaginationStateGenericReactTable = <TDataType extends object>(
    props: {table: Table<TDataType>, showPagination?: boolean}
    ) => {
    const {showPagination = false} = props;
    if(!showPagination) return <></>; 
    return(
        <>
         <pre>{JSON.stringify(props.table.getState().pagination, null, 2)}</pre>
        </>
    )
}