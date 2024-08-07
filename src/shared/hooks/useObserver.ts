export default function useObserver(ref, setShowFilters, cb) {
  function observer(event: MouseEvent) {
    if (!ref.current.contains(event.target)) {
      setShowFilters(false);

      cb();
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
