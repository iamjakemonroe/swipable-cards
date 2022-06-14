import React from "react";
import "./Header.css";
// import PersonIcon from "@mui/icons-material/Person";
import { IconButton, Avatar } from "@mui/material";
import Icon from "../media/SGN_03_29_2022_1648578648492.png";
import { Link } from "react-router-dom";

function Header({}) {
  // const history = useHistory();

  return (
    <div className="header">
      {/* {backButton ? (
        <IconButton>
          <ArrowBackIosNewIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <Link to="/">
          <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
          </IconButton>
        </Link>
      )} */}

      <Link to="/">
        <IconButton>
          <Avatar
            sx={{ width: 32, height: 32 }}
            alt=""
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
          />
        </IconButton>
      </Link>

      <img className="header__logo" src={Icon} alt="heart logo" />
    </div>
  );
}

export default Header;
