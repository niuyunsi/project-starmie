import { Skeleton } from "@/components/ui/skeleton";

export function SwPeopleSkeleton() {
  return (
    <div className="p-4 flex flex-col items-start space-y-4 bg-gray-200">
      <Skeleton className="h-6 w-[250px]" />
      <Skeleton className="h-6 w-[200px]" />
    </div>
  );
}

export function SwPlanetSkeleton() {
  return (
    <div className="p-4 flex flex-col items-start space-y-4 bg-gray-200">
      <Skeleton className="h-6 w-[250px]" />
      <Skeleton className="h-6 w-[200px]" />
    </div>
  );
}
