import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Preloader } from "../components/common/Preloader";
import { useSelector } from "react-redux";
import { Invoice } from "../components/Invoice";
export const InvoicePage = () => {
  const [isLogedIn] = useAuth();
  const { showInvoice } = useSelector((store) => store.invoice); // check weather seat is booked or not

  return isLogedIn == null ? (
    <Preloader />
  ) : isLogedIn && showInvoice ? (
    <Invoice />
  ) : (
    <>
      <Navigate to="/login" replace={true} />
    </>
  );
};
