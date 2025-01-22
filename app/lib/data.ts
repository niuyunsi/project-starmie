export async function fetchPeopleById(id: string) {
  try {
    console.log("fetchPeopleById", id);
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await fetch(`https://swapi.dev/api/people/${id}/`);
    const data = await res.json();
    console.log("fetchPeopleById", data);
    return data;
  } catch (error) {
    console.error("fetchPeopleById error", error);
    throw new Error("fetchPeopleById error");
  }
}

export async function fetchPlanetById(id: string) {
  try {
    console.log("fetchPlanetById", id);
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const res = await fetch(`https://swapi.dev/api/planets/${id}/`);
    const data = await res.json();
    console.log("fetchPlanetById", data);
    return data;
  } catch (error) {
    console.error("fetchPlanetById error", error);
    throw new Error("fetchPlanetById error");
  }
}
