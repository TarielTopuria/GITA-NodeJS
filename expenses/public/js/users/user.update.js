const form = document.querySelector(".user-update");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = form.id.value;
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const age = form.age.value;
  const email = form.mail.value;
  const description = form.description.value;

  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        age,
        email,
        description,
      }),
    });

    if (res.ok) {
      window.location.href = "http://localhost:3000/api/users/";
    } else {
      const error = await res.json();
      console.error(error.message);
      alert(`Error: ${error.message}`);
    }
  } catch (err) {
    console.error("Network error:", err);
    alert("An error occurred while updating the user.");
  }
});
