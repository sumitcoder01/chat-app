import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function Login() {
  return (
    <Container>
      <Helmet>
        <title>Chat App - Login</title>
      </Helmet>
      <Typography variant="h1" color="initial">Login</Typography>
    </Container>
  )
}
