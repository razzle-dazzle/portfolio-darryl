import { useEffect, useRef, useState } from "react";

export const useIntersection = <T extends HTMLElement>(
  options?: IntersectionObserverInit & { onFirstInteraction?: () => void }
) => {
  const [isVisible, setState] = useState(false);
  const fired = useRef(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const { current } = elementRef;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // A ref is preferable over state for tracking onFirstInteraction
        // because the event might fire multiple times before the state is updated.
        if (!fired.current && entry.isIntersecting) {
          fired.current = true;
          options?.onFirstInteraction?.();
        }

        // The "isVisible" state should be updated after the fired ref
        setState(entry.isIntersecting);
      },
      {
        ...options
      }
    );
    if (current) {
      observer?.observe(current);
    }
    return () => {
      if (current) {
        observer?.unobserve(current);
      }
    }
  }, [options]);

  return { elementRef, isVisible, hasFired: fired.current };
};
