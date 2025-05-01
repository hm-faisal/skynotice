export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success.coords);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
