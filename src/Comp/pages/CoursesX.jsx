import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import demo from "../../images/image.png";
import { Button, Container } from "@mui/material";
import CourseData from "./CourseData";

export default function CoursesX() {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: {sm:'fr',md:'1fr 1fr'},
        gap: "10px",
        margin: "2rem auto",

      }}
    >
      {CourseData.map((value) => {
        // ret

        return (
          <Card
            key={value.id}
            sx={{
              display: "flex",
              padding: "1rem",
              bgcolor: "#ff00008c",
              border: "2px solid red",
              color: "white",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="p" fontSize='1.3rem'>
                  {value.title}
                </Typography>
                <Typography component="div" variant="p" fontSize='.9rem'>
                  {value.description}
                </Typography>
                <Typography variant="p">
                  Duration: {value.durationWeeks}{" "}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: "text.secondary", color: "#c8c8c8" }}
                >
                Level: {value.level}
                </Typography>
              </CardContent>
              <Container sx={{display:'flex',gap:'5px' }}>
                 
              <Button variant="contained" sx={{ maxWidth: "160px",background:'red' }}>
               {value.price}$
              </Button>
              <Button variant="contained" sx={{ maxWidth: "160px",background:'red' }}>
                Explore now
              </Button>
              </Container>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={demo}
              alt="Live from space album cover"
            />
          </Card>
        );
      })}
    </Container>
  );
}
