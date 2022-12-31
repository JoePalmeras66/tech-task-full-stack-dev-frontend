import { useState } from "react";
import { Layouts, Responsive, WidthProvider } from "react-grid-layout";
import { SelectCountry } from "../dropdown/SelectCountry";
import { RandomUsersTable } from "../table/RandomUsersTable";
import { SelectState } from "../dropdown/SelectState";
import { SelectCity } from "../dropdown/SelectCity";
import { SelectGender } from "../dropdown/SelectGender";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const TechTaskResponsiveGridLayout = () => {
    const myLayouts: Layouts = {
        countriesDD: [{ i: "1", x: 0, y: 0, w: 2, h: 1, minW: 2, minH: 1 }],
        statesDD: [{ i: "2", x: 0, y: 0, w: 2, h: 1, minW: 2, minH: 1 }],
        citiesDD: [{ i: "3", x: 0, y: 0, w: 2, h: 1, minW: 2, minH: 1 }],
        genderDD: [{ i: "4", x: 0, y: 0, w: 2, h: 1, minW: 2, minH: 1 }],
        randomusersT: [{ i: "5", x: 10, y: 0, w: 2, h: 1, minW: 2, minH: 1 }]
    }

    const [layouts] = useState<Layouts>(myLayouts);
    return (
      <>
        <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={{ randomusersT: 600, countriesDD: 40, statesDD: 40, citiesDD: 40, genderDD: 40 }}
            cols={{ randomusersT: 12, countriesDD: 2, statesDD: 2, citiesDD: 2, genderDD: 2 }}
        >
            <div key="1"><SelectCountry /></div>
            <div key="2"><SelectCity /></div>
            <div key="3"><SelectState /></div>
            <div key="4"><SelectGender /></div>
            <div key="5"><RandomUsersTable /></div>
        </ResponsiveGridLayout>
      </>
    );
  
}