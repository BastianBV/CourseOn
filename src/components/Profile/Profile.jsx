import React from "react";
import SettingsProfile from "../Buttons/SettingsProfile";
import Avatar from "@mui/material/Avatar";
import avatar from "../../assets/images/avatar.svg";
import Tags from "../Profile/Tags/Tags";
import { Outlet } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <SettingsProfile />
      <Avatar src={avatar} sx={{ width: 90, height: 90 }} />
      <Tags />
      <Outlet />
    </>
  );
};

export default Profile;
