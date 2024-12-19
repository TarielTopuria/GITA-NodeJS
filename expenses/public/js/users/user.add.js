const form = document.querySelector(".user-create");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const age = form.age.value;
  const email = form.mail.value;
  const description = form.description.value;

  const res = await fetch("http://localhost:3000/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: email,
      description: description,
    }),
  });

  if (res.status === 201) {
    window.location.href = "http://localhost:3000/api/users/";
  }
});
