"use client";

import * as React from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
  useParams,
} from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SwSearch() {
  const params = useParams();
  const { replace } = useRouter();

  const [keyword, setKeyword] = React.useState("");
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (keyword === "") return;
    replace(`/sw/people/${keyword}`);
  };

  return (
    <div className="flex items-center space-x-4">
      <Input
        className="w-48 bg-white"
        onChange={handleKeywordChange}
        onKeyUp={(e) => e.key === "Enter" && handleSearch()}
        defaultValue={params.id}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}
