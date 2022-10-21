import { React } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadIcon from "@mui/icons-material/Upload";
const DropImage = ({ type, name, accept, onChange, ImagePrevious }) => {
  return (
    <>
      <Stack>
      <Button variant="contained"  startIcon={<UploadIcon />} component="label">
      Sube Una imagen
      <input hidden accept="image/*" type="file" onChange={onChange} />
      </Button>
      </Stack>
    </>
  );
};

export default DropImage;
