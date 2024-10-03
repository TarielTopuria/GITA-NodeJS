function fetchFakeData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = {
        name: "Tato Topuria",
        age: 27,
        job: "Software Developer",
        city: "Tbilisi",
        country: "Georgia",
      };
      res(JSON.stringify(data));
    }, 3000);
  });
}

async function getDataAsync() {
  try {
    const data = await fetchFakeData();
    console.log(`Fetched data from first method: ${data}`);
  } catch (e) {
    console.error("Error occured while fetching data:", e);
  }
}

function getDataThenCatch() {
  fetchFakeData()
    .then((data) => {
      console.log(`Fetched data from second method: ${data}`);
    })
    .catch((e) => {
      console.error("Error occured while fetching data:", e);
    });
}

getDataAsync();
getDataThenCatch();
