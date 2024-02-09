import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetailsPage from "../src/pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useDispatch } from "react-redux";
import { fetchProductsAsync } from "./features/products-list/productSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/products",
    element: <ProductListPage></ProductListPage>,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetailsPage></ProductDetailsPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckOut></CheckOut>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("before");
    dispatch(fetchProductsAsync());
    // console.log("after");
  }, [dispatch]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
