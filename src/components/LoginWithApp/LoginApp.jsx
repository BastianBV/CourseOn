import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "../LoginWithApp/loginApp.module.scss";
import CustomButton from "../Buttons/CustomButton";
import CustomInput from "../Inputs/CustomInput";
import { loginAccount } from "../../services/login";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";

const LoginApp = () => {
  const [values, setValues] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginAccount(values.email, values.password);

      if (!result.success) setError("Error al iniciar Sesión");

      localStorage.setItem("token", result.data.token);
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });
  return (
    <form>
      <Logo />
      {error && (
        <Alert variant="outlined" severity="error">
          Error al iniciar Sesión
        </Alert>
      )}
      <Paper
        elevation={3}
        sx={{ background: "#282c34", height: 300, p: 5, opacity: 0.5 }}
      >
        <CustomInput text="Correo" name={"email"}  onChange={handleChange} />
        <CustomInput text="Contraseña" name={"password"} onChange={handleChange} />
        <CustomButton
          text="Inicia Sesión"
          className="buttonSesion"
          type="submit"
          onClick={handleSubmit}
        />
      </Paper>
    </form>
    
  );
};

export default LoginApp;
