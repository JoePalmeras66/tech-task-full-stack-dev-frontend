import { useMemo } from "react";
import { useQuery } from "react-query";
import { Column } from "react-table";
import { fetchRandomUsersByCountry } from "../services/randomuser-service";
import { BasicReactTableProps } from "../Types/BasicReactTableProps";
import { columnsRandomUser, IRandomUser } from "../Types/RandomUserTypes";
import BasicReactTable from "./table/BasicReactTable";

const RandomUser = (props: {country: string}) => {

  const columns = useMemo<readonly Column<IRandomUser>[]>(
    () => columnsRandomUser,
    []
  );

  const { status, error, data, refetch } = useQuery<readonly IRandomUser[], Error>(
    ["randomUsers", { country: props.country }],
    () => fetchRandomUsersByCountry({country: props.country})
  );

  if (status === "loading") return <div>Loading ...</div>;
  if (status === "error") return <div>{error!.message}</div>;
  if (data === undefined) return <div>RandomUsers undefined!!!</div>

  const randomUserTableProps: BasicReactTableProps<IRandomUser> = {
    columns: columns,
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
