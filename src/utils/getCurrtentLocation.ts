export const getCurrentLocation = (
  setLocation: (coords: { latitude: number; longitude: number }) => void
) => {
  navigator.geolocation.getCurrentPosition((success) => {
    setLocation(success.coords);
  });
};
