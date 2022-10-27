import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomButton from "../Buttons/CustomButton";
import Title from "../CoursePreviews/Title/Title";

const CourseTest = () => {
  return (
    <>
      <Title text="Prueba de Unidad 1" />

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
          <Typography sx={{ fontSize: 15 }} color="white" gutterBottom>
            Nota: No podrás regresar a las preguntas anteriores. Tienes #
            intentos para la prueba. La prueba dura # horas Cuando inices la
            prueba comienza el primer intento
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

export default CourseTest;
