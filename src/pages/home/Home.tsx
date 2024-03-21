import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <Container>
      <Helmet>
        <title>Chat App - where you can chat</title>
      </Helmet>
      <Typography variant="h1" color="initial">Home</Typography>
    </Container>
  )
}
