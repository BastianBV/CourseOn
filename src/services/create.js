import { URL_API } from "../services/base";

export const createCourse = async (data, values, token) => {
  const formData = new FormData();
  formData.append("Image", data.imgBanner);
  formData.append("Image", data.imgMinature);
  formData.append("title", values.title);
  const response = await fetch(`${URL_API}/courses`, {
    method: "POST",
    headers: {
      userTok: `${token}`,
    },
    body: formData,
  });
  const responseData = await response.json();
  return responseData;
};

export const updtaeCourse = async (id, data) => {
  const response = await fetch(`${URL_API}/courses/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return responseData.user;
};

export const getCourse = async () => {
  const response = await fetch("http://localhost:8080/courses/");
  const data = await response.json();
  return data.posts;
};

export const getCourseId = async (id) => {
  const response = await fetch(`http://localhost:8080/courses/${id}`);
  const data = await response.json();
  return data.posts;
};

export const getPost = async () => {
  const response = await fetch("http://localhost:8080/courses/");
  const data = await response.json();
  return data.posts;
};

export const eraseCourse = async (id, token) => {
  const response = await fetch(`http://localhost:8080/courses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData = await response.json();
  return responseData;
};
