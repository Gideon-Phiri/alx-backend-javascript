function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      resolve('API response received');
    }, 1000);
  });
}
export default getResponseFromAPI;
