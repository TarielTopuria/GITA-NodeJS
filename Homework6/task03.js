async function getUsers(url, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) console.log("Request failed");
      return await response.json();
    } catch (e) {
      console.log(`Attempt ${i + 1}: ${e.message}. Retrying...`);
    }
  }
  console.log("All retry attempts failed!");
}

getUsers("https://jsonplaceholde.typicode.com", 5)
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
