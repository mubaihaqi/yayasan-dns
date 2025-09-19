import React, { useEffect } from 'react';
import { initScrollSmoother, getScrollSmoother, refreshScrollTrigger } from '../../lib/scrollSmoother.js';

const ScrollSmootherInit = () => {
  useEffect(() => {
    // Initialize ScrollSmoother
    const smoother = initScrollSmoother();
    
    // Refresh ScrollTrigger after page load to ensure proper sizing
    refreshScrollTrigger();
    
    // Listen for Astro page transitions to refresh ScrollTrigger
    const handleAstroPageLoad = () => {
      refreshScrollTrigger();
    };
    
    window.addEventListener('astro:page-load', handleAstroPageLoad);
    
    // Cleanup function
    return () => {
      window.removeEventListener('astro:page-load', handleAstroPageLoad);
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);

  return null;
};

export default ScrollSmootherInit;