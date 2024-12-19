const form = document.querySelector(".expense-create");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const type = form.type.value;
  const cost = form.cost.value;
  const quantity = form.quantity.value;

  const res = await fetch("http://localhost:3000/api/expenses/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: type,
      cost: cost,
      quantity: quantity,
    }),
  });

  if (res.status === 201) {
    window.location.href = "http://localhost:3000/api/expenses/";
  }
});
