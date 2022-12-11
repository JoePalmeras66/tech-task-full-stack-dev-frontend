import { useMemo } from "react";
import { useQuery } from "react-query";
import { Column } from "react-table";
import { BasicReactTableProps } from "../Types/BasicReactTableProps";
import { IRandomUser } from "../Types/RandomUserTypes";
import BasicReactTable from "./table/BasicReactTable";

const columns: readonly Column<IRandomUser>[] = [
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

const fetchRandomUsers = async (props: {country: string}): Promise<readonly IRandomUser[]> => {
  const response = await fetch(
    `http://localhost:8080/randomusers?country=${props.country}`
  );
  if (!response.ok) {
    throw new Error("Problem fetching 'IRandomUser[]'");
  }
  const randomUsers: readonly IRandomUser[] = await response.json();
  return randomUsers;
};

const RandomUser = (props: {country: string}) => {

  const columns_ = useMemo<readonly Column<IRandomUser>[]>(
    () => columns,
    []
  );

  const { status, error, data, refetch } = useQuery<readonly IRandomUser[], Error>(
    ["randomUsers", { country: props.country }],
    () => fetchRandomUsers({country: props.country})
  );

  if (status === "loading") return <div>Loading ...</div>;
  if (status === "error") return <div>{error!.message}</div>;
  if (data === undefined) return <div>RandomUsers undefined!!!</div>

  const randomUserTableProps: BasicReactTableProps<IRandomUser> = {
    columns: columns_,
    data: data,
  }

  return (
    <>
      <button onClick={() => refetch}>Refetch</button>
      <BasicReactTable
         {...randomUserTableProps}
      />
    </>
  );
};

export default RandomUser;
