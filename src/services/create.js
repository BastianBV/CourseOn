export const create = async (data,token) => {
    const response = await fetch("http:localhost:8080/courses", {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    const responseData = await response.json();
    return responseData.user;
}

export const updtaeCourse = async (id, data) => {
  const response = await fetch(`http://localhost:8080/courses/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return responseData.user;
};