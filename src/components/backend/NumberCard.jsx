import React from "react";
import {
  updateModalStatus,
  updateShowContentStatus,
} from "../../store/slices/dashboardSlice";
import { useDispatch } from "react-redux";

export const NumberCard = ({
  title,
  number,
  showTodayBookedTicket,
  showTodayEmptySeat,
}) => {
  const dispatch = useDispatch();

  const handleChange = (showTodayBookedTicket, showTodayEmptySeat) => {
    dispatch(updateModalStatus(true));

    const showContent = {
      showTodayBookedTicket,
      showTodayEmptySeat,
    };
    dispatch(updateShowContentStatus(showContent));
  };

  return (
    <div className="bg-slate-700 py-20 text-center rounded ">
      <h1 className="text-white text-2xl ">{title}</h1>
      <p className="text-white text-4xl font-bold text-red-500">{number}</p>
      <button
        onClick={() => handleChange(showTodayBookedTicket, showTodayEmptySeat)}
        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold w-ful px-10 py-2  rounded mt-2"
      >
        See Details
      </button>
    </div>
  );
};
