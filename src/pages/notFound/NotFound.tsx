import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <Container>
      <Helmet>
        <title>Oops! Not Found</title>
      </Helmet>
      <Typography variant="h1" color="initial">Not Found</Typography>
    </Container>
  )
}
