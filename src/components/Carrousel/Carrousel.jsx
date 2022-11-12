import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Carrousel/carrousel.module.scss";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { getAllCourseInfo } from "../../services/getInfo";
import { CoverageMap } from "istanbul-lib-coverage";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
const Carrousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const getCourseInfo = async () => {
      return getAllCourseInfo();
    };
    getCourseInfo().then((result) => {
      setCourse(result.allCourses);
    });
  }, []);
  console.log(course.length);
  if (!course.length) {
    return "cargando...";
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 1024, min: 720 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 720, min: 320 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };
  // const card = [{
  //     imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  // }]
  // const maxSteps = card.length;
  return (
    <div className={`${styles.conteiner}`}>
      {/* {course.length && (
        <MobileStepper
          variant="dots"
          steps={course.length}
          position="static"
          activeStep={activeStep}
          sx={{
            maxWidth: 2560,
            minWidth: 320,
            flexGrow: 1,
            padding: 0,
            background: "none",
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === course?.length}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      )} */}

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        renderButtonGroupOutside={true}
      >
        {/* <div className={`${styles.carrousel}`}> */}
        {course.map((info) => {
          return (
            <article
              key={info.id}
              onClick={() => navigate(`/coursePreviews/${info.id}`)}
              style={{
                backgroundImage: `url(${info.imgBanner})`,
                backgroundSize: "cover",
              }}
              className={`${styles.card}`}
            ></article>
          );
        })}
        {/* </div> */}
      </Carousel>
    </div>
  );
};

export default Carrousel;
