import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function Messages() {
  return (
    <Container>
      <Helmet>
        <title>Chat App - Messages</title>
      </Helmet>
      <Typography variant="h1" color="initial">Messages</Typography>
    </Container>
  )
}