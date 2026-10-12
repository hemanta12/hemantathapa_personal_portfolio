import { useEffect, useState } from "react";

type ScrollProgressState = {
  isScrolled: boolean;
};

const getScrollY = (): number => {
  if (typeof window === "undefined") return 0;
  return window.scrollY || window.pageYOffset || 0;
};

const useScrollProgress = (threshold = 60): ScrollProgressState => {
  const [isScrolled, setIsScrolled] = useState<boolean>(
    () => getScrollY() >= threshold,
  );

  useEffect(() => {
    const onScroll = (): void => {
      setIsScrolled(getScrollY() >= threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return { isScrolled };
};

export default useScrollProgress;
