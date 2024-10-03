function promiseOne() {
  return new Promise((res, rej) => {
    setTimeout(() => res([1, 2, 3]), 1000);
  });
}

function promiseTwo() {
  return new Promise((res, rej) => {
    setTimeout(() => res([4, 5, 6]), 2000);
  });
}

function promiseThree() {
  return new Promise((res, rej) => {
    setTimeout(() => rej("Error"), 1500);
  });
}

async function mergeFulfilledArrays() {
  const promises = [promiseOne(), promiseTwo(), promiseThree()];

  try {
    const results = await Promise.allSettled(promises);
    const fulfilledArrays = results
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);

    const mergedArray = fulfilledArrays.flat();
    console.log("Merged arrays:", mergedArray);
  } catch (e) {
    console.error("Error arrays:", e);
  }
}

mergeFulfilledArrays();
