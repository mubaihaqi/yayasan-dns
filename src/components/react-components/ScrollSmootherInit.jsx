import React, { useEffect } from "react";
import {
  initScrollSmoother,
  getScrollSmoother,
  refreshScrollTrigger,
  isMobileDevice,
} from "../../lib/scrollSmoother.js";

const ScrollSmootherInit = () => {
  useEffect(() => {
    // Check if we're on a mobile device
    if (isMobileDevice()) {
      // On mobile devices, we remove the wrapper structure for normal scrolling
      const wrapper = document.getElementById("smooth-wrapper");
      const content = document.getElementById("smooth-content");

      if (wrapper && content) {
        // Move all children of content directly to body
        while (content.firstChild) {
          document.body.appendChild(content.firstChild);
        }
        // Remove the wrapper and content elements
        wrapper.remove();
      }
      return;
    }

    // Initialize ScrollSmoother on non-mobile devices
    const smoother = initScrollSmoother();

    // Refresh ScrollTrigger after page load to ensure proper sizing
    refreshScrollTrigger();

    // Listen for Astro page transitions to refresh ScrollTrigger
    const handleAstroPageLoad = () => {
      refreshScrollTrigger();
    };

    window.addEventListener("astro:page-load", handleAstroPageLoad);

    // Cleanup function
    return () => {
      window.removeEventListener("astro:page-load", handleAstroPageLoad);
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);

  return null;
};

export default ScrollSmootherInit;
