const getFeelsLike = (temp: number, feelLikeTemp: number): string => {
  if (temp < feelLikeTemp) {
    return "warmer";
  }
  if (temp > feelLikeTemp) {
    return "Cooler";
  }
  return "Normal";
};

export default getFeelsLike;
