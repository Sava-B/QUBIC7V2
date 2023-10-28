import React from 'react'
import { Typography, Paper, Grid, Avatar } from "@mui/material";
import qubic7logo from "../../assets/better qubic7 logo.png"

function HeaderContainer() {
  return (
    <Grid item container xs={12} lg={8} sx={{border: 'primary.light', width: '100%'}}>
      <Paper 
        elevation={5}
        sx={{
            display:'flex',
            height: {xs: '40vh', lg: '30vh'},
            flexDirection: {xs: 'column', lg: "row"},
            justifyContent: {lg: "center"} ,
            alignItems: 'center',
            borderRadius: '1.5rem',
            bgcolor: 'secondary.light',
            }}
        >
        <Avatar
          src={qubic7logo.src}
          sx={{
            width: {xs: '100%', lg: '50%'},
            height: {xs: '12rem', lg: '100%'},
            mx:  '-8rem',

          }}
        />
        <Typography variant="h2" sx={{display: {xs: 'none', lg: 'inline'}}}>
            Welcome to the world of QUBIC7, a groundbreaking collection of exclusive NFTs that brings together art, technology, and innovation. 
        </Typography>
        <Typography variant="h6" sx={{display: {lg: 'none'}}}>
            Welcome to the world of QUBIC7, a groundbreaking collection of exclusive NFTs that brings together art, technology, and innovation. 
        </Typography>
      </Paper>
    </Grid>
    )
}

export default HeaderContainer