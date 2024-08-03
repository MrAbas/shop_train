import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { store } from "./store";
import { ErrorPage } from "./pages/ErrorPage";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage/index";
import { ShopPage } from "./pages/ShopPage";
import { ClothPage } from "./pages/ClothPage";
import { Footer } from "./components/Footer";
import { ProfileProductPage } from "./pages/ProfileProductPage";
import { CartPage } from "./pages/CartPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/loginPage",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:id/:itemId",
        element: <ProfileProductPage />,
      },
      {
        path: "/shop/:id",
        element: <ClothPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
);
