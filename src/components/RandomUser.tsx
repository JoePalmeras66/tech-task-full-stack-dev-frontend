import { useEffect, useMemo, useState } from "react";
import { Column } from "react-table";
import { IRandomUser } from "../Types/RandomUserTypes";

import { RandomUserTable } from "./RandomUserTable";

const columns: Column<IRandomUser>[] = [
  {
    Header: 'First Name',
    accessor: 'first',
  },
  {
    Header: 'Last Name',
    accessor: 'last',
  },
  {
    Header: 'Gender',
    accessor: 'gender',
  },
  {
    Header: 'E-Mail',
    accessor: 'email',
  },
]

type RandomUserProps = {
  country: string;
};

const RandomUser = (props: RandomUserProps) => {
  const [data, setData] = useState<IRandomUser[]>([]);

  const columns_ = useMemo<Column<IRandomUser>[]>(
    () => columns,
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/randomusers?country=${props.country}`
      );
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, [props.country]);

  return (
    <>
      <RandomUserTable
        columns={columns_}
        data={data}
      />
    </>
  );
};

export default RandomUser;
