export const createAccount = async (name, email, password) => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name, email, password }),
    });
  
    return await response.json();
  };