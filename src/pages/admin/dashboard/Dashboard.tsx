import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function Dashboard() {
  return (
    <Container>
      <Helmet>
        <title>Chat App - Dashboard</title>
      </Helmet>
      <Typography variant="h1" color="initial">Dashboard</Typography>
    </Container>
  )
}
