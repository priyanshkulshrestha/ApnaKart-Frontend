import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import PageNotFound from './pages/404';
import OrderSuceessPage from './pages/OrderSuccessPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfilePage from './pages/UserProfilePage';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Protected from './features/auth/components/Protected';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchLoggedInUserAsync } from './features/user/userSlice'; 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Home /></Protected>,
  },
  {
    path: "/cart",
    element: <Protected><CartPage /></Protected>,
  },
  {
    path: "/checkout",
    element: <Protected><Checkout /></Protected>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailsPage /></Protected>,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/order-success/:id",
    element: <Protected><OrderSuceessPage /></Protected>,
  },
  {
    path: "/orders",
    element: <Protected><UserOrdersPage /></Protected>,
  },
  {
    path: "/profile",
    element: <Protected><UserProfilePage /></Protected>,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
    }
  }, [dispatch, user])

  return (
    <div className="App">
    <RouterProvider router={router} />  
    </div>
  );
}

export default App;