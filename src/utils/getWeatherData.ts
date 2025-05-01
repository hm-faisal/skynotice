import axios from "axios";

interface Location {
  latitude?: number;
  longitude?: number;
  city?: string;
}
export const getWeather = (location: Location, BASE_URL: string) => {
  return new Promise((resolve, reject) => {
    if (location.latitude && location.longitude) {
      axios
        .get(`${BASE_URL}&lat=${location.latitude}&lon=${location.longitude}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    }

    axios
      .get(`${BASE_URL}&q=${location.city}`)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
