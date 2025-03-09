"use client";

import { useState } from "react";
import "./expandableText.css";

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

export default function ExpandableText({
  text,
  maxLength = 100,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? text
    : text.slice(0, maxLength) + (text.length > maxLength ? "..." : "");

  return (
    <span>
      {displayText}
      {text.length > maxLength && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="cursor-pointer text-blue-500 underline"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </span>
  );
}
