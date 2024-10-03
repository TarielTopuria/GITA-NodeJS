import fetch from "node-fetch";

async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
  } catch (e) {
    console.log("Error while fetching users:", e);
  }
}

getUsers().then((users) => console.log(users));
