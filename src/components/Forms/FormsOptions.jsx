import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import CustomInput from "../Inputs/CustomInput";
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
    {
      title: "¿Que es Kodemia?",
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
const Forms = (option) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("values", values);
      // const result = await createForm(values, localStorage.getItem("userTok"));
      // if (!result) setError("Error al crear contenido");
      // console.log("result", result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log("target value", e.target.name);
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
        <Typography>Opcion multiple</Typography>
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
          <Typography>Pregunta</Typography>
          <CustomInput
            text="Titulo de pregunta"
            name={"title"}
            value={values?.questions.title}
            type="text"
            onChange={handleChange}
          />
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
            <Typography>Opcion 1</Typography>

            <CustomInput
              text="Introduce la opción"
              name={"text"}
              value={values?.answers.text}
              type="text"
              onChange={handleChange}
            />
            <InputLabel id="demo-simple-select-label">Valor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name={"isCorrect"}
              value={values?.answers.isCorrect}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
            {/* <CustomInput
              text="Valor"
              value={values?.questions.answers.isCorrect}
              type="text"
              onChange={handleChange}
            /> */}
          </Paper>
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
            <Typography>Opcion 2</Typography>

            <CustomInput
              text="Introduce la opción"
              value={values?.answers2.text2}
              type="text"
              name={"text"}
              onChange={handleChange}
            />
            <InputLabel id="demo-simple-select-label">Valor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name={"isCorrect"}
              value={values?.answers2.isCorrect2}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
          </Paper>
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
            <Typography>Opcion 3</Typography>

            <CustomInput
              text="Introduce la opción"
              value={values?.answers3.text3}
              type="text"
              name={"text"}
              onChange={handleChange}
            />
            <InputLabel id="demo-simple-select-label">Valor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name={"isCorrect"}
              value={values?.answers3.isCorrect3}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
          </Paper>
          <CustomButton
            text="Guardar Cambios"
            type="submit"
            className="buttonGoogle"
            onClick={handleSubmit}
          />
        </Paper>
      </Box>
    </>
  );
};

export default Forms;
