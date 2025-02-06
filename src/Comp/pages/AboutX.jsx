import {
  Box,
  Button,
  List,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import about from "./../../images/about.png";
import msg from "./../../images/msg.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function AboutX() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem 0",
        }}
      >
        <Box
          sx={{ maxWidth: "1024px", placeContent: "center" }}
          margin="0 auto"
        >
          <Box  borderRadius={"20px"} bgcolor="#ff00008c" border='2px solid red'>
            <Box
              display="flex"
              flexWrap="wrap"
              maxWidth="1024px"
              justifyContent="center"
              alignItems="center"
              gap={5}
            >
              <img
                src={about}
                alt=""
                height="400px"
                style={{ maxWidth: "100%", flexShrink: 0 }}
              />
              <Box textAlign="center" maxWidth="500px">
                <Typography variant="h3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  accusantium corporis, repellendus debitis sint cum...
                </Typography>

                <List
                  sx={{
                    listStyle: "none",
                    display: "flex",
                    gap: "1rem",
                    marginBottom: {
                      xs: "5rem",
                      sm: "2rem",
                      md: "2rem",
                    },
                    justifyContent: "center",
                  }}
                >
                  <li>
                    <GitHubIcon
                      sx={{
                        fontSize: {
                          xs: "1rem",
                          sm: "1.2rem", // Small screens (e.g., tablets)
                          md: "1.5rem", // Medium screens (e.g., small desktops)
                        },
                      }}
                    />
                  </li>
                  <li>
                    <FacebookIcon
                      sx={{
                        fontSize: {
                          xs: "1rem",
                          sm: "1.2rem", // Small screens (e.g., tablets)
                          md: "1.5rem", // Medium screens (e.g., small desktops)
                        },
                      }}
                    />
                  </li>
                  <li>
                    <YouTubeIcon
                      sx={{
                        fontSize: {
                          xs: "1rem",
                          sm: "1.2rem", // Small screens (e.g., tablets)
                          md: "1.5rem", // Medium screens (e.g., small desktops)
                        },
                      }}
                    />
                  </li>
                </List>
              </Box>
            </Box>
          </Box>
        </Box>

    
      </div>
    </>
  );
}

export default AboutX;
