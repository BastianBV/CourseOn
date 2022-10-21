import { React, useState } from "react";
// import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import CustomButton from "../Buttons/CustomButton";
import CustomInput from "../Inputs/CustomInput";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import DropImage from "../DropzoneImage/DropImage";

const CreateCourse = () => {
  const [ImagePrevious, setImagesPrevious] = useState(null);
  const [ImageStates, setImageStates] = useState(null);

  const imageChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImageStates(e.target.result);
    };
  };
  const changeImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImagesPrevious(e.target.result);
    };
  };

  return (
    <>
      <Avatar
        src={ImagePrevious}
        sx={{
          minWidth: 320,
          minHeight: 149,
          borderRadius: 10,
          "@media (min-width: 768px)": { width: 759, height: 250, top: 0 },
        }}
      />
      <DropImage onChange={changeImage} ImagePrevious={ImagePrevious} />
      <Box>
        <Paper
          elevation={3}
          sx={{
            background: "#282c34",
            height: 400,
            p: 5,
            opacity: 0.5,
            "@media (max-width:768px)": { width: 280 },
          }}
        >
          <CustomInput text="Nombre del curso" type="text" name={"title"} />
          <CustomInput
            text="Descripcion del curso"
            type="text"
            name={"courseDescription"}
          />
          <CustomInput text="Introduccion" type="text" name={"course"} />
          <Avatar
            src={ImageStates}
            sx={{ width: 315, height: 171, borderRadius: 5, mr: 0 }}
          />
          <DropImage onChange={imageChange} ImagePrevious={ImageStates} />
        </Paper>
      </Box>
      <div>
        <CustomButton
          text="Guardar Cambios"
          type="button"
          className="buttonGoogle"
        />
        <CustomButton
          text="Agregar Unidad"
          type="button"
          className="buttonGoogle"
        />
        <input
          type="file"
          name="file"
          accept="file/*"
          onChange={(e) => changeImage(e)}
        />
      </div>
    </>
  );
};

export default CreateCourse;
