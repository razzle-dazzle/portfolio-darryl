'use client';

import { useEffect } from 'react';

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service?
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Oops, something went wrong...! Please reload the page.</p>
    </div>
  );
}
