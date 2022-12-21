import { atom, useAtom } from "jotai";
import GenericCustomSelect from "./GenericCustomSelect";
import { pageSizeAtom } from "../../services/randomusers-service";

const optionPageSizeAtom = atom<number[]>([10, 20, 30, 40 , 50]);

export const SelectPageSize = () => {
    const [pageSize, setPageSize] = useAtom(pageSizeAtom);
    const [optionPageSize] = useAtom(optionPageSizeAtom);
    return (
        <>
            <GenericCustomSelect 
                value={pageSize} 
                onChange={setPageSize} 
                options={optionPageSize}
            />
        </>
    )
}