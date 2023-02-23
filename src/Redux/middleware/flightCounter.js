import { BOOKFLIGHT } from "../FlightBook/actionTypes";

export const flightCounter = (store) => (next) => (action) => {
  const state = store.getState();
  if (action.type === BOOKFLIGHT) {
    const newBook = {
      ...action,
      payload: { ...action.payload, id: state.bookingData.length },
    };
    return next(newBook);
  }

  return next(action);
};
