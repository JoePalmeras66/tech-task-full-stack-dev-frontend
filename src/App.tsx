
import { Provider } from "jotai";
import { SelectCountry } from "./components/dropdown/SelectCountry";

const App = () => {
  return (
    <>
      <Provider>
        <SelectCountry />
      </Provider>
    </>
  );
}

export default App;