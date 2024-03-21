import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function Chats() {
  return (
    <Container>
      <Helmet>
        <title>Chat App - chats</title>
      </Helmet>
      <Typography variant="h1" color="initial">Chats</Typography>
    </Container>
  )
}
