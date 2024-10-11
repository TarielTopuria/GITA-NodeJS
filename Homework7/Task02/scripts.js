document.getElementById("get_data_btn").addEventListener("click", getUsers);

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      console.log("Network response was not ok");
    }
    const users = await response.json();

    const parsedUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    }));

    console.log('Retrieved Data: ', parsedUsers);
  } catch (error) {
    console.log("There has been a problem with your fetch operation:", error);
  }
}
