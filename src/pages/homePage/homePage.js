import { React } from 'react';
import { Container, Typography, Box, Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { OpenInNew } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';

const MainPage = () => {
  const placeholderSiteLink = "https://i.kym-cdn.com/entries/icons/original/000/047/760/dt.jpg";
  return (
    <Container sx={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', padding: '2em 0', maxWidth: '100%' }}>
     <Box sx={{
  backgroundColor: '#D2042D',
  padding: '5em',
  borderRadius: '30px',
  textAlign: 'center', // Center the text
  '@media (max-width: 600px)': {
    padding: '2em',
    borderRadius: '15px',
  }
}}>
  <Typography variant="h1" sx={{ 
    fontSize: '8rem', // Original font size
    color: 'white',
    '@media (max-width: 600px)': {
      fontSize: '4rem', // Adjusted font size for smaller screens
    }
  }}>ZEVonUDS</Typography>
</Box>
      <Box sx={{ backgroundColor: '#A9A9A9', padding: '1em', borderRadius: '10px', marginTop: '1em', textAlign: 'center', width: '100%', margin: 0 }}>
        <Typography variant="h5" sx={{ fontSize: '2rem' }}>Project Details</Typography>
      </Box>
      <Typography variant='body1' sx={{ fontSize: '1rem', padding: '0.5rem' }}>Academic Title: "Lorem ipsum dolor sit amet"</Typography>
      <Typography variant='body1' sx={{ fontSize: '1rem' }}>Commercial Title: "Lorem ipsum dolor sit amet"</Typography>

      <Grid container spacing={3} sx={{ marginTop: '2em' }}>

        <Grid item xs={12} md={9}>
          <Typography variant="body1" sx={{ fontSize: '1rem', padding: '0.5rem' }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
        <Box sx={{
  backgroundColor: '#D2042D',
  padding: '1em',
  borderRadius: '10px',
  textAlign: 'center',
  width: '100%',
  margin: 0,
  '@media (max-width: 600px)': {
    padding: '0.5em',
    borderRadius: '5px',
  }
}}>
  <Typography variant="h5" sx={{ 
    fontSize: '2rem', // Original font size
    color: 'white',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem', // Adjusted font size for smaller screens
    }
  }}>Project Links</Typography>
  <Box sx={{ 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <Link to={placeholderSiteLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginBottom: '0.5em' }}>
      <Typography variant="body1" sx={{ 
        fontSize: '1rem', // Original font size
        color: 'white',
        '@media (max-width: 600px)': {
          fontSize: '0.8rem', // Adjusted font size for smaller screens
        }
      }}>Project Repository</Typography>
      <IconButton>
        <GitHubIcon sx={{ color: 'white' }} />
      </IconButton>
    </Link>
    <Link to={placeholderSiteLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginBottom: '0.5em' }}>
      <Typography variant="body1" sx={{ 
        fontSize: '1rem', // Original font size
        color: 'white',
        '@media (max-width: 600px)': {
          fontSize: '0.8rem', // Adjusted font size for smaller screens
        }
      }}>Project Demo</Typography>
      <IconButton component={Link} to={placeholderSiteLink} target="_blank" rel="noopener noreferrer">
        <YouTubeIcon sx={{ color: 'white' }} />
      </IconButton>
    </Link>
    <Link to={placeholderSiteLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginBottom: '0.5em' }}>
      <Typography variant="body1" sx={{ 
        fontSize: '1rem', // Original font size
        color: 'white',
        '@media (max-width: 600px)': {
          fontSize: '0.8rem', // Adjusted font size for smaller screens
        }
      }}>Project Poster</Typography>
      <IconButton component={Link} to={placeholderSiteLink} target="_blank" rel="noopener noreferrer">
        <ArticleIcon sx={{ color: 'white' }} />
      </IconButton>
    </Link>
  </Box>
</Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainPage;