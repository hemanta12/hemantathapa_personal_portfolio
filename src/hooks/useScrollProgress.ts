import { useEffect, useState } from "react";

type ScrollProgressState = {
  scrollY: number;
  isScrolled: boolean;
};

const getScrollY = (): number => {
  if (typeof window === "undefined") return 0;
  return window.scrollY || window.pageYOffset || 0;
};

const useScrollProgress = (threshold = 60): ScrollProgressState => {
  const [scrollY, setScrollY] = useState<number>(getScrollY());

  useEffect(() => {
    const onScroll = (): void => {
      setScrollY(getScrollY());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return {
    scrollY,
    isScrolled: scrollY >= threshold,
  };
};

export default useScrollProgress;
