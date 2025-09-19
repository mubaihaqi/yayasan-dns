// gsap-config.js
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register plugins
gsap.registerPlugin(ScrollSmoother);

export { gsap, ScrollSmoother };