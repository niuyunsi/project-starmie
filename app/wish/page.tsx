"use client";

import { Button } from "@/components/ui/button";

export default function WishPage() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <h1>Wish Page</h1>

      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}
