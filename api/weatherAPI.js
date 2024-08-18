import axios from "axios";
import { API_KEY } from "@env";

export const fetchWeatherData = async (latitude, longitude) => {
  try {
    const apiKey = API_KEY;
    console.log(apiKey); // Replace with your API key
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json`,
      {
        params: {
          key: apiKey,
          q: `Hanoi`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
};
