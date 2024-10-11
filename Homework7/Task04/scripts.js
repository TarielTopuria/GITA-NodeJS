function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function logMouseCoordinates(event) {
  console.log(`Mouse coordinates are: (${event.clientX}, ${event.clientY})`);
}

const debouncedLogMouseCoordinates = debounce(logMouseCoordinates, 500);

document.addEventListener("mousemove", debouncedLogMouseCoordinates);
