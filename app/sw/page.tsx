import * as React from "react";

// import SwPeople from "@/app/ui/sw/sw-people";
// import SwPlanet from "@/app/ui/sw/sw-planet";
// import { SwPeopleSkeleton, SwPlanetSkeleton } from "@/app/ui/skeletons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SwPage() {
  return (
    <div className="p-4 space-x-4 bg-gray-100 ">
      {/* <React.Suspense fallback={<SwPeopleSkeleton />}>
        <SwPeople id={"1"} />
      </React.Suspense>

      <React.Suspense fallback={<SwPlanetSkeleton />}>
        <SwPlanet />
      </React.Suspense> */}
      <Link href="/sw/people/1">
        <Button>People</Button>
      </Link>
      {/* <Link href="/sw/planet/1">
        <Button>Planet</Button>
      </Link> */}
    </div>
  );
}
