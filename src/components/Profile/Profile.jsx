import React from "react";
import ConfigProfile from "../Buttons/ConfigProfile";
import Avatar from "@mui/material/Avatar";
import avatar from "../images/avatar.svg";
import Tags from "../Profile/Tags/Tags";
import { Outlet } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <ConfigProfile />
      <Avatar src={avatar} sx={{ width: 90, height: 90 }} />
      <Tags />
      <Outlet />
    </>
  );
};

export default Profile;
