import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function Signup() {
    return (
        <Container>
        <Helmet>
          <title>Chat App - Signup</title>
        </Helmet>
        <Typography variant="h1" color="initial">Signup</Typography>
      </Container>
    )
}