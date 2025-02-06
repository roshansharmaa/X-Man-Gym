import { React, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
  Divider,
  useMediaQuery,
} from "@mui/material";
import logo from "../../images/logoX.png";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import "./HeaderX.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function HeaderX() {
  const [sidebar, setsidebar] = useState(false);

  const handlenav = () => {
    setsidebar(!sidebar);
    console.log(sidebar);
  };

  const dreawer = (
    <Box bgcolor={"red"} height={"100vh"}>
      <Typography
        color="black"
        variant="h6"
        component={"div"}
        flexGrow={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          padding: "5px",
          justifyContent: "center",
         
        }}
      >
        <img src={logo} className="logo2" alt="" />
        
        <Link className="listX" to="/">
        <Typography variant="h6" className="hederissu" sx={{cursor: 'pointer'}} >
          X-Man Gym
        </Typography>
          </Link>
      </Typography>
      <Divider />
      <Box
        sx={{
          // display: isSmallScreen ? "none" : "flex", // hide if screen < 500px, show flex if >= 500px
          flexDirection: "row",
          gap: "1rem",
          fontSize: "1.5rem",
          listStyle: "none",
          placeContent: "center",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <li>
          <Link className="listX" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="listX" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="listX" to="/courses">
            Course
          </Link>
        </li>
        <li>
          <Link className="listX" to="/contact">
            Contact
          </Link>
        </li>
      </Box>
    </Box>
  );
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box>
        <AppBar
          className="full-nav"
          component={"nav"}
          sx={{ bgcolor: "red", display: "flex", flexDirection: "row" }}
        >
          <Toolbar>
            <IconButton
              onClick={handlenav}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color="black"
              variant="h6"
              component={"div"}
              flexGrow={1}
            >
              <img src={logo} className="logo" alt="" />
              <Typography variant="h4">X-Man Gym</Typography>
            </Typography>
          </Toolbar>

          <Box>
            <List
              sx={{
                display: isSmallScreen ? "none" : "flex", // hide if screen < 500px, show flex if >= 500px
                flexDirection: "row",
                gap: "1rem",
                fontSize: "1.8rem",
                listStyle: "none",
              }}
            >
              <li>
                <Link className="listX" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="listX" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="listX" to="/courses">
                  Course
                </Link>
              </li>
              <li>
                <Link className="listX" to="/contact">
                  Contact
                </Link>
              </li>
            </List>
          </Box>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={sidebar}
            onClose={handlenav}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {dreawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
}

export default HeaderX;
