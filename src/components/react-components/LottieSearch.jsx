import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import searchAnim from "../../assets/lotties/search.json";

export default function LottieSearch() {
  const container = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    anim.current = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: false, // awalnya jangan autoplay
      animationData: searchAnim,
    });

    // Event listeners
    const handleMouseEnter = () => anim.current?.play();
    const handleMouseLeave = () => anim.current?.stop();

    const node = container.current;
    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
      anim.current?.destroy(); // penting biar gak memory leak
    };
  }, []);

  return <div ref={container} className="w-6 aspect-square cursor-pointer" />;
}
