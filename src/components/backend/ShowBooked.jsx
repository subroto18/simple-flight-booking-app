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
export const ShowBooked = () => {
  const [bookedTicket, setBookedTicket] = useState([]);
  const [showBookedFlight, setShowBookedFlight] = useState([]);
  //   const [showA, setBookedTicket] = useState([]);

  useEffect(() => {
    performApi();
  }, []);

  const performApi = () => {
    let todays_booked_flight = DATE_FORMAT(new Date());
    getBookedFlightDataByDate(todays_booked_flight);
    // store all the booked ticket into state
  };

  const getBookedFlightDataByDate = async (date) => {
    let dataExist = Boolean(JSON.parse(LOCAL_STORAGE_GET(date)));

    if (dataExist) {
      let bookedDetails = await JSON.parse(LOCAL_STORAGE_GET(date));
      setShowBookedFlight(bookedDetails);

      // after getting todays booked flight

      // after getting all booked flight by flight name, how have to check weaher all flight are same or not

      let checkDuplicateFlight = UNIQUE_ITEM_FROM_ARRAY_OF_OBJECT(
        bookedDetails,
        "flightName"
      );

      setBookedTicket(checkDuplicateFlight);
    }
  };

  const showDataByFlightName = async (flightName = null) => {
    let bookedData = await showBookedFlight.filter(
      (item) => item.flightName.toLowerCase() === flightName.toLowerCase()
    );

    // after getting all booked flight by flight name, how have to check weaher all flight are same or not

    let checkDuplicateFlight = UNIQUE_ITEM_FROM_ARRAY_OF_OBJECT(
      bookedData,
      "flightName"
    );

    setBookedTicket(checkDuplicateFlight);
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
        className="mb-4 relative z-30"
      />

      {bookedTicket.length > 0 ? (
        <>
          {bookedTicket.map((item) => {
            return (
              <div
                key={item.flightName}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 bg-slate-200 p-5  flex  rounded justify-center mb-5 text-sm"
              >
                <img
                  src={item.flightLogo}
                  alt={item.flightName}
                  className="h-14 w-full rounded mt-1"
                />
                <p className="border-2 bg-slate-300 px-5 py-3 font-bold relative">
                  {item.flightName}
                  <span className="text-sm absolute  right-0 top-10 bg-red-500 text-white p-2 rounded z-20">
                    Flight Name
                  </span>
                </p>
                <p className="border-2 bg-slate-300 px-5 py-3 font-bold relative">
                  {item.departureTime}
                  <span className="text-sm absolute  right-0 top-10 bg-red-500 text-white p-2 rounded z-20">
                    Departure time
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
