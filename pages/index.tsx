import { Typography, Container, Box, Paper } from "@mui/material";

export default function Page() {
  return (
    <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <h1>Hello, Next.js!</h1>
      <Typography>Test</Typography>
      <Box sx={{border: 'primary.main'}}>
        <Paper elevation={20} sx={{height: '30vh', width: '80vw'}}>
            Something
        </Paper>
      </Box>
    </Container>
    
  )

}