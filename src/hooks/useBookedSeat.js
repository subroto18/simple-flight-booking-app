import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { DATE_FORMAT, LOCAL_STORAGE_GET } from "../utils/helper";

const useBookedSeat = () => {
  const [alreadyBookedSeat, setAlreadyBookedSeat] = useState([]);

  const { departureDate, departureFrom, flightName } = useSelector(
    (store) => store.bookingDetails
  );

  useEffect(() => {
    let booked_date = DATE_FORMAT(departureDate);

    let check_booked_flight_by_date = Boolean(LOCAL_STORAGE_GET(booked_date));

    if (check_booked_flight_by_date) {
      let bookedFlightData = LOCAL_STORAGE_GET(booked_date);

      let bookedFlightSeat = JSON.parse(bookedFlightData).map((item) => {
        if (
          item.flightName == flightName &&
          item.departureFrom === departureFrom
        ) {
          return [...item.bookedSeat];
        }
      });

      setAlreadyBookedSeat(bookedFlightSeat.flat());
    }
  }, []);

  return [alreadyBookedSeat];
};

export default useBookedSeat;
