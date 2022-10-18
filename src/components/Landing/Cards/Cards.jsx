import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "../Cards/cards.module.scss";
import { styled, createTheme } from "@mui/material/styles";
import { blueGrey, green } from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";
import inferface from "../../../assets/images/interface.jpg";
import community from "../../../assets/images/community.jpg";
import topics from "../../../assets/images/topics.jpg";
import create from "../../../assets/images/create.png";
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
          <StyledCard sx={{maxWidth:400, maxHeight:250, ml:10, mt:10, '@media (max-width: 768px)':{width:300, height:200, ml:1, mt:3} }}>   
        <Card
            sx={{
              maxWidth: 400,
              backgroundColor: "9ea9b1",
              opacity: 0.7,
              height: 250,
            }}
            theme={customTheme}
          >
            <CardMedia
              component="img"
              height="140"
              image={`${inferface}`}
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
              <Typography variant="caption">¡Aqui es donde comienza todo!</Typography>
            </CardContent>
          </Card>   
        </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledCard sx={{maxWidth:400, maxHeight:250, ml:25, mt:10, '@media (max-width: 768px)':{width:300,height:200, ml:1, mt:2}}}>
          <Card
            sx={{
              maxWidth: 400,
              backgroundColor: "9ea9b1",
              opacity: 0.7,
              height: 250,
            }}
            theme={customTheme}
          >
            <CardMedia
              component="img"
              height="140"
              image={`${community}`}
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
          <StyledCard sx={{maxWidth:400, maxHeight:200, ml:10, mt:10, '@media (max-width: 768px)':{width:300,height:200, ml:1, mt:2}}}>
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
              image={`${topics}`}
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
          <StyledCard sx={{maxWidth:400, maxHeight:200, ml:25, mt:10, '@media (max-width: 768px)':{width:300,height:200, ml:1, mt:2 }}}>
          <Card
            sx={{
              maxWidth: 400,
              backgroundColor: "9ea9b1",
              opacity: 0.7,
              height: 290,
            }}
            theme={customTheme}
          >
            <CardMedia component="img" height="140" image={`${create}`} alt="" />
            <CardContent>
              <Typography
                sx={{ fontSize: 17 }}
                color="text.primary"
                gutterBottom
              >
                Crea lo que imagines
              </Typography>
              <Typography variant="caption">El limite lo pones tu</Typography>
              
            </CardContent>
          </Card>
        </StyledCard>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Cards;
