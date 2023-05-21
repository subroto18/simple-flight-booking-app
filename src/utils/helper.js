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
