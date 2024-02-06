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
      <Box sx={{ backgroundColor: '#D2042D', padding: '5em', borderRadius: '30px' }}>
        <Typography variant="h1" sx={{ fontSize: '8rem', color: 'white' }}>ZEVonUDS</Typography>
      </Box>
      <Typography variant="h5" sx={{ fontSize: '1rem', opacity: 0.4 }}>Website under Construction</Typography>
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
          <Box sx={{ backgroundColor: '#D2042D', padding: '1em', borderRadius: '10px', textAlign: 'center', width: '100%', margin: 0 }}>
            <Typography variant="h5" sx={{ fontSize: '2rem', color: 'white' }}>Project Links</Typography>


            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link to={placeholderSiteLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Typography variant="body1" sx={{ fontSize: '1rem', padding: '0.5rem', color: 'white' }}>Project Repository</Typography>
                <IconButton>
                  <GitHubIcon sx={{ color: 'white' }} />
                </IconButton>
              </Link>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to={placeholderSiteLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Typography variant="body1" sx={{ fontSize: '1rem', padding: '0.5rem', color: 'white' }}>Project Demo</Typography>
              <IconButton component={Link} to={placeholderSiteLink} target="_blank" rel="noopener noreferrer">
                <YouTubeIcon sx={{ color: 'white' }} />
              </IconButton>
              </Link>
            </Box>


            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to={placeholderSiteLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Typography variant="body1" sx={{ fontSize: '1rem', padding: '0.5rem', color: 'white' }}>Project Poster</Typography>
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