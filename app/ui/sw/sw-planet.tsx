import { fetchPlanetById } from "@/app/lib/data";

export default async function SwPeople() {
  const planet = await fetchPlanetById("1");

  return (
    <div className="p-4 flex flex-col items-start space-y-4 bg-gray-200">
      <h1>{planet.name}</h1>
      <span>Population: {planet.population}</span>
      {/* <pre>{JSON.stringify(planet, null, 2)}</pre> */}
    </div>
  );
}
