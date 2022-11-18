import { URL_API } from "../services/base";

export const getFormById = async (formId) => {
  const response = await fetch(`${URL_API}/forms/${formId}`);
  return await response.json();
};

export const createForm = async (
  questions,
  title,
  answers,
  text,
  isCorrect,
  answers2,
  text2,
  isCorrect2,
  answers3,
  text3,
  isCorrect3
) => {
  const response = await fetch(`${URL_API}/forms`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      questions,
      title,
      answers,
      text,
      isCorrect,
      answers2,
      text2,
      isCorrect2,
      answers3,
      text3,
      isCorrect3,
    }),
  });

  return await response.json();
};
