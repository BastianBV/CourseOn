import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import styles from "../Inputs/inputs.module.scss";
const CustomInput = ({
  text,
  type,
  onChange,
  name,
  style,
  placeholder,
  value,
}) => {
  // const CssTextField = styled(TextField)({
  //   '& label.Mui-focused': {
  //     color: 'white',
  //   },
  //   '& .MuiInput-underline:after': {
  //     borderBottomColor: 'white',
  //   },
  //   '& .MuiOutlinedInput-root': {
  //     '& fieldset': {
  //       borderColor: 'white',
  //     },
  //     '&:hover fieldset': {
  //       borderColor: 'white',
  //     },
  //     '&.Mui-focused fieldset': {
  //       borderColor: 'white',
  //     },
  //   },
  // });
  return (
    // <>
    // <Box>
    // <CssTextField id="outlined-basic" label={label} variant="outlined"  onChange={onChange} required='required' type={type} name={name} autoComplete='off' sx={{mb:1,   }}/>
    // </Box>
    // </>
    <div className={`${styles.inputGroup}`}>
      <input
        placeholder={placeholder}
        onChange={onChange}
        required="required"
        type={type}
        name={name}
        value={value}
        style={style}
        autoComplete="off"
        className={`${styles.inputEf}`}
      />
      <label className={`${styles.userLabel}`}>{text}</label>
    </div>
  );
};

export default CustomInput;
