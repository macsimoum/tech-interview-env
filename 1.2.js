// The log statement "0" is executed synchronously.
// A new Promise is created to wrap the fetch request and immediately resolve it.
// The .then() method is chained to the Promise, which logs "1" and returns the fetchPromise.json() Promise.
// Another .then() block is chained to the Promise returned by fetchPromise.json(), which logs "3".
// If any errors occur during the Promise chain, the .catch() block will log the error.
// The .finally() block is executed regardless of whether the Promise chain was successful or encountered an error. It logs "2" and "4".

console.log("0");

new Promise((resolve) => {
  resolve(fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'));
})
  .then((fetchPromise) => {
    console.log("1");
    return fetchPromise.json();
  })
  .then((data) => {
    console.log("3");
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("2");
    console.log("4");
  });
