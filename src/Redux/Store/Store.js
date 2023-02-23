import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookingReducer from "../FlightBook/reducer";
import { flightCounter } from "../middleware/flightCounter";
// import bookingReducer from "../FlightBook/reducer";
const store = createStore(
  bookingReducer,
  composeWithDevTools(applyMiddleware(flightCounter))
);

export default store;
