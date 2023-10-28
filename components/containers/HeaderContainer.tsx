import React from 'react'
import { Typography, Paper, Grid } from "@mui/material";


function HeaderContainer() {
  return (
    <Grid item xs={8} sx={{border: 'primary.main'}}>
      <Paper 
        elevation={20}
        sx={{
            display:'flex',
            height: '30vh',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: '1.5rem'
            }}
        >
        <Typography variant="h3">
          Welcome to QUBIC7
        </Typography>
        <Typography>
            Welcome to the world of QUBIC7, a groundbreaking collection of exclusive NFTs that brings together art, technology, and innovation. 
        </Typography>
      </Paper>
    </Grid>
    )
}

export default HeaderContainer