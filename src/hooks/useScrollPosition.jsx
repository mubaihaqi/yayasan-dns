import { useState, useEffect, useCallback } from "react";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    // Update with throttling to improve performance
    const throttledUpdatePosition = throttle(updatePosition, 16); // ~60fps
    
    window.addEventListener("scroll", throttledUpdatePosition);

    // Update immediately on mount
    updatePosition();

    return () => {
      window.removeEventListener("scroll", throttledUpdatePosition);
    };
  }, []);

  return scrollPosition;
}
