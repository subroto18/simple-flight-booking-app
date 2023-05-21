import { Booking } from "../components/Booking";
import { NavBar } from "../components/common/NavBar";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Preloader } from "../components/common/Preloader";
import { useSelector } from "react-redux";
export const CheckoutPage = () => {
  const [isLogedIn] = useAuth();
  const { booked } = useSelector((store) => store.bookingDetails); // check weather seat is booked or not

  console.log(isLogedIn, "isLogedIn");

  return isLogedIn == null ? (
    <Preloader />
  ) : isLogedIn && booked ? (
    <>
      <NavBar />
      <Booking></Booking>
    </>
  ) : (
    <>
      <Navigate to="/login" replace={true} />
    </>
  );
};
