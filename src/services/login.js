import { URL_API } from '../services/base'

export const loginAccount = async (email, password) => {
  const response = await fetch(`${URL_API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return await response.json();
};
