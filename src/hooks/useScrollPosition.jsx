import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    // Update on scroll without throttling for more responsive behavior
    window.addEventListener("scroll", updatePosition);

    // Update immediately on mount
    updatePosition();

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return scrollPosition;
}
