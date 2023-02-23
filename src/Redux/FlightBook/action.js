import { BOOKFLIGHT, DELETEFLIGHT } from "./actionTypes";

export const bookFlight = (bookingData) => {
  return {
    type: BOOKFLIGHT,
    payload: bookingData,
  };
};

export const deleteFlight = (id) => {
    console.log(id);
  return {
    type: DELETEFLIGHT,
    payload: id,
  };
};
