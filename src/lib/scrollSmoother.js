import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother;

export function initScrollSmoother() {
  // Check if we're in the browser environment
  if (typeof window !== "undefined") {
    // Ensure DOM is ready
    if (document.readyState === "loading") {
      // DOM is still loading, wait for it to complete
      document.addEventListener("DOMContentLoaded", () => {
        initializeSmoother();
      });
    } else {
      // DOM is already ready
      initializeSmoother();
    }
  }

  return smoother;
}

function initializeSmoother() {
  // Check if required elements exist
  const wrapper = document.getElementById("smooth-wrapper");
  const content = document.getElementById("smooth-content");

  if (wrapper && content) {
    // Create ScrollSmoother instance
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2, // Reduced smoothness factor (0 to 2) - was causing lag
      effects: true, // Enable data-speed and data-lag attributes
      smoothTouch: 0.1, // Much smoother on touch devices
      normalizeScroll: true,
    });
  } else {
    console.warn(
      "ScrollSmoother: Required wrapper or content elements not found",
    );
  }
}

export function getScrollSmoother() {
  return smoother;
}

export function refreshScrollTrigger() {
  if (smoother && typeof window !== "undefined" && window.ScrollTrigger) {
    // Refresh after a short delay to ensure DOM is updated
    setTimeout(() => {
      window.ScrollTrigger.refresh();
    }, 100);
  }
}
