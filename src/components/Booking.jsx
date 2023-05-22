import { useDispatch, useSelector } from "react-redux";
import useBookedSeat from "../hooks/useBookedSeat";
import { updateBookingSeat } from "../store/slices/bookingDetailsSlice";
import { DATE_FORMAT } from "../utils/helper";
import { Checkout } from "./Checkout";

export const Booking = () => {
  const {
    flightName,
    flightLogo,
    bookedSeat,
    departureFrom,
    departureTo,
    departureDate,
  } = useSelector((store) => store.bookingDetails);

  const [alreadyBookedSeat] = useBookedSeat();

  const dispatch = useDispatch();

  const selectSeat = (seat) => {
    dispatch(updateBookingSeat(seat));
  };
  console.log(alreadyBookedSeat, "alreadyBookedSeat");

  return (
    <div className=" min-h-full p-5">
      <div className="flex w-11/12 m-auto justify-between py-5">
        <div>
          <h1 className="text-3xl">
            {departureFrom.toUpperCase()} - {departureTo.toUpperCase()}
          </h1>
          <p>{DATE_FORMAT(departureDate)}</p>
        </div>
        <div className="flex items-center">
          <img className="h-12 mr-3" src={flightLogo} />
          <h1 className="text-2xl font-bold">{flightName}</h1>
        </div>
      </div>

      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 my-5">
        <div className="bg-slate-600 col-span-2 border-2 border-slate-800 rounded w-11/12 m-auto ">
          <div>
            <div className="flex flex-wrap">
              {Array.apply(null, Array(26)).map((effect, index) => {
                let bookSeat = bookedSeat.indexOf(index + 1);
                let alreadyBooked = alreadyBookedSeat.indexOf(index + 1);
                console.log(alreadyBooked, "already  Booked");

                return alreadyBooked > -1 ? (
                  <p
                    onClick={() => alert("Seat already booked!")}
                    className="bg-red-700 px-5 py-3 rounded m-5 text-white cursor-pointer"
                  >
                    {index + 1}
                  </p>
                ) : (
                  <p
                    onClick={() => selectSeat(index + 1)}
                    key={index}
                    className={`${
                      bookSeat > -1 ? "bg-slate-900 " : "bg-slate-500"
                    } px-5 py-3 rounded m-5 text-white cursor-pointer`}
                  >
                    {index + 1}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 w-11/12 m-auto  md:m-0 ">
          <Checkout />
        </div>
      </div>
    </div>
  );
};
