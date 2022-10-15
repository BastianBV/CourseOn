import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "../Cards/cards.module.scss";
import { styled, createTheme } from "@mui/material/styles";
import { blueGrey, green } from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";
import inferfaz from "../../images/interfaz.jpg";
import comunidad from "../../images/comunidad.jpg";
import preferencias from "../../images/preferencias.jpg";
import crea from "../../images/crea.png";
import Grid from '@mui/material/Grid';


const customTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
  },
});

const StyledCard = styled(Card)`
  ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.success.dark};
    transition: ${theme.transitions.create(["background-color", "transform"], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      background-color: '#4AD06F';
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
    <div >
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <StyledCard>   
        <Card
            sx={{
              maxWidth: 400,
              backgroundColor: "9ea9b1",
              opacity: 0.7,
              height: 290,
            }}
            theme={customTheme}
          >
            <CardMedia
              component="img"
              height="140"
              image={`${inferfaz}`}
              alt=""
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.primary"
                gutterBottom
              >
                Disfruta de una gran interfaz
              </Typography>
              <Typography variant="h7" component="div">
                Aprende{bull}Crea{bull}Comparte
              </Typography>
              <Typography variant="h9">Aqui es donde comienza todo</Typography>
              <Typography variant="caption">
                <br />
                ¡Se parte de lo que te ofrece CourseOn!
              </Typography>
            </CardContent>
          </Card>   
        </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledCard>
          <Card
            sx={{
              maxWidth: 400,
              backgroundColor: "9ea9b1",
              opacity: 0.7,
              height: 290,
            }}
            theme={customTheme}
          >
            <CardMedia
              component="img"
              height="140"
              image={`${comunidad}`}
              alt=""
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.primary"
                gutterBottom
              >
                Creando una comunidad
              </Typography>
              <Typography variant="h7">
                Conoce a personas de todas partes
              </Typography>
              <Typography variant="caption">
                <br />
                "Hagamos una comunidad donde aprendamos juntos"
              </Typography>
            </CardContent>
          </Card>
        </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledCard>
          <Card
            sx={{
              maxWidth: 400,
              backgroundColor: "9ea9b1",
              opacity: 0.7,
              height: 290,
            }}
            theme={customTheme}
          >
            <CardMedia
              component="img"
              height="140"
              image={`${preferencias}`}
              alt=""
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.primary"
                gutterBottom
              >
                Aqui encontras lo que se ajuste a tu preferencia
              </Typography>
              <Typography variant="h7">
                Entra a un mundo de posibilidades
              </Typography>
              <Typography variant="caption">
                <br />
                "La vida es un misterio; la luz ciega y la verad inaccesible
                asombra"
              </Typography>
            </CardContent>
          </Card>
        </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledCard>
          <Card
            sx={{
              maxWidth: 400,
              backgroundColor: "9ea9b1",
              opacity: 0.7,
              height: 290,
            }}
            theme={customTheme}
          >
            <CardMedia component="img" height="140" image={`${crea}`} alt="" />
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.primary"
                gutterBottom
              >
                Crea lo que imagines
              </Typography>
              <Typography variant="h7">El limite lo pones tu</Typography>
              <Typography variant="caption">
                <br />
                "Existe un lenguaje que va más allá de las palabras"
              </Typography>
            </CardContent>
          </Card>
        </StyledCard>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Cards;
