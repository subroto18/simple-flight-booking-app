import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateBooked } from "../store/slices/bookingDetailsSlice";
import { updateInVoice } from "../store/slices/invoiceSlice";
import { DATE_FORMAT } from "../utils/helper";
export const Checkout = () => {
  const {
    flightName,
    flightId,
    flightLogo,
    departureFrom,
    departureTo,
    departureDate,
    flightFare,
    bookedSeat,
    departureTime,
    reachingTime,
    flightDuration,
  } = useSelector((store) => store.bookingDetails);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { userName } = useSelector((store) => store.authDetails);

  const BookedTicket = () => {
    let bookingDetails = [
      {
        flightId: flightId,
        userName: userName,
        flightLogo: flightLogo,
        flightName: flightName,
        departureDate: departureDate,
        departureFrom: departureFrom,
        departureTo: departureTo,
        departureTime: departureTime,
        reachingTime: reachingTime,
        flightFare: parseFloat(flightFare).toFixed(2),
        flightDuration: flightDuration,
        bookedSeat: bookedSeat,
      },
    ];

    dispatch(updateBooked(bookingDetails));
    dispatch(updateInVoice(bookingDetails));

    Navigate("/invoice");
  };

  return (
    <div>
      <h1 className="text-2xl">
        <span>Name: </span>{" "}
        <span className="font-bold">{userName.toUpperCase()}</span>
      </h1>
      <h1>
        <span>Departure from:</span>
        <span className="font-bold"> {departureFrom.toUpperCase()}</span>
      </h1>
      <h1>
        <span>Departure to: </span>
        <span className="font-bold"> {departureTo.toUpperCase()}</span>
      </h1>
      <h1>
        <span>Departure Date: </span>
        <span className="font-bold"> {DATE_FORMAT(departureDate)}</span>
      </h1>
      <h1>
        <span>Fare: </span>
        <span className="font-bold">
          {" "}
          ₹ {(parseFloat(flightFare) * bookedSeat.length).toFixed(2)} (
          {bookedSeat.length} seat)
        </span>
      </h1>

      {bookedSeat.length ? (
        <button
          onClick={BookedTicket}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-ful px-10 py-2  rounded mt-2"
        >
          Checkout
        </button>
      ) : (
        <button
          disabled={true}
          className="bg-blue-400  text-white font-bold w-ful px-10 py-2  rounded mt-2"
        >
          Checkout
        </button>
      )}
    </div>
  );
};
