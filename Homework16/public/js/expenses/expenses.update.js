const form = document.querySelector(".expense-update");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = form.id.value;
  const type = form.type.value;
  const cost = form.cost.value;
  const quantity = form.quantity.value;

  try {
    const res = await fetch(`http://localhost:3000/api/expenses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,
        cost,
        quantity,
      }),
    });

    if (res.ok) {
      window.location.href = "http://localhost:3000/api/expenses/";
    } else {
      const error = await res.json();
      console.error(error.message);
      alert(`Error: ${error.message}`);
    }
  } catch (err) {
    console.error("Network error:", err);
    alert("An error occurred while updating the expense.");
  }
});
