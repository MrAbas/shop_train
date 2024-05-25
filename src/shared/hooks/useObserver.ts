import { useEffect } from "react";

export default function useObserver(ref, showFilters, setShowFilters) {
  useEffect(() => {
    function observer(event: MouseEvent) {
      if (!ref.current.contains(event.target)) {
        setShowFilters(false);
      }
    }
    if (showFilters) {
      window.addEventListener("click", observer);
    }
    return () => {
      window.removeEventListener("click", observer);
    };
  }, [showFilters]);
}
