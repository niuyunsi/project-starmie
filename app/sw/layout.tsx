import Link from "next/link";

import { Button } from "@/components/ui/button";
import SwSearch from "@/app/ui/sw/sw-search";

export default function SwLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200">
      <div className="p-4 flex w-full items-center space-x-4">
        <span className="flex-1">SW Layout Header</span>
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  );
}
