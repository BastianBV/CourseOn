import { URL_API } from "../services/base";

export const getFormById = async (formId) => {
    const response = await fetch(`${URL_API}/forms/${formId}`);
    return await response.json();
};

export const createForm = async (values, token, courseId) => {
    values.courseId = courseId
    const response = await fetch(`${URL_API}/forms`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
    });

    return await response.json();
};
