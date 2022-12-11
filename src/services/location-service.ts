export const fetchAllLocations = async () => {
    const response = await fetch(
      `http://localhost:8080/locations`
    );
    if (!response.ok) {
      throw new Error("Problem fetching all locations");
    }
    const locations: string[] = await response.json();
    return locations;
  };