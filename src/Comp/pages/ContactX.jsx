import React from "react";
import {
  Box,
  Button,
  Container,
  List,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import about from "./../../images/about.png";
import msg from "./../../images/msg.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function ContactX() {
  return (
    <>
    <Container>

    <Box sx={{ maxWidth: "1024px", margin: "0 auto", p: 2 }}>
  <Box bgcolor="#ff00008c" border='2px solid red' borderRadius="20px" p={2}>
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }} // Stacks on small screens, row on md and up
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={5}
      padding="1rem"
    >
      <img
        src={msg}
        alt=""
        height="290px"
        style={{ maxWidth: "100%", flexShrink: 0 }}
      />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: { xs: "90%", sm: "50ch" },
          },
          display: "flex",
          flexDirection: "column", // Stack form fields vertically
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="filled-required"
          label="Name"
          variant="filled"
        />
        <TextField
          id="filled-required"
          label="Surname"
          variant="filled"
        />
        <TextField
          id="filled-email"
          label="E-mail"
          variant="filled"
        />
        <TextField
          id="filled-phone"
          label="Phone number"
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Drop a message"
          multiline
          rows={5}
          variant="filled"
          fullWidth
          sx={{
            width: { xs: "90%", sm: "30ch" },
            mt: 2,
          }}
        />
      <Button variant="contained" sx={{ bgcolor: "red" }}>
        Submit
      </Button>
      </Box>
    </Box>
  </Box>
</Box>
</Container>
          

    </>
  );
}

export default ContactX;
