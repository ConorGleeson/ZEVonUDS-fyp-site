import {React} from 'react';
import { Container, Typography, Box } from '@mui/material';

const MainPage = () => {
  return (
    <Container sx={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', padding: '2em 0' , }}>
      <Box sx={{ backgroundColor: '#D2042D', padding: '5em', borderRadius: '30px' }}>
      <Typography variant="h1" sx={{ fontSize: '8rem', color: 'white' }}>ZEVonUDS</Typography>
      </Box>
      <Typography variant="h5" sx={{ fontSize: '1rem', opacity: 0.4  }}>Website under Construction</Typography>
      <Box sx={{ backgroundColor: '#A9A9A9', padding: '1em', borderRadius: '10px', marginTop: '1em', textAlign: 'center' , width: '100%', margin: 0}}>
        <Typography variant="h5" sx={{ fontSize: '2rem' }}>Project Details</Typography>
      </Box>
      <Typography variant='body1' sx={{fontSize: '1rem', padding: '0.5rem'}}>Academic Title: "Lorem ipsum dolor sit amet"</Typography>
      <Typography variant='body1' sx={{fontSize: '1rem'}}>Comercial Title: "Lorem ipsum dolor sit amet"</Typography>
    
    </Container>
  );
}

export default MainPage; 