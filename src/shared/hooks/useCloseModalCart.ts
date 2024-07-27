import { useAppDispatch } from "../../store/hooks";
import { falseModalCart } from "../../store/shopSlice";

export const useCloseModalCart = () => {
  const dispatch = useAppDispatch();

  if (localStorage.cart) {
    window.onclick = () => {
      dispatch(falseModalCart());
    };
  }
};
