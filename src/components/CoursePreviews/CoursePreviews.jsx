import { React, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CustomButton from "../Buttons/CustomButton";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import styles from "./CoursePreviews.module.scss";
import Title from "./Title/Title";
import SubTitle from "./Title/SubTitle";
import { useParams } from "react-router-dom";
import { getCourseInfo } from "../../services/getInfo";
import { Modal } from "@mui/material";
import ModalSubs from "../Modal/ModalPay";

const CoursePreview = () => {
  const { courseId } = useParams();

  const [course, setCourse] = useState({});
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const getCourse = async () => {
      return getCourseInfo(courseId);
    };
    getCourse().then((result) => {
      setCourse(result.courseById);
    });
  }, []);

  if (!course) {
    return;
  }
  return (
    <>
      <Title text={course.title} />
      <SubTitle text="" />
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
            height: 380,
            mt: 3,
            p: 2,
            opacity: 0.5,
            width: 600,
            "@media (max-width:768px)": { width: 222, height: 600 },
          }}
        >
          <img style={{ width: 500, height: 200 }} src={course.imgMinature} />
          <Typography sx={{ fontSize: 15 }} color="white" gutterBottom>
            {course.description}
          </Typography>
        </Paper>
      </Box>

      <div>
        <CustomButton
          className={"buttonSesion"}
          style={{ width: 400, marginBottom: 60 }}
          text="Suscribirse"
          type="submit"
          onClick={() => setModal(true)}
        />
        <ModalSubs modal={modal} modalClose={() => setModal(false)} />
      </div>
    </>
  );
};

export default CoursePreview;
