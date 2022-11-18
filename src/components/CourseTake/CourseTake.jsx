import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseInfo } from "../../services/getInfo";
import SubTitle from "../CoursePreviews/Title/SubTitle";
import Title from "../CoursePreviews/Title/Title";

const CourseTake = () => {
  const { courseId } = useParams();
  console.log("courseID", useParams());
  const [course, setCourse] = useState({});

  useEffect(() => {
    const getCourse = async () => {
      return getCourseInfo(courseId);
    };
    getCourse().then((result) => {
      setCourse(result.courseById);
      console.log("course", result);
    });
  }, []);

  return (
    <>
      <Title />
      <SubTitle />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alingItems: "center",
        }}
      />
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
        <Typography sx={{ fontSize: 15 }} color="white" gutterBottom>
          {/* {course.description} */}
        </Typography>
      </Paper>
    </>
  );
};

export default CourseTake;
