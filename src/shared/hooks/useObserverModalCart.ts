import { useAppDispatch } from "../../store/hooks";
import { falseModalCart } from "../../store/shopSlice";

export default function useObserverModalCart(ref, state) {
  const dispatch = useAppDispatch();
  function observer(event: MouseEvent) {
    console.log(ref.current.contains(event.target));
    if (!ref.current.contains(event.target)) {
      // TODO неправильно работает
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
