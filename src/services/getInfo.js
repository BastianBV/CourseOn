export const getUserInfo = async () => {
  const response = await fetch(`http://localhost:8080/auth/user`, {
    headers: { userTok: localStorage.getItem("token") },
  });
  return await response.json();
};
