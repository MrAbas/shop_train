import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { store } from "./store";
import { ErrorPage } from "./pages/ErrorPage";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { ShopPage } from "./pages/ShopPage";
import { Footer } from "./components/Footer";

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
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
