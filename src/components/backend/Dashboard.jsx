import { useState } from "react";
import { useEffect } from "react";
import { DATE_FORMAT, LOCAL_STORAGE_GET } from "../../utils/helper";
import { Modal } from "./Modal";
import { NumberCard } from "./NumberCard";
import flightData from "../../data/flightData.json";
// 1. See number of booking today. On click must open flight wise listing
// 2. See the empty seats today. On clicking Flight wise listing
export const Dashboard = () => {
  const [totalBooking, setTotalBooking] = useState(0);
  const [totalEmptySeat, setTotalEmptySeat] = useState(0);
  useEffect(() => {
    let todays_booked_flight = DATE_FORMAT(new Date());
    let bookedDetails = LOCAL_STORAGE_GET(todays_booked_flight);
    todaybookedSeat(JSON.parse(bookedDetails));
    todayEmptyEmptySeat(JSON.parse(bookedDetails));
  }, [totalBooking, totalEmptySeat]);

  const todaybookedSeat = (data) => {
    setTotalBooking(data.length);
  };

  const todayEmptyEmptySeat = (data) => {
    let totalSeatToday = +flightData.length * 26;
    let bookedSeatToday = 0;

    data.map((item) => {
      bookedSeatToday += item.bookedSeat.length;
    });

    setTotalEmptySeat(totalSeatToday - bookedSeatToday);
  };

  return (
    <div className="w-8/12 m-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <NumberCard
          title="Total number of Booking Today"
          number={totalBooking}
          showTodayBookedTicket={true}
        />
        <NumberCard
          title="Total number of empty seats Today"
          number={totalEmptySeat}
          showTodayEmptySeat={true}
        />
      </div>
      <Modal />
    </div>
  );
};
