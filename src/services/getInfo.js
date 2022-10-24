import { URL_API } from '../services/base'

export const getUserInfo = async () => {
  const response = await fetch(`${URL_API}/auth/user`, {
    headers: { userTok: localStorage.getItem("token") },
  });
  return await response.json();
};
