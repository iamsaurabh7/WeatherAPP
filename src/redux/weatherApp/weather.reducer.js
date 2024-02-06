import { GET_LOCATION_CITY, GET_LOCATION_CORDINATE } from "./weather.type";

const initialState = {
  coordinate: null,
  city: "",
  weatherInfo: {},
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATION_CORDINATE:
      // console.log("payload", action.payload);
      return {
        ...state,
        coordinate: action.payload,
        weatherInfo: action.payload,
      };
    case GET_LOCATION_CITY:
      return {
        ...state,
        city: action.payload,
        weatherInfo: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
