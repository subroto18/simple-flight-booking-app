import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateIsLoading } from "../store/slices/bookingSearchSlice";
import { ShimmerLoadingResult } from "./shimmerEffect/ShimmerLoadingResult";
import flightData from "../data/flightData.json";
import { getFlightSearchResult } from "../api/Api";
import { updateSearchResultData } from "../store/slices/apiSlice";
import { updateBookingDetails } from "../store/slices/bookingDetailsSlice";
import useAuth from "../hooks/useAuth";
export const ShowSearchResult = () => {
  const [isLogedIn] = useAuth();
  const navigate = useNavigate();
  const { departureFrom, departureTo, departureDate, isLoading, isSearch } =
    useSelector((state) => state.searchPortal);

  const { searchResultData } = useSelector((state) => state.searchApi);

  const dispatch = useDispatch();

  useEffect(() => {
    perFormApi(); // calling api and fetching data

    let time = setTimeout(() => {
      stopLoading();
    }, 500);

    return () => {
      clearTimeout(time);
    };
  }, [isLoading]);

  const stopLoading = () => {
    dispatch(updateIsLoading(false));
  };

  const perFormApi = () => {
    let searchSearch = getFlightSearchResult(
      flightData,
      departureFrom,
      departureTo
    );

    dispatch(updateSearchResultData(searchSearch));
  };

  const onBookFlight = (item) => {
    const bookingDetails = { ...item, departure_date: departureDate };
    dispatch(updateBookingDetails(bookingDetails));

    // if logined redirect to booking else redirect to login

    if (isLogedIn) {
      navigate("/booking");
    } else {
      navigate("/login");
    }
  };

  return !isSearch ? (
    <></>
  ) : isLoading ? (
    <ShimmerLoadingResult />
  ) : (
    <div className="p-5 ">
      <div className="w-9/12 m-auto">
        <h2 className="text-black text-3xl my-3 font-bold">
          Flights from {departureFrom.toUpperCase()} to{" "}
          {departureTo.toUpperCase()}
        </h2>
      </div>

      {searchResultData.length > 0 ? (
        <>
          {searchResultData.map((item) => {
            return (
              <div
                key={item._id}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 bg-slate-200 p-5  flex w-9/12 m-auto rounded justify-center mb-5"
              >
                <img
                  src={item.flight_logo}
                  alt={item.flight_name}
                  className="h-14 w-full rounded mt-1"
                />
                <p className="border-2 bg-slate-300 px-5 py-3 font-bold ">
                  {item.flight_name}
                </p>
                <p className="border-2 bg-slate-300 px-5 py-3 font-bold ">
                  {item.departure_time}
                </p>
                <p className="border-2 bg-slate-300 px-5 py-3 font-bold">
                  {item.flight_duration}
                </p>
                <p className="border-2 bg-slate-300 px-5 py-3 font-bold ">
                  {item.reaching_time}
                </p>
                <p className="border-2 bg-slate-300 px-5 py-3 font-bold">
                  ₹ {item.flight_fare}
                </p>
                <button
                  onClick={() => onBookFlight(item)}
                  className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold  px-10  py-3 w-full rounded"
                >
                  Book Now
                </button>
              </div>
            );
          })}
        </>
      ) : (
        <div className="bg-slate-200 p-5  flex w-9/12 m-auto rounded justify-center mb-5">
          <h1>No result found</h1>
        </div>
      )}
    </div>
  );
};
