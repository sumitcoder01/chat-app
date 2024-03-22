import { Box, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Profile } from "../../components/shared/profile/Profile";
import { UserMessages } from "../../components/specific/userMessages/UserMessages";
import { UserChats } from "../../components/shared/userChats/UserChats";
import { useParams } from 'react-router-dom';

export default function Chat() {
  const { id } = useParams();
  console.log(id);
  return (
    <Box
      sx={{
        backgroundColor: "orange",
        height: "calc(100vh - 4rem)",
      }}
    >
      <Helmet>
        <title>Chat App - chat</title>
      </Helmet>

      <Grid container sx={{ height: "100%" }}
      >
        <Grid
          item
          md={2}
          sx={{
            display: { xs: "none", md: "block" },
            backgroundColor: "red",
          }}
        >
          <UserChats />
        </Grid>
        <Grid item xs={12} md={7} sx={{ backgroundColor: "blue" }}>
          <Box>
            <UserMessages />
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          sx={{
            display: { xs: "none", md: "block" },
            backgroundColor: "pink",
          }}
        >
          <Profile />
        </Grid>
      </Grid>
    </Box>
  )
}
