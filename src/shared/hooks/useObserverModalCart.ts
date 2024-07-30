import { useAppDispatch } from "../../store/hooks";
import { falseModalCart } from "../../store/shopSlice";

export default function useObserverModalCart(ref, state) {
  const dispatch = useAppDispatch();
  function observer(event: MouseEvent) {
    if (ref.current.contains(event.target)) {
      dispatch(falseModalCart(state));
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
