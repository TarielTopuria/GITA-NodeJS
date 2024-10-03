async function getResponse() {
  const firstData = fetch("https://dummyjson.com/users").then((res) =>
    res.json()
  );
  const secondData = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  return Promise.race([firstData, secondData]);
}

getResponse()
  .then((data) => console.log("Response:", data))
  .catch((e) => console.log("Error:", e));
