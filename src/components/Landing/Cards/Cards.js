import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "../Cards/cards.module.scss";
import { styled, createTheme } from "@mui/material/styles";
import { blueGrey, green } from "@mui/material/colors";
import CardMedia from '@mui/material/CardMedia';
import inferfaz from '../../images/interfaz.jpg'
import comunidad from '../../images/comunidad.jpg'
import preferencias from '../../images/preferencias.jpg'
import crea from '../../images/crea.png'

const customTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[700],
    },
  },
});
const secondaryTheme = createTheme({
  palette: {
    secondary: {
      main: green[200],
    },
  },
});

const StyledCard = styled(Card)`
  ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(["background-color", "transform"], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      background-color: ${secondaryTheme};
      transform: scale(1.2);
    }
    `}
`;

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Cards = () => {
  return (
    <div className={`${styles.containerCards}`}>
      <StyledCard>
        <Card
          sx={{ maxWidth:400 }}
          theme={customTheme}
          className={`${styles.card}`}
        >
           <CardMedia
          component="img"
          height="140"
          image={`${inferfaz}`}
          alt=""
        />
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
              Disfruta de una gran interfaz
            </Typography>
            <Typography variant="h5" component="div">
              Aprende{bull}Crea{bull}Comparte
            </Typography>
            <Typography variant="body2">
              Aqui es donde comienza todo
              <br />
              {'"Se parte de lo que te ofrece CourseOn"'}
            </Typography>
          </CardContent>
        </Card>
      </StyledCard>
      <StyledCard>
        <Card
          sx={{ maxWidth: 300}}
          theme={customTheme}
          className={`${styles.card}`}
        >
          <CardMedia
          component="img"
          height="140"
          image={`${comunidad}`}
          alt=""
        />
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
              Creando una comunidad
            </Typography>
            <Typography variant="body2">
              Conoce a personas de todas partes
              <br />
              {'"Hagamos una comunidad donde aprendamos juntos"'}
            </Typography>
          </CardContent>
        </Card>
      </StyledCard>
      <StyledCard>
        <Card sx={{ maxWidth: 300 }}
          theme={customTheme}
          className={`${styles.card}`}>
             <CardMedia
          component="img"
          height="140"
          image={`${preferencias}`}
          alt=""
        />
          <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
         Aqui encontras lo que se ajuste a tu preferencia
            </Typography>
            <Typography variant="body2">
              Entra a un mundo de posibilidades 
              <br />
              {'"La vida es un misterio; la luz ciega y la verad inaccesible asombra"'}
            </Typography>
          </CardContent>
        </Card>
      </StyledCard>
      <StyledCard>
        <Card sx={{ maxWidth: 300 }}
          theme={customTheme}
          className={`${styles.card}`}>
             <CardMedia
          component="img"
          height="140"
          image={`${crea}`}
          alt=""
        />
            <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
            Crea lo que imagines
            </Typography>
            <Typography variant="body2">
              El limite lo pones tu 
              <br />
              {'"Existe un lenguaje que va más allá de las palabras"'}
            </Typography>
            </CardContent>
        </Card>
      </StyledCard>
    </div>
  );
};

export default Cards;
