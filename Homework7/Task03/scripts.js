document
  .getElementById("get_data_btn")
  .addEventListener("click", getUsersFromBothAPIs);

async function getUsersFromBothAPIs() {
  try {
    const [fakeStoreResponse, jsonPlaceholderResponse] = await Promise.all([
      fetch("https://fakestoreapi.com/users"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ]);

    if (!fakeStoreResponse.ok || !jsonPlaceholderResponse.ok) {
      console.log("Request failed");
    }

    const fakeStoreUsers = await fakeStoreResponse.json();
    const jsonPlaceholderUsers = await jsonPlaceholderResponse.json();

    displayUsers(fakeStoreUsers, jsonPlaceholderUsers);
  } catch (error) {
    console.log("Error occured:", error);
  }
}

function displayUsers(fakeStoreUsers, jsonPlaceholderUsers) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";

  const fakeStoreHeader = document.createElement("h3");
  fakeStoreHeader.textContent = "Data from FakeStoreAPI";
  userList.appendChild(fakeStoreHeader);
  fakeStoreUsers.forEach((user) => {
    const userItem = document.createElement("div");
    userItem.className = "user-item";
    userItem.innerHTML = `
          <p><b>ID:</b> ${user.id}</p>
          <p>Name: ${user.name.firstname} ${user.name.lastname}</p>
          <p>Email: ${user.email}</p>
          <p>Username: ${user.username}</p>
      `;
    userList.appendChild(userItem);
  });

  const jsonPlaceholderHeader = document.createElement("h3");
  jsonPlaceholderHeader.textContent = "Data from JSONPlaceholderAPI";
  userList.appendChild(jsonPlaceholderHeader);
  jsonPlaceholderUsers.forEach((user) => {
    const userItem = document.createElement("div");
    userItem.className = "user-item";
    userItem.innerHTML = `
          <p><b>ID:</b> ${user.id}</p>
          <p>Name: ${user.name}</p>
          <p>Email: ${user.email}</p>
          <p>Username: ${user.username}</p>
      `;
    userList.appendChild(userItem);
  });
}
