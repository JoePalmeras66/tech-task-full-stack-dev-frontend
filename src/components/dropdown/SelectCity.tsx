import { useAtom } from "jotai";
import GenericCustomSelect from "./GenericCustomSelect";
import { filterCityAtom } from "../../services/randomusers-service";
import { sortedCitiesAtom } from "../../services/city-service";

export const SelectCity = () => {
    const [city, setCity] = useAtom(filterCityAtom);
    const [cities] = useAtom(sortedCitiesAtom);
    return (
        <>
           <GenericCustomSelect 
                value={city} 
                onChange={setCity} 
                options={cities}
            />
        </>
    )
}