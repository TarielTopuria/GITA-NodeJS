function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

async function getProducts(query) {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?title=${query}`
    );
    if (!response.ok) {
      console.log("Network problem occured!");
    }
    const products = await response.json();
    displayResults(products);
  } catch (error) {
    console.log("Fetching error:", error);
  }
}

const debouncedSearch = debounce((event) => {
  const query = event.target.value.trim();
  if (query.length > 0) {
    getProducts(query);
  } else {
    document.getElementById("results").innerHTML = "";
  }
}, 100);

function displayResults(products) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (products.length === 0) {
    resultsDiv.innerHTML = "<p>No Result.</p>";
    return;
  }

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.className = "product-item";
    productItem.innerHTML = `
          <p>${product.title} - ${product.price} USD</p>`;
    resultsDiv.appendChild(productItem);
  });
}

document
  .getElementById("search-input")
  .addEventListener("input", debouncedSearch);
