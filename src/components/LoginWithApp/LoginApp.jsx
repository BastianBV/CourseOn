import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
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

      localStorage.setItem("userTok", result.token);
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
        sx={{ background: "#282c34", height: 300, p: 5, opacity: 0.5, width:300, display:'flex', flexDirection:'column', mt:5, ml:5, justifyContent:'center' }}
      >
<<<<<<< HEAD
        <CustomInput text="Correo" name={"email"} type='text' onChange={handleChange} />
        <CustomInput text="Contraseña" type='password' name={"password"} onChange={handleChange} />
=======
        <CustomInput text="Correo" name={"email"} onChange={handleChange} />
        <CustomInput
          text="Contraseña"
          name={"password"}
          onChange={handleChange}
        />
>>>>>>> adf02ae38a64d6ae338c47e2af04cd0a7764cf0e
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
