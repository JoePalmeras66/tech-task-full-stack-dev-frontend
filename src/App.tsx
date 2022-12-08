import { useEffect } from "react";
import { useState } from "react";
import { DropdownList } from "react-widgets";
import RandomUser from "./components/RandomUser";

import "react-widgets/scss/styles.scss";

const App = () => {
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/locations`
      );
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, []);
  
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