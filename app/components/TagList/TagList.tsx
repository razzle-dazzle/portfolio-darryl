"use client";

import { useState } from "react";
import myProjectService from "app/services/projects.service";

type TagListProps = {
  tags: string[];
  visibleItems?: number;
};
export default function TagList({ visibleItems = 15, tags }: TagListProps) {
  const [expanded, setExpanded] = useState(false);
  const hiddenTags = tags.slice(visibleItems);
  const visibleTags = tags.slice(0, expanded ? tags.length : visibleItems);
  return (
    <>
      <ul className="flex flex-wrap gap-2 print:gap-1 mt-4 print:mt-2">
        {visibleTags.map((tag) => (
          <li
            key={tag}
            className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 print:px-1 print:py-0.5 px-2 py-1 rounded-md text-xs print:text-[0.625rem] font-semibold"
          >
            {myProjectService.getSpecialStackLabel(tag)}
          </li>
        ))}
      </ul>
      {!expanded && hiddenTags.length > 0 && (
        <button
          type="button"
          className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 print:px-1 print:py-0.5 px-2 py-1 rounded-md text-xs print:text-[0.625rem] font-semibold"
          // aria-controls=""
          // aria-expanded="false"
          // aria-label="2 more tags"
          // role="listitem"
          // aria-hidden="true"
          onClick={() => setExpanded(true)}
        >
          +{hiddenTags.length} more tag{hiddenTags.length === 1 ? "" : "s"}
        </button>
      )}
    </>
  );
}
