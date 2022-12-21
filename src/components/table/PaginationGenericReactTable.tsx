import { Table } from "@tanstack/react-table";
import { useSetAtom } from "jotai";
import { pageIndexAtom, pageSizeAtom } from "../../services/randomusers-service";
import { ShowPaginationStateGenericReactTable } from "./ShowPaginationStateGenericReactTable";
import { ShowCountRowsPaginationGenericReactTable } from "./ShowCountRowsPaginationGenericReactTable";

export const PaginationGenericReactTable = <TDataType extends object>(props: {table: Table<TDataType>,
                                                                              showPagination?: boolean,
                                                                              showCountRows?: boolean}) => {
    const setPageIndex = useSetAtom(pageIndexAtom);
    const setPageSize = useSetAtom(pageSizeAtom);
    return(
        <>
            <div>
                <button
                    onClick={() => {
                        props.table.setPageIndex(0)
                        setPageIndex(() => 0);
                    }}
                    disabled={!props.table.getCanPreviousPage()}
                >
                {'<<'}
                </button>
                <button
                    onClick={() => {
                        const page = props.table.getState().pagination.pageIndex - 1;
                        props.table.previousPage();
                        setPageIndex(() => page);
                    }}
                    disabled={!props.table.getCanPreviousPage()}
                >
                {'<'}
                </button>
                <button
                    onClick={() => {
                        const page = props.table.getState().pagination.pageIndex + 1;
                        props.table.nextPage();
                        setPageIndex(() => page);
                    }}
                    disabled={!props.table.getCanNextPage()}
                >
                {'>'}
                </button>
                <button
                    onClick={() => {
                        const page = props.table.getPageCount() - 1;
                        props.table.setPageIndex(page);
                        setPageIndex(() => page);
                    }}
                    disabled={!props.table.getCanNextPage()}
                >
                {'>>'}
                </button>
                <span >
                    <div>Page</div>
                    <strong>
                        {props.table.getState().pagination.pageIndex + 1} of{' '}
                        {props.table.getPageCount()}
                    </strong>
                </span>
                <span >
                    | Go to page:
                    <input
                        type="number"
                        defaultValue={props.table.getState().pagination.pageIndex + 1}
                        onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                            props.table.setPageIndex(page)
                            setPageIndex(() => page);
                        }}
                    />
                </span>
                <select
                    value={props.table.getState().pagination.pageSize}
                    onChange={e => {
                        const pageSize = Number(e.target.value);
                        props.table.setPageSize(pageSize);
                        setPageSize(() => pageSize);
                    }}
                    >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option 
                            key={pageSize} 
                            value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            <ShowCountRowsPaginationGenericReactTable {...props}/>
            <ShowPaginationStateGenericReactTable {...props}/>
        </>
    )
}