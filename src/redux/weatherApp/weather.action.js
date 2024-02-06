import axios from "axios";
import { GET_LOCATION_CITY, GET_LOCATION_CORDINATE } from "./weather.type";
const API_BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getLocationByCoordinate =
  ({ latitude, longitude }) =>
  async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      // console.log("action : ", response.data);
      dispatch({ type: GET_LOCATION_CORDINATE, payload: response.data });
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

export const getLocationByCity = (city) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}?q=${city}&appid=${API_KEY}`
    );
    // console.log("action : ", response.data);
    dispatch({ type: GET_LOCATION_CITY, payload: response.data });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
