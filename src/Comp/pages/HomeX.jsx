import { Box, Button, Typography } from "@mui/material";
import React from "react";
import banner from "./../../images/banner.png";

function HomeX() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          height: "90vh",
          display: "flex",
          placeItems: "center",
        
        }}
      >
        <div className="mmm" style={{maxWidth:'1024px', textAlign:'center',textShadow:' 5px 0px 40px #ff0000', display:'flex',gap:'1rem', flexDirection:"column", margin: "0 auto",}}>
          <Typography component={'h1'} fontSize={'6rem'} variant="h1" >Don't be afraid of failure</Typography>
          <p style={{ margin: "0 auto" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt obcaecati veniam blanditiis, quidem, praesentium magnam facere veritatis asperiores,  sus
          </p>
          <Button variant="contained"   href="Join us" sx={{bgcolor:'red', maxWidth:'250px', margin:'0 auto', fontWeight:700,boxShadow:' 5px 0px 40px #ff0000'}}>Join us...</Button>
        </div>
      </Box>
    </>
  );
}

export default HomeX;
