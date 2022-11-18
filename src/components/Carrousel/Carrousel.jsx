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
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className={`${styles.conteiner}`}>
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
