import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function Groups() {
  return (
    <Container>
      <Helmet>
        <title>Chat App - groups</title>
      </Helmet>
      <Typography variant="h1" color="initial">Groups</Typography>
    </Container>
  )
}
