import { useAtom } from "jotai";
import GenericCustomSelect from "./GenericCustomSelect";
import { sortedGendersAtom } from "../../services/gender-service";
import { filterGenderAtom } from "../../services/randomusers-service";

export const SelectGender = () => {
    const [gender, setGender] = useAtom(filterGenderAtom);
    const [genders] = useAtom(sortedGendersAtom);
    return (
        <>
           <GenericCustomSelect 
                value={gender} 
                onChange={setGender} 
                options={genders}
            />
        </>
    )
}