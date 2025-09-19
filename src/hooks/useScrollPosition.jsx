import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let throttleTimer;
    
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    
    const throttledUpdatePosition = () => {
      if (throttleTimer) return;
      
      throttleTimer = setTimeout(() => {
        updatePosition();
        throttleTimer = null;
      }, 100);
    };

    window.addEventListener("scroll", throttledUpdatePosition);

    updatePosition();

    return () => {
      window.removeEventListener("scroll", throttledUpdatePosition);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  return scrollPosition;
}