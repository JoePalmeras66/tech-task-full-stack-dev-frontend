import { IRandomUser } from "../Types/RandomUserTypes";

export const fetchRandomUsersByCountry = async (props: {country: string, page: number, size: number}): Promise<IRandomUser[]> => {
    const response = await fetch(
      `http://localhost:8080/api/v1/randomusers/all?country=${props.country}&page=${props.page}&size=${props.size}`
    );
    if (!response.ok) {
      throw new Error("Problem fetching 'IRandomUser[]'");
    }
    const randomUsers: IRandomUser[] = await response.json();
    return randomUsers;
  };