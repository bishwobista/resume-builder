import {  Container, Typography } from "@mui/material"
import Form from "./components/Form/Form"


function App() {
  

  return (
    <>
    <Container sx={{bgcolor:'#cfcfcf', height: '100vh', ":hover" : { bgcolor: "#efefef"}}}>
    <Typography variant="h1" sx={{my: 4, textalign: 'center', color: "primary.main"}}>
      Resume Builder
    </Typography>
    
    <Form />
    
    </Container>
    </>
  )
}

export default App
