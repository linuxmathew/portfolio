// Capitalize first letter of an arran
export const capitalizeArray = (arr) => {
  return arr.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
};
