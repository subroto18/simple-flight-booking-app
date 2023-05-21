import { useEffect } from "react";
import Select from "react-select";
import {
  DATE_FORMAT,
  FLIGHT_NAME_FROM_OPTIONS,
  LOCAL_STORAGE_GET,
  UNIQUE_ITEM_FROM_ARRAY_OF_OBJECT,
} from "../../utils/helper";
import flightData from "../../data/flightData.json";
import { useState } from "react";

export const ShowEmptySeat = () => {
  const [bookedTicket, setBookedTicket] = useState([]);
  const [showBookedFlight, setShowBookedFlight] = useState([]);
  const [bookedSeat, setBookedSeat] = useState({});

  useEffect(() => {
    performApi();
  }, []);

  const performApi = () => {
    let todays_booked_flight = DATE_FORMAT(new Date());

    getBookedFlightDataByDate(todays_booked_flight);
    // store all the booked ticket into state
  };

  const getBookedFlightDataByDate = async (date) => {
    let bookedDetails = await JSON.parse(LOCAL_STORAGE_GET(date));
    setShowBookedFlight(bookedDetails);
    setBookedTicket(bookedDetails);

    const bookedSeatObj = {};

    for (let key in bookedDetails) {
      let flightName = `${bookedDetails[key]["flightName"]}-${bookedDetails[key]["departureFrom"]}-${bookedDetails[key]["departureTo"]} `;
      let bookedSeat = bookedDetails[key]["bookedSeat"].length;

      bookedSeatObj[flightName] =
        bookedSeatObj[flightName] !== undefined
          ? bookedSeatObj[flightName] + bookedSeat
          : bookedSeat;
    }

    setBookedSeat(bookedSeatObj);
  };

  const showDataByFlightName = async (flightName = null) => {
    let bookedData = await showBookedFlight.filter(
      (item) => item.flightName.toLowerCase() === flightName.toLowerCase()
    );

    setBookedTicket(bookedData);
  };

  const handleFilterByFlightName = (data) => {
    // search booked ticket by flight name
    showDataByFlightName(data.value);
  };

  // flight name fetch from json data

  const showAllAvailableFlight = UNIQUE_ITEM_FROM_ARRAY_OF_OBJECT(
    flightData,
    "flight_name"
  );

  // make option format

  const Option = FLIGHT_NAME_FROM_OPTIONS(showAllAvailableFlight);

  return (
    <>
      <Select
        onChange={handleFilterByFlightName}
        options={Option}
        className="mb-4"
      />

      {bookedTicket.length > 0 ? (
        <>
          {bookedTicket.map((item) => {
            return (
              <div
                key={item.flightName}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 bg-slate-200 p-5  flex  rounded justify-center mb-5 text-sm"
              >
                <div className="relative">
                  <img
                    src={item.flightLogo}
                    alt={item.flightName}
                    className="h-14 w-full rounded mt-1"
                  />
                  <span className="text-sm absolute  right-0 top-10 bg-red-500 text-white p-2 rounded z-50">
                    {item.flightName}
                  </span>
                </div>

                <p className="border-2 bg-slate-300 px-5 py-3 font-bold relative text-center">
                  {item.departureFrom}
                  <span className="text-sm absolute  right-0 top-10 bg-red-500 text-white p-2 rounded z-50">
                    Departure from
                  </span>
                </p>

                <p className="border-2 bg-slate-300 px-5 py-3 font-bold relative text-center">
                  {25 - item.bookedSeat.length}
                  <span className="text-sm absolute  right-0 top-10 bg-red-500 text-white p-2 rounded z-50">
                    Empty Seat
                  </span>
                </p>
              </div>
            );
          })}
        </>
      ) : (
        <div className="bg-slate-700 text-center py-2 my-2">
          <h1 className="text-white">There is no data found</h1>
        </div>
      )}
    </>
  );
};
