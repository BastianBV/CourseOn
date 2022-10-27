import React, { useEffect, useState } from "react";
import SettingsProfile from "../Buttons/SettingsProfile";
import Avatar from "@mui/material/Avatar";
import Tags from "../Profile/Tags/Tags";
import { Outlet } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./profile.module.scss";
import { getUserInfo } from "../../services/getInfo";
import { Box } from "@mui/system";

const Profile = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserInfo();
      // setUserInfo(user.data.name)
      console.log(user);
    };
    fetchUser().then((result) => {
      // setUserInfo(result.)
    });
  }, []);
  const percentage = 66;

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className={styles.settingButton}>
          <SettingsProfile />
        </div>

        <div>
          <Avatar sx={{ width: 90, height: 90 }} />

          <h2>{}</h2>
        </div>

        <Tags />
        <h1>Actualmente cursando</h1>
        <div className={styles.coursePercentage}>
          <div className={styles.graphic} style={{ width: 200, height: 200 }}>
            <h3>Curso 1</h3>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
          <div className={styles.graphic} style={{ width: 200, height: 200 }}>
            <h3>Curso 2</h3>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
        </div>
        <h1>Proximos vencimientos</h1>
      </Box>
      <Outlet />
    </>
  );
};

export default Profile;
