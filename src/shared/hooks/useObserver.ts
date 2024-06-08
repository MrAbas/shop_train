export default function useObserver(ref, setShowFilters) {
  function observer(event: MouseEvent) {
    if (!ref.current.contains(event.target)) {
      setShowFilters(false);
    }
  }
  function addListener() {
    window.addEventListener("click", observer);
  }
  function removeListener() {
    window.removeEventListener("click", observer);
  }

  return { addListener, removeListener };
}
