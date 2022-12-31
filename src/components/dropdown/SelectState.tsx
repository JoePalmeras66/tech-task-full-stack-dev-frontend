import { useAtom } from "jotai";
import { sortedStatesAtom } from "../../services/state-service";
import GenericCustomSelect from "./GenericCustomSelect";
import { filterStateAtom } from "../../services/randomusers-service";

export const SelectState = () => {
    const [state, setState] = useAtom(filterStateAtom);
    const [states] = useAtom(sortedStatesAtom);
    return (
        <>
           <GenericCustomSelect 
                value={state} 
                onChange={setState} 
                options={states}
            />
        </>
    )
}