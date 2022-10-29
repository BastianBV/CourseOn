import { URL_API } from "../services/base";

export const getUserInfo = async (userId) => {
  const response = await fetch(`${URL_API}/users/${userId}`);
  return await response.json();
};

export const getCourseInfo = async (courseId) => {
  const response = await fetch(`${URL_API}/courses/${courseId}`);
  return await response.json();
};
