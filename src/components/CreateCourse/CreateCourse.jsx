import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CustomButton from "../Buttons/CustomButton";
import CustomInput from "../Inputs/CustomInput";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import DropImage from "../Dropzone/DropImage";
import DropFile from "../Dropzone/DropFile";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import ModalUrl from "../Modal/ModalUrl";
import { createCourse } from "../../services/create";

const initialValues = {
  course: "",
  title: "",
  description: "",
  unitName: "",
};
const CreateCourse = () => {
  const [ImagePrevious, setImagesPrevious] = useState(null);
  const [ImageStates, setImageStates] = useState(null);
  const [FilesStates, setFilesStates] = useState(null);
  const [imagePreview, setImagePreviewFile] = useState();
  const [imageBanner, setBannerPreviewFile] = useState();
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      imgBanner: imageBanner,
      imgMinature: imagePreview,
    };

    try {
      const result = await createCourse(
        data,
        values,
        localStorage.getItem("userTok")
      );
      console.log("createAccount", result);
      if (!result) setError("Error al crear contenido");
      navigate(`/forms/${result.newCourse.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const imageChange = (e) => {
    setBannerPreviewFile(e.target.files[0]);

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImageStates(e.target.result);
    };
  };
  const changeImage = (e) => {
    setImagePreviewFile(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImagesPrevious(e.target.result);
    };
  };
  const fileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setFilesStates(e.target.result);
    };
  };
  return (
    <>
      <Box>
        <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
          Agrega una imagen para tu banner
        </Typography>

        <Avatar
          src={ImagePrevious}
          sx={{
            minWidth: 320,
            minHeight: 149,
            borderRadius: 10,
            "@media (min-width: 768px)": { width: 759, height: 250, top: 0 },
          }}
        />
        <DropImage
          onChange={changeImage}
          ImagePrevious={ImagePrevious}
          name="bannerImage"
        />
        <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
          Agrega una imagen para tu miniatura
        </Typography>

        <Avatar
          src={ImageStates}
          sx={{
            minWidth: 223,
            height: 171,
            borderRadius: 5,
            mr: 0,
            "@media (min-width: 768px)": { width: 240 },
          }}
        />
        <DropImage onChange={imageChange} ImagePrevious={ImageStates} />

        <form>
          <Box>
            <Paper
              elevation={3}
              sx={{
                background: "#282c34",
                height: 400,
                mt: 3,
                p: 5,
                opacity: 0.5,
                width: 800,
                "@media (max-width:768px)": { width: 222, height: 600 },
              }}
            >
              <Grid container spacing={5} columns={16}>
                <Grid>
                  <CustomInput
                    text="Nombre del curso"
                    type="text"
                    name={"title"}
                    value={values?.title}
                    onChange={handleChange}
                  />
                </Grid>
                {/* <Grid>
                  <CustomInput
                    text="Introduccion"
                    type="text"
                    name={"course"}
                    value={values?.course}
                    onChange={handleChange}
                  />
                </Grid> */}
                <Grid>
                  <CustomInput
                    text="Descripcion del curso"
                    type="text"
                    name={"description"}
                    value={values?.description}
                    onChange={handleChange}
                    style={{ height: 200, maxWidth: 276, minWidth: 186 }}
                  />
                </Grid>
                {/* <Grid lg={8}>
                  <CustomInput
                    text="Unidad"
                    type="text"
                    name={"unitCourse"}
                    value={values?.unitCourse}
                    onChange={handleChange}
                    style={{ top: -399, left: 439 }}
                  />
                </Grid> */}
              </Grid>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>Contenido de unidad</Typography>
            <Paper
              elevation={3}
              sx={{
                background: "#282c34",
                height: 60,
                mt: 3,
                p: 5,
                opacity: 0.5,
                width: 400,
                display: "flex",
                jsutifyContent: "center",
                "@media (max-width:768px)": { width: 222 },
              }}
            >
              <DropFile onChange={fileUpload} FilesStates={FilesStates} />
              {/* <ModalUrl/> */}
            </Paper>
          </Box>
          <div>
            <CustomButton
              text="Guardar Cambios"
              type="submit"
              className="buttonGoogle"
              onClick={handleSubmit}
            />
            <CustomButton
              text="Agregar Formulario"
              type="button"
              className="buttonGoogle"
              onClick={() => navigate("/forms")}
            />
          </div>
        </form>
      </Box>
    </>
  );
};

export default CreateCourse;
