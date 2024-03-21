import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function Users() {
  return (
    <Container>
      <Helmet>
        <title>Chat App - Users</title>
      </Helmet>
      <Typography variant="h1" color="initial">Users</Typography>
    </Container>
  )
}