import { fetchPeopleById } from "@/app/lib/data";

export default async function SwPeople(props: { id: string }) {
  const people = await fetchPeopleById(props.id);

  return (
    <div className="p-4 flex flex-col items-start space-y-4 bg-blue-200">
      <h1>{people.name}</h1>
      <span>Height: {people.height}</span>
      {/* <pre>{JSON.stringify(people, null, 2)}</pre> */}
    </div>
  );
}
