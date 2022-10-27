import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Buttons/CustomButton";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import styles from "./CoursePreviews.module.scss";
import Title from "./Title/Title";
import SubTitle from "./Title/SubTitle";
const CoursePreview = () => {
  // const [courseInfo, setCourseInfo] = useState();

  // useEffect(() => {
  //   const fetchCourse = async () => {
  //     const course = await getCourseInfo();
  //     setCourseInfo(course.data.name)
  //     console.log(course);
  //   };
  //   fetchUser();
  // }, []);
  return (
    <>
      {/* <Title text={courseInfo}/> */}

      <SubTitle text="Unidad 1: Introducción" />
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus, cum eum? Aperiam praesentium, laudantium accusamus,
            adipisci perferendis saepe expedita voluptates exercitationem ea
            dolorem possimus inventore consequuntur quam iusto quo est.
          </Typography>
        </Paper>
      </Box>

      <div>
        <CustomButton
          className={"buttonSesion"}
          style={{ width: 400, marginBottom: 60 }}
          text="Suscribirse"
          type="submit"
        />
      </div>
    </>
  );
};

export default CoursePreview;
