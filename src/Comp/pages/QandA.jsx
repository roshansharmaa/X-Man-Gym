import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
// import { TransitionProps } from '@mui/material/transitions';

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Container } from "@mui/material";
import QaData from "./QaData";
export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={handleClickOpen}
        style={{
          background: "red",
          border: "none",
          height: "50px",
          position: "fixed",
          bottom: "5%",
          right: "5%",
          borderRadius: "50%",
          width: "50px",
        }}
      >
        QnA{" "}
      </button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        // TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", bgcolor: "red" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Questions & Answers
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>

        <Container
          sx={{ display: "grid", gridTemplateColumns: "1fr", gap: ".5rem" , margin:'2rem auto'}}
        >
          {QaData.map((value) => {
            return (
              <Accordion key={value.id} sx={{background:'#ff00008c',border:'2px solid red'}}>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">{value.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  {value.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Container>
      </Dialog>
    </>
  );
}
