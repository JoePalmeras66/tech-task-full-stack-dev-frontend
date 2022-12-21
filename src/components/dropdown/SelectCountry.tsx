import { useAtom } from "jotai";
import { sortedLocationCountriesAtom } from "../../services/location-service";
import GenericCustomSelect from "./GenericCustomSelect";
import { filterCountryAtom } from "../../services/randomusers-service";

export const SelectCountry = () => {
    const [country, setCountry] = useAtom(filterCountryAtom);
    const [countries] = useAtom(sortedLocationCountriesAtom);
    return (
        <>
            <GenericCustomSelect 
                value={country} 
                onChange={setCountry} 
                options={countries}
            />
        </>
    )
}