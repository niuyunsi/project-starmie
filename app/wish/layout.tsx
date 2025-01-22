import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function WishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <div className="flex w-full justify-between items-center p-4">
        Wish Layout Header
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  );
}
