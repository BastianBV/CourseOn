import { React } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadIcon from "@mui/icons-material/Upload";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ModalUrl from '../Modal/ModalUrl'
const DropFile = ({ type, name, accept, onChange, FilesStates  }) => {
  return (
    <>
      <Stack sx={{ width: 272, mr:0,ml:5, flexDirection:'row', justifyContent:'space-between'}} spacing={2}>
      <Button  component="label" sx={{mt:2,mb:1}}>
      <AddPhotoAlternateOutlinedIcon color="primary" sx={{ fontSize: 90}}/>
      <input hidden accept="/*" type="file" onChange={onChange} />
      </Button>
      <ModalUrl/>
      </Stack>
    </>
  );
};

export default DropFile;