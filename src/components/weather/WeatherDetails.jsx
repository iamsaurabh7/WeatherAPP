import React, { useState } from "react";
import { Box, Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getLocationByCity } from "../../redux/weatherApp/weather.action";

function WeatherDetails({ onCitySearch }) {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const weatherInfo = useSelector((store) => store.location.weatherInfo);
  // console.log(weatherInfo);
  const handleCitySearch = async () => {
    await dispatch(getLocationByCity(city));
    onCitySearch(city); // pass the city to the parent component
    setCity(""); //clear city field
    console.log(city);
  };
  let info;
  if (weatherInfo && weatherInfo.name) {
    info = {
      city: weatherInfo.name,
      lat: weatherInfo.coord.lat,
      lon: weatherInfo && weatherInfo.coord && weatherInfo.coord.lon,
      temp: weatherInfo.main.temp,
      weather: weatherInfo.weather[0].main,
      windSpeed: weatherInfo.wind.speed,
      visibility: weatherInfo.visibility,
    };
  }
  const celsiusTemperature = info && (info.temp - 273.15).toFixed(2);
  const fahrenheitTemperature =
    info && ((celsiusTemperature * 9) / 5 + 32).toFixed(2);
  return (
    <Box
      bg={"gray.700"}
      width={["100%", "100%", "100%", "400px"]}
      p={4}
      border={"2px"}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Stack spacing="3">
        <Heading color="white" size="md">
          Location: {(info && info.city) || "India"}
        </Heading>
        <Text color="white">
          Coordinates: {info && info.lat + " ,"} {info && info.lon}
        </Text>
        <Input
          placeholder="Enter city or state"
          size="lg"
          color={"white"}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          onClick={handleCitySearch}
          variant="solid"
          colorScheme="blue"
          size="lg"
        >
          Get Weather
        </Button>
        <Box>
          <Text color="white">
            Temperature: {celsiusTemperature}°C / {fahrenheitTemperature}°F
          </Text>

          <Text color="white">Weather type : {info && info.weather}</Text>
          <Text color="white">
            Visibility : {info && info.visibility / 1000 + " km"}
          </Text>

          <Text color="white">
            Wind speed : {info && info.windSpeed + " km/h"}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default WeatherDetails;
