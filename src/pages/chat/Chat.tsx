import { Container, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export default function Chat() {
  const { id } = useParams();
  return (
    <Container>
      <Helmet>
        <title>Chat App - {`chat - ${id}`}</title>
      </Helmet>
      <Typography variant="h1" color="initial">chats {id}</Typography>
    </Container>
  )
}
