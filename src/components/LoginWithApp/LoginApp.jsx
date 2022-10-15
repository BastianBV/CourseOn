import { React, useState} from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "../LoginWithApp/loginApp.module.scss";
import CustomButton from "../Buttons/CustomButton";
import CustomInput from "../Inputs/CustomInput";
import { loginAccount } from "../../services/login";
import Alert from '@mui/material/Alert';
import Paper from "@mui/material/Paper";

const LoginApp = () => {
  const [values, setValues] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("values", values);
    const result = await loginAccount(values.email, values.password);
    console.log("result", result);
    if (!result.success) setError("Error al iniciar Sesión");

    localStorage.setItem("token", result.data.token);
    navigate("/");
  };

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });
  return (
    <>
      <Logo />
      {error && <Alert variant="outlined" severity="error">
      Error al iniciar Sesión
      </Alert>}
      <Paper
        elevation={3}
        sx={{ background: "#282c34", height: 300, p: 5, opacity: 0.5 }}
      >
        <CustomInput text="Correo" onChange={handleChange} />
        <CustomInput text="Contraseña" onChange={handleChange} />
        <CustomButton
          text="Inicia Sesión"
          className="buttonSesion"
          type="submit" 
          onClick={handleSubmit}
        />
      </Paper>
    </>
  );
};

export default LoginApp;
