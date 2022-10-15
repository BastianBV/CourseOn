import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../Carrousel/carrousel.module.scss'
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const Carrousel = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    // const card = [{
    //     imgPath:'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
    // }]
    // const maxSteps = card.length;
  return (
    <div className={`${styles.conteiner}`}>
        <MobileStepper
      variant="dots"
      steps={1}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 2560, minWidth:320,flexGrow: 1, padding:0, background:'none' }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
      }
    />

           <div className={`${styles.carrousel}`}>
        <article className={`${styles.card}`}>
        <h1>Python</h1> 
        </article>
        <article className={`${styles.card}`}>
            <h1>Python</h1>
        </article>
        <article className={`${styles.card}`}>
            <h1>React Js</h1>
        </article>
        <article className={`${styles.card}`}>
            <h1>HTML</h1>
        </article>
        <article className={`${styles.card}`}>
            <h1>Css</h1>
        </article>
        <article className={`${styles.card}`}>
            <h1>SQL</h1>
        </article>
        <article className={`${styles.card}`}>
            <h1>NoSQL</h1>
        </article>
    </div> 
        
    </div>
  )
}

export default Carrousel