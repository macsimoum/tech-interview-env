const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log("0");
fetchPromise.then(response => {
  console.log("1",response.json().then(data => console.log("3")));
  console.log("2")
} );
console.log("4")

