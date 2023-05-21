import { BsChevronDown } from "react-icons/Bs";
import { useDispatch, useSelector } from "react-redux";
import departureData from "../data/flightData.json";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import {
  updateDepartureFrom,
  updateDepartureTo,
  updateIsDeparureFrom,
  updateIsDeparureTo,
  updateIsDepartureDate,
  updateDepartureDate,
  updateIsLoading,
  updateIsSearch,
} from "../store/slices/bookingSearchSlice";

import Select from "react-select";
import {
  DATE_FORMAT,
  DEPARTURE_FROM_OPTIONS,
  DEPARTURE_TO_OPTIONS,
  UNIQUE_ITEM_FROM_ARRAY_OF_OBJECT,
} from "../utils/helper";
import { LoadingBtn } from "./common/LoadingBtn";
export const SearchPortal = () => {
  const {
    departureFrom,
    departureTo,
    departureDate,
    isDepartureFrom,
    isDepartureTo,
    isDepartureDate,
    isLoading,
  } = useSelector((state) => state.searchPortal);

  const dispatch = useDispatch();

  // departure from

  const departureFromArray = UNIQUE_ITEM_FROM_ARRAY_OF_OBJECT(
    departureData,
    "departure_from"
  );

  const selectOptionForDepartureFrom =
    DEPARTURE_FROM_OPTIONS(departureFromArray);

  console.log(selectOptionForDepartureFrom, "se");
  const handleDepartureFrom = (e) => {
    dispatch(updateIsDeparureFrom(false));
    dispatch(updateDepartureFrom(e.value));
  };

  // departure to

  const departureToArray = UNIQUE_ITEM_FROM_ARRAY_OF_OBJECT(
    departureData,
    "departure_to"
  );

  const selectOptionForDepartureTo = DEPARTURE_TO_OPTIONS(departureToArray);

  const handleDepartureTo = (e) => {
    dispatch(updateIsDeparureTo(false));
    dispatch(updateDepartureTo(e.value));
  };

  // departure date

  const onDateChange = (date) => {
    dispatch(updateDepartureDate(date));
    dispatch(updateIsDepartureDate(false));
  };

  // search

  const onSubmitBnt = () => {
    dispatch(updateIsLoading(true));
    dispatch(updateIsSearch(true));
  };

  return (
    <div className="bg-slate-700 p-5 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-9/12 m-auto bg-slate-100 p-5 rounded shadow-md mt-5">
        <div className="border-2 border-slate-400 p-2 rounded hover:bg-sky-100 cursor-pointer">
          {isDepartureFrom ? (
            <div className="mt-3">
              <Select
                onChange={handleDepartureFrom}
                options={selectOptionForDepartureFrom}
                value={selectOptionForDepartureFrom.filter(
                  (item) => item.value === departureFrom
                )}
              />
            </div>
          ) : (
            <div onClick={() => dispatch(updateIsDeparureFrom(true))}>
              <label>From</label>
              <h1 className="text-3xl font-bold">
                {departureFrom.toUpperCase()}
              </h1>
            </div>
          )}
        </div>
        <div className="border-2 border-slate-400 p-2 rounded hover:bg-sky-100 cursor-pointer">
          {isDepartureTo ? (
            <div className="mt-3">
              <Select
                onChange={handleDepartureTo}
                options={selectOptionForDepartureTo}
                value={selectOptionForDepartureTo.filter(
                  (item) => item.value === departureTo
                )}
              />
            </div>
          ) : (
            <div onClick={() => dispatch(updateIsDeparureTo(true))}>
              <label>To</label>
              <h1 className="text-3xl font-bold">
                {departureTo.toUpperCase()}
              </h1>
            </div>
          )}
        </div>
        <div className="border-2 border-slate-400 p-2 rounded hover:bg-sky-100 cursor-pointer  justify-center">
          {isDepartureDate ? (
            <div className="">
              <p>Departure</p>
              <DatePicker onChange={onDateChange} value={departureDate} />
            </div>
          ) : (
            <div onClick={() => dispatch(updateIsDepartureDate(true))}>
              <div className="flex">
                <label>Departure</label>
                <BsChevronDown className="mt-1 ml-3" />
              </div>

              <h1 className="text-3xl font-bold">
                {DATE_FORMAT(departureDate)}
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="text-center mt-3">
        {isLoading ? (
          <LoadingBtn />
        ) : (
          <button
            onClick={onSubmitBnt}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        )}
      </div>
    </div>
  );
};
