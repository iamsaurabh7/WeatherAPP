import React, { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import WeatherDetails from "./WeatherDetails";
import GMap from "./GMap";
import {
  getLocationByCoordinate,
  getLocationByCity,
} from "../../redux/weatherApp/weather.action";
import { useDispatch } from "react-redux";

function WeatherCard() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [newCity, SetNewCity] = useState("");

  const currentLocation = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
  };

  useEffect(() => {
    // Fetch current location on page load
    navigator.geolocation.getCurrentPosition(currentLocation);
  }, []);

  useEffect(() => {
    // Fetch weather details based on current location
    if (location) {
      dispatch(getLocationByCoordinate(location));
    }
  }, [location]);

  const handleCitySearch = (cityN) => {
    // Fetch weather details based on the searched city
    SetNewCity(cityN);
    dispatch(getLocationByCity(cityN));
  };

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={10}
      alignItems="center"
      justifyContent="space-around"
      bg="#171923"
      m={0}
    >
      <Box>
        <GMap
          latitude={location?.latitude}
          longitude={location?.longitude}
          city={newCity}
        />
      </Box>
      <Box>
        <WeatherDetails onCitySearch={handleCitySearch} />
      </Box>
    </SimpleGrid>
  );
}

export default WeatherCard;
