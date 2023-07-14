import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetailsPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetailsPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);


function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />  
    </div>
  );
}

export default App;
