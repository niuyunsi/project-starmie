import SwSearch from "@/app/ui/sw/sw-search";

export default function PeopleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 flex flex-col space-y-4 bg-gray-300">
      <div>
        <SwSearch />
      </div>

      {children}
    </div>
  );
}
