
import { Provider } from "jotai";
import { Suspense } from 'react';
import { SelectCountry } from "./components/dropdown/SelectCountry";
import { RandomUsersList } from './components/RandomUsersList';

const App = () => {
  return (
    <>
      <Provider>
        <Suspense fallback={<div>Loading something</div>}>
          <SelectCountry />
          <RandomUsersList />
        </Suspense>
      </Provider>
    </>
  );
}

export default App;