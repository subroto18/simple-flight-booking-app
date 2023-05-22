export const LOGO =
  "https://w7.pngwing.com/pngs/974/566/png-transparent-google-flights-airline-ticket-hotel-travel-blue-angle-flight-thumbnail.png";
export const UNIQUE_ITEM_FROM_ARRAY_OF_OBJECT = (data, key) => {
  //here data is array of object and key is the specific keys in the object
  return [...new Map(data.map((item) => [item[key], item])).values()];
};

export const DEPARTURE_FROM_OPTIONS = (data) => {
  //here data is array of object

  return data.map((item) => {
    return {
      value: item.departure_from,
      label: item.departure_from.toUpperCase(),
    };
  });
};

export const FLIGHT_NAME_FROM_OPTIONS = (data) => {
  //here data is array of object

  return data.map((item) => {
    return {
      value: item.flight_name,
      label: item.flight_name.toUpperCase(),
    };
  });
};

export const DEPARTURE_TO_OPTIONS = (data) => {
  //here data is array of object

  return data.map((item) => {
    return {
      value: item.departure_to,
      label: item.departure_to.toUpperCase(),
    };
  });
};

export const DATE_FORMAT = (date) => {
  var strArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var d = date.getDate();
  var m = strArray[date.getMonth()];
  var y = date.getFullYear();
  return "" + (d <= 9 ? "0" + d : d) + "-" + m + "-" + y;
};

export const COMPARE_DATE = (date) => {
  // check selected date is greater than current date or not

  let todays_date = new Date();

  let d1 = DATE_FORMAT(todays_date);

  let d2 = DATE_FORMAT(date);

  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  return date1 <= date2;
};

export const LOCAL_STORAGE_SET = (fileName, fileData) => {
  // Store the object into storage
  localStorage.setItem(fileName, JSON.stringify(fileData));
};

export const LOCAL_STORAGE_GET = (fileName) => {
  // get the object from local storage
  return localStorage.getItem(fileName);
};

export const LOCAL_STORAGE_REMOVE = (fileName) => {
  // remove specific  local storage
  localStorage.removeItem(fileName);
};
