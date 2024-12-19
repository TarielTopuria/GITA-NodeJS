const handleDelete = async (id) => {
  console.log(id);
  const res = await fetch(`http://localhost:3000/api/expenses/${id}`, {
    method: "DELETE",
    headers: {
      role: "admin",
      "api-key": "12345",
    },
  });

  if (res.status === 200) {
    window.location.href = "http://localhost:3000/api/expenses/";
  }
};

const createExpense = () => {
  window.location.href = "http://localhost:3000/api/expenses/add/";
};
