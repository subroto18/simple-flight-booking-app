import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "../pages/404";
import { DashboardPage } from "../pages/backend/DashboardPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { HomePage } from "../pages/HomePage";
import { InvoicePage } from "../pages/InvoicePage";
import { LoginPage } from "../pages/LoginPage";

const Route = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/booking",
      element: <CheckoutPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/invoice",
      element: <InvoicePage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={appRoute} />;
};

export default Route;
