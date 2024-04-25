import { React } from 'react';
import { Container, Typography, Box, Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { OpenInNew } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';

const MainPage = () => {
  const placeholderSiteLink = "https://conorgleeson.github.io/ZEVonUDS-fyp-site";
  const githubLink = "https://github.com/ConorGleeson/cantest";
  return (
    <Container sx={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', padding: '2em 0', maxWidth: '100%',  }}>
     <Box sx={{
  backgroundColor: '#D2042D',
  padding: '5em',
  borderRadius: '30px',
  textAlign: 'center', // Center the text
  marginBottom: '2em', 
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
      <Typography variant='body1' sx={{ fontSize: '1rem', padding: '0.5rem' }}>Academic Title: ZEVonUDS Protocol Stack Implementation</Typography>
      <Typography variant='body1' sx={{ fontSize: '1rem' }}>Commercial Title: Electric Vehicle Diagnostics</Typography>

      <Grid container spacing={3} sx={{ marginTop: '2em' }}>

        <Grid item xs={12} md={9}>
          <Typography variant="h5" sx={{ fontSize: '2rem', textAlign: 'center'}}>Project Summary</Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', padding: '0.5rem' }}>
          With Electric Vehicles (EVs) becoming more and more common in our lives questions arise about keeping them running and in good condition in the long term. With standards and expectations long set out for combustion engine vehicles we must now adapt these processes for use with new technologies. 
The project aims to simulate the diagnostic functionalities of an EVs electronic control unit (ECU) using a Raspberry Pi and Vector CANoe software. By leveraging standards like OBD, UDS, and the emerging ZEVonUDS, the simulation will monitor battery health, fault detection, and data transmission over a CAN bus network. Key components include setting up the DEM and DCM modules on the Pi, and establishing communication with CANoe. 
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
    <Link to={githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginBottom: '0.5em' }}>
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