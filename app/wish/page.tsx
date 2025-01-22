"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function WishPage() {
  const [textareaValue, setTextareaValue] = React.useState("");
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setTextareaValue(e.target.value);
  };

  const [output, setOutput] = React.useState("");
  const handleButtonClick = () => {
    console.log("handleButtonClick");
    setOutput(textareaValue);
  };

  return (
    <div className="p-4 flex flex-col items-start space-y-4 bg-gray-100">
      <h1>Wish Page</h1>

      <Textarea
        placeholder="Paste url here"
        value={textareaValue}
        onChange={handleTextareaChange}
      />

      <span>Output: {output}</span>

      <Button onClick={handleButtonClick}>Fetch</Button>
    </div>
  );
}
