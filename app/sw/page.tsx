import * as React from "react";

import SwPeople from "@/app/ui/sw/sw-people";
import SwPlanet from "@/app/ui/sw/sw-planet";
import { SwPeopleSkeleton, SwPlanetSkeleton } from "@/app/ui/skeletons";

export default function SwPage() {
  return (
    <div className="p-4 bg-gray-100 ">
      <React.Suspense fallback={<SwPeopleSkeleton />}>
        <SwPeople />
      </React.Suspense>

      <React.Suspense fallback={<SwPlanetSkeleton />}>
        <SwPlanet />
      </React.Suspense>
    </div>
  );
}
