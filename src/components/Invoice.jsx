import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DATE_FORMAT } from "../utils/helper";

export const Invoice = () => {
  const navigate = useNavigate();

  const {
    flightName,
    flightLogo,
    departureFrom,
    departureTo,
    departureDate,
    departureTime,
    flightDuration,
    reachingTime,
    flightFare,
    bookedSeat,
  } = useSelector((store) => store.invoice);

  const { userName } = useSelector((store) => store.authDetails);

  return (
    <div className="h-screen  bg-slate-800 flex justify-center  items-center ">
      <div className="bg-slate-600 w-8/12 md:w-4/12 p-5 text-center text-white rounded">
        <h1 className="text-3xl text-white text-center">
          <span className="text-green-400 font-bold">Congratulations!</span>{" "}
          Ticket Booked
        </h1>
        <p className="text-2xl py-2">User Name : {userName}</p>
        <div className="flex justify-center">
          <p className="mr-3 mt-1">Flight Name : {flightName}</p>{" "}
          <img src={flightLogo} alt={flightName} className="h-8 w-16 " />
        </div>

        <p>Departure From : {departureFrom}</p>
        <p>Departure To : {departureTo}</p>
        <p>Booking Date : {DATE_FORMAT(departureDate)}</p>
        <p>Departure time : {departureTime}</p>
        <p>Reaching time : {reachingTime}</p>
        <p>Flight duration : {flightDuration}</p>
        <p>Flight base Fare : {flightFare}</p>
        <p>Flight Seat no : {bookedSeat.join(",")}</p>
        <p>
          Flight Grand total :{" "}
          {(parseFloat(flightFare) * parseInt(bookedSeat.length)).toFixed(2)}
        </p>
        <button
          onClick={() => navigate("/")}
          className=" bg-blue-400  hover:bg-blue-600  text-white font-bold w-ful px-10 py-2  rounded mt-5"
        >
          Go back to home
        </button>
      </div>
    </div>
  );
};
