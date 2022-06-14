import * as React from "react";
import "./SimpleBottomNavigation.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForumIcon from "@mui/icons-material/Forum";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import { Link } from "react-router-dom";
import { CssBaseline, Paper } from "@mui/material";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        className="bottom__navigation"
        // sx={{ width: 1000, bottom: 0, position: "absolute" }}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label=""
            icon={
              // <Badge badgeContent={8} color="#ec5e6f">
              <LocalFireDepartmentSharpIcon />
            }
            to="/"
            component={Link}
            value="/profile"
          />

          <BottomNavigationAction
            label=""
            to="/favorite"
            component={Link}
            icon={<FavoriteIcon />}
          />

          <BottomNavigationAction
            label=""
            icon={<ForumIcon />}
            to="/chats"
            component={Link}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
