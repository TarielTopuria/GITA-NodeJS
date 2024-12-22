const handleDelete = async (id) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    method: "DELETE",
    headers: {
      "role": "admin",
      "api-key": "12345",
    },
  });

  if (res.status === 200) {
    window.location.href = "http://localhost:3000/api/users/";
  }
};


const createUser = () => {
  window.location.href = "http://localhost:3000/api/users/add/";
}