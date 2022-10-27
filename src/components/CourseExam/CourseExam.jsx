import { Paper, Typography } from "@mui/material";
import { Box, typography } from "@mui/system";
import CustomButton from "../Buttons/CustomButton";
import SubTitle from "../CoursePreviews/Title/SubTitle";
import Title from "../CoursePreviews/Title/Title";

const CourseExam = () => {
  return (
    <>
      <Title text="Prueba de Unidad 1" />
      <SubTitle text="10 h - Pregunta #/#" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alingItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            background: "#282c34",
            height: 300,

            mt: 3,
            p: 5,
            opacity: 0.5,
            width: 600,
            "@media (max-width:768px)": { width: 222, height: 600 },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              background: "Aqua",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              ml: 6,
              opacity: 0.5,
              width: 500,
              "@media (max-width:768px)": { width: 222, height: 600 },
            }}
          >
            <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
              Instrucciones: Selecciona la(s) respuesta(s) correctas
            </Typography>
          </Paper>
          <Typography sx={{ fontSize: 15, mt: 2 }} color="white" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem consectetur deleniti fuga, dolores natus a non
            maxime, quisquam mollitia neque odio perspiciatis? Tenetur minus
            quas consectetur nostrum corrupti soluta! Modi?
          </Typography>

          <Typography sx={{ fontSize: 15, mt: 2 }} color="white" gutterBottom>
            ♦ Revolver las opciones cuando se despliegue la prueba
          </Typography>
        </Paper>
      </Box>

      <div>
        <CustomButton
          className={"buttonSesion"}
          style={{ width: 400, marginBottom: 60 }}
          text="Continuar"
          type="submit"
        />
      </div>
    </>
  );
};

export default CourseExam;
