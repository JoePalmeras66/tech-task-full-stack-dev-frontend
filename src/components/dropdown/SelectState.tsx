import { useAtom } from "jotai";
import { filterStateAtom, sortedStatesAtom } from "../../services/state-service";
import Select from "rc-select";

export const SelectState = () => {
    const [state, setState] = useAtom(filterStateAtom);
    const [states] = useAtom(sortedStatesAtom);
    console.log("States: "+states)
    return (
        <>
            <div style={{ width: 300 }}>
                <Select
                    className='rc-select'
                    value={state}
                    onChange={setState}
                >
                    {states}
                </Select>
            </div>
        </>
    )
}