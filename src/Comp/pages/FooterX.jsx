import { Box, List, Toolbar, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
function FooterX() {
  return (
    <>
      <Box
        bgcolor={"#21282c"}
        color="#b9def8"
        borderTop={" 2px solid #485660"}
        padding={5}
        sx={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          padding: "2px",
          textAlign: "center",
          display: "flex",
          flexDirection: {
            xs: 'column',    // Extra-small screens (e.g., phones)
            sm: 'column',   // Small screens (e.g., tablets)
            md: 'row',     // Medium screens (e.g., small desktops)
          },
          alignItems: "center",

          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: ".7rem", // Extra-small screens (e.g., phones)
              sm: "0.9rem", // Small screens (e.g., tablets)
              md: "1.1rem", // Medium screens (e.g., small desktops)
            },
          }}
        >
          All Rights Reseverd &copy; X-Man Gym
        </Typography>
        <List
          sx={{
            listStyle: "none",
            display: "flex",
            gap: "1rem",

            justifyContent: "space-between",
          }}
        >
          <li>
            <GitHubIcon
              sx={{
                fontSize: {
                  xs: "1rem", // Extra-small screens (e.g., phones)
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
                  xs: "1rem", // Extra-small screens (e.g., phones)
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
                  xs: "1rem", // Extra-small screens (e.g., phones)
                  sm: "1.2rem", // Small screens (e.g., tablets)
                  md: "1.5rem", // Medium screens (e.g., small desktops)
                },
              }}
            />
          </li>
        </List>
      </Box>

      <Toolbar />
    </>
  );
}

export default FooterX;
