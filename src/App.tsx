
import { Provider } from "jotai";
import { Suspense } from 'react';
import { SelectCountry } from "./components/dropdown/SelectCountry";
import { RandomUserTable } from "./components/RandomUserTable";

const App = () => {
  return (
    <>
      <Provider>
        <Suspense fallback={<div>Loading Data</div>}>
          <SelectCountry />
          <RandomUserTable />
        </Suspense>
      </Provider>
    </>
  );
}

export default App;