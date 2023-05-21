export const getFlightSearchResult = (
  flightData,
  departureFrom,
  departureTo
) => {
  let searchFlightResult = flightData.filter((item) => {
    return (
      item.departure_from === departureFrom && item.departure_to === departureTo
    );
  });
  return searchFlightResult;
};
