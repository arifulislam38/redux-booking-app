import { BOOKFLIGHT, DELETEFLIGHT } from "./actionTypes";

const initialState = {
  bookingData: [],
};

const bookingReducer = (state = initialState, action) => {


  if (action.type === BOOKFLIGHT) {
    return {
      ...state,
      bookingData: [...state.bookingData, action.payload],
    };
  } 
  
  else if (action.type === DELETEFLIGHT) {
    return {
      ...state,
      bookingData: [...state.bookingData].filter((bt) => bt.id !== action.payload),
    };
  }
  
  return state;
};

export default bookingReducer;
