import { useState } from "react";
import { Layouts, Responsive, WidthProvider } from "react-grid-layout";
import { SelectCountry } from "../dropdown/SelectCountry";
import { RandomUsersTable } from "../table/RandomUsersTable";
import { SelectState } from "../dropdown/SelectState";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const TechTaskResponsiveGridLayout = () => {
    const myLayouts: Layouts = {
        xs: [{ i: "1", x: 0, y: 0, w: 2, h: 1, minW: 2, minH: 1 }],
        md: [{ i: "2", x: 0, y: 0, w: 2, h: 1, minW: 2, minH: 1 }],
        lg: [{ i: "3", x: 10, y: 0, w: 2, h: 1, minW: 2, minH: 1 }]
    }

    const [layouts] = useState<Layouts>(myLayouts);
    return (
      <>
        <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
            <div key="1"><SelectCountry /></div>
            <div key="2"><SelectState /></div>
            <div key="3"><RandomUsersTable /></div>
        </ResponsiveGridLayout>
      </>
    );
  
}