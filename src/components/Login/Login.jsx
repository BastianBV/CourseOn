import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../Logo/Logo";
import styles from "../Buttons/buttons.module.scss";
import CustomButton from "../Buttons/CustomButton";
import { Box } from "@mui/system";
import LoginApp from "../LoginWithApp/LoginApp";
import { Google } from "@mui/icons-material";

const LocalHost = true;
const Login = () => {
  const navigate = useNavigate();

  const handleCallbackResponse = async (response) => {
    const body = { id_token: response.credential };

    let urlBack = "";
    if (LocalHost) {
      urlBack = "http://localhost:8080/auth/google";
    } else {
      urlBack = "https://course-on-learning.herokuapp.com/auth/google";
    }

    const responseGoogleSignIn = await fetch(urlBack, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (responseGoogleSignIn.status == 200) {
      navigate("/");
    }
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "461858164914-1p5p6pc16ltv610icv3kdk0c74gjgrgh.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      width: 1000,
    });
  }, []);

  return (
    <div className={`${styles.container}`}>
      <Logo />
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Link to="/loginApp">
          <CustomButton
            text="Inicia Sesión"
            className="buttonSesion"
            style={{ width: 402 }}
          />{" "}
        </Link>
        <h4 className={`${styles.letterEdit}`}>Ingresa a través de </h4>

        <CustomButton
          text="SIGN IN WITH GOOGLE"
          className="buttonGoogle"
          id="signInDiv"
          style={{ width: 402 }}
        >
          {" "}
          <div id="signInDiv"></div>{" "}
        </CustomButton>
        <h5 className={`${styles.count}`}>¿No tienes cuenta?</h5>
        <Link to="/register">Regístrate</Link>
      </Box>
    </div>
  );
};

export default Login;
