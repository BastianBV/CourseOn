import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import CustomInput from "../Inputs/CustomInput";
import { useParams } from "react-router-dom";
import { createForm } from "../../services/forms";
import { useNavigate } from "react-router";
import CustomButton from "../Buttons/CustomButton";
import { InputLabel, MenuItem, Select } from "@mui/material";

const initialValues = {
    questions: [
        {
            title: "",
            answers: [
                {
                    text: "",
                    isCorrect: false,
                },
                {
                    text: "",
                    isCorrect: false,
                },
                {
                    text: "",
                    isCorrect: false,
                },
            ],
        },
    ],
};

const newQuestion = {
  title: "",
  answers: [
      {
          text: "",
          isCorrect: false,
      },
      {
          text: "",
          isCorrect: false,
      },
      {
          text: "",
          isCorrect: false,
      },
  ],
}
const Forms = (option) => {
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { courseId } = useParams();

    const addQuestion = () => {
      const newValues = { ...values }
      newValues.questions.push(newQuestion)
      setValues(newValues)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("values", values);
            const result = await createForm(
                values,
                localStorage.getItem("userTok"),
                courseId
            );
            if (!result) setError("Error al crear contenido");
            navigate(`/coursePreviews/${courseId}`)
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e, property, questionIndex, answerIndex) => {
        const newValues = { ...values };
        const isQuestionTitle = property === "question";
        if (isQuestionTitle) {
            newValues.questions[questionIndex].title = e.target.value;
        } else {
            newValues.questions[questionIndex].answers[answerIndex][property] = e.target.value;
        }
        setValues(newValues);
    };
    return (
        <>
            <Typography>Prueba / Evaluavion</Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: 700,
                }}
            >
              {values.questions.map((question, questionIndex) => {
                return (
                  <Paper
                  sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 5,
                      width: 600,
                      mb: 4,
                      bgcolor: "#282c3491",
                  }}
              >
                  <Typography>Pregunta {questionIndex + 1}</Typography>
                  <CustomInput
                      text="Titulo de pregunta"
                      name={"title"}
                      value={values?.questions[questionIndex].title}
                      type="text"
                      onChange={(e) => handleChange(e, "question", questionIndex)}
                  />
                  {question.answers.map((answer, answerIndex) => {
                      return (
                          <>
                              <Paper
                                  sx={{
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      mb: 5,
                                      width: 400,
                                      p: 2,
                                      bgcolor: "#27272769",
                                  }}
                              >
                                  <Typography>Opcion {answerIndex + 1}</Typography>

                                  <CustomInput
                                      text="Introduce la opción"
                                      value={answer.text}
                                      type="text"
                                      name={"text"}
                                      onChange={(e) =>
                                          handleChange(e, "text", questionIndex, answerIndex)
                                      }
                                  />
                                  <InputLabel id="demo-simple-select-label">
                                      Valor
                                  </InputLabel>
                                  <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      name={"isCorrect"}
                                      value={answer.isCorrect}
                                      label="Age"
                                      onChange={(e) =>
                                          handleChange(e, "isCorrect", questionIndex, answerIndex)
                                      }
                                  >
                                      <MenuItem value={true}>True</MenuItem>
                                      <MenuItem value={false}>False</MenuItem>
                                  </Select>
                              </Paper>
                          </>
                      );
                  })}
              </Paper>
                )
              })}
               <CustomButton
                      text="Agregar otra pregunta"
                      type="submit"
                      className="buttonGoogle"
                      onClick={addQuestion}
                  />
                  <CustomButton
                      text="Guardar Cambios"
                      type="submit"
                      className="buttonGoogle"
                      onClick={handleSubmit}
                  />
            </Box>
        </>
    );
};

export default Forms;
