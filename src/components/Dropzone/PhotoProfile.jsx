import { React, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const PhotoProfile = ({ type, name, accept, onChange, ImageProfile }) => {

  return (
    <>
      <Stack>
        <Button component="label">
          <ModeEditOutlineOutlinedIcon/>
          <input hidden accept="image/*" type="file" onChange={onChange} />
        </Button>
      </Stack>
    </>
  );
};

export default PhotoProfile;
