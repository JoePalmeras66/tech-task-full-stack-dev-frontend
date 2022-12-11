import { useMemo } from "react";
import { useQuery } from "react-query";
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

const fetchRandomUsers = async (props: {country: string}): Promise<IRandomUser[]> => {
  const response = await fetch(
    `http://localhost:8080/randomusers?country=${props.country}`
  );
  if (!response.ok) {
    throw new Error("Problem fetching 'IRandomUser[]'");
  }
  const randomUsers: IRandomUser[] = await response.json();
  return randomUsers;
};

const RandomUser = (props: {country: string}) => {
  const columns_ = useMemo<Column<IRandomUser>[]>(
    () => columns,
    []
  );

  const { status, error, data, refetch } = useQuery<IRandomUser[], Error>(
    ["randomUsers", { country: props.country }],
    () => fetchRandomUsers({country: props.country})
  );

  if (status === "loading") return <div>Loading ...</div>;
  if (status === "error") return <div>{error!.message}</div>;
  if (data === undefined) return <div>RandomUsers undefined!!!</div>

  const refetchData = () => refetch;

  return (
    <>
      <button onClick={refetchData}>Refetch</button>
      <RandomUserTable
        columns={columns_}
        data={data}
      />
    </>
  );
};

export default RandomUser;
