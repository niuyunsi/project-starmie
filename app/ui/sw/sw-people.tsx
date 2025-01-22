import { fetchPeopleById } from "@/app/lib/data";

export default async function SwPeople() {
  const people = await fetchPeopleById("1");

  return (
    <div className="p-4 flex flex-col items-start space-y-4 bg-gray-200">
      <h1>{people.name}</h1>
      <span>Height: {people.height}</span>
      {/* <pre>{JSON.stringify(people, null, 2)}</pre> */}
    </div>
  );
}
