function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sleepDemonstration() {
  console.log("first");
  await sleep(2000);
  console.log("second");
}

sleepDemonstration();
