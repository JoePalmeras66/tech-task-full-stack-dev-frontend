import { useState } from "react";
import { useQuery } from "react-query";
import { DropdownList } from "react-widgets";
import RandomUser from "./components/RandomUser";

import "react-widgets/scss/styles.scss";

const fetchLocations = async () => {
  const response = await fetch(
    `http://localhost:8080/locations`
  );
  if (!response.ok) {
    throw new Error("Problem fetching all locations");
  }
  const locations: string[] = await response.json();
  return locations;
};

const App = () => {
  const [value, setValue] = useState<string>("");

  const { data } = useQuery<string[], Error>(
    ["locations"],
    () => fetchLocations()
  );

  if(data === undefined) return <div>Locations undefined!!!</div>
 
  return (
    <>
        <DropdownList
          defaultValue="Germany"
          value={value}
          onChange={value => setValue(value)}
          data={data}
        />
        <RandomUser country={value}/>
    </>
  );
}

export default App;