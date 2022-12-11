import { IRandomUser } from "../Types/RandomUserTypes";

export const fetchRandomUsersByCountry = async (props: {country: string}): Promise<readonly IRandomUser[]> => {
    const response = await fetch(
      `http://localhost:8080/randomusers?country=${props.country}`
    );
    if (!response.ok) {
      throw new Error("Problem fetching 'IRandomUser[]'");
    }
    const randomUsers: readonly IRandomUser[] = await response.json();
    return randomUsers;
  };