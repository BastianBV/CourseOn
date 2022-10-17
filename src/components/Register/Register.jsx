import { React, useState } from "react";
import { createAccount } from "../../services/singUp";
import { useNavigate, Link } from "react-router-dom";
import CustomInput from "../Inputs/CustomInput";
import CustomButton from "../Buttons/CustomButton";
import styles from "../Register/register.module.scss";
import Paper from "@mui/material/Paper";
import Alert from '@mui/material/Alert';
import { Box } from "@mui/system";


const Register = () => {
  const [values, setValues] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const result = await createAccount(values.name, values.email, values.password);
      console.log("createAccount", result);
      if (!result) setError("Error al iniciar Sesión");
      navigate("/login");
    }catch(error){
        console.log(error)
    }
  };

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });
  return (
    <>
      {/* <Logo /> */}
      {error && <Alert variant="outlined" severity="error">
      Error al registrarse
      </Alert>}
      <Box>
      <Paper
        elevation={3}
        sx={{ background: "#282c34", height: 350, p: 5, opacity: 0.5 }}
      >
        <CustomInput text="Nombre" type="text" name={"name"} onChange={handleChange} />
        <CustomInput text="Correo" type="text" name={"email"} onChange={handleChange} />
        <CustomInput
          text="Contraseña"
          type="password"
          name={"password"}
          onChange={handleChange}
        />
        <CustomInput
          text="Confirmar Contraseña"
          type="password"
          onChange={handleChange}
        />
        <CustomButton
          type='button'
          text="Continuar"
          className="buttonMicrosoft"
          onClick={handleSubmit}
        />
      </Paper>
      </Box>

      <h5 className={`${styles.h5}`}>¿Ya tienes una cuenta?</h5>
      <Link to='/loginApp' className={`${styles.h5}`}>
        Inicia Sesión
      </Link>
      <h6 className={`${styles.h6}`}>
        Al registrarse aceptas nuestros terminos de uso y politicas de
        privacidad.
      </h6>
      <h5 className={`${styles.h5}`}>COURSE-ON.</h5>
    </>
  );
};

export default Register;
