import { useAtom } from "jotai";
import { sortedCountriesAtom } from "../../services/country-service";
import GenericCustomSelect from "./GenericCustomSelect";
import { filterCountryAtom } from "../../services/randomusers-service";

export const SelectCountry = () => {
    const [country, setCountry] = useAtom(filterCountryAtom);
    const [countries] = useAtom(sortedCountriesAtom);
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