import { useState } from "react";
import { useQuery } from "react-query";
import { DropdownList } from "react-widgets";
import { RandomUser } from "./components/RandomUser";

import { fetchAllLocations } from "./services/location-service";

import "react-widgets/scss/styles.scss";

const App = () => {
  const [value, setValue] = useState<string>("Germany");

  const { status, error, data } = useQuery<string[], Error>(
    ["locations"],
    () => fetchAllLocations()
  );

  if (status === "loading") return <div>Loading ...</div>;
  if (status === "error") return <div>{error!.message}</div>;
  if (data === undefined) return <div>Locations undefined!!!</div>
 
  return (
    <>
        <DropdownList
          value={value}
          onChange={value => setValue(value)}
          data={data}
        />
        <RandomUser country={value} page={0} size={10}/>
    </>
  );
}

export default App;