import * as React from "react";

import SwPeople from "@/app/ui/sw/sw-people";
import { SwPeopleSkeleton } from "@/app/ui/skeletons";

export default async function SwPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  return (
    <div className="p-4 bg-gray-400">
      <React.Suspense fallback={<SwPeopleSkeleton />}>
        <SwPeople id={id} />
      </React.Suspense>
    </div>
  );
}
