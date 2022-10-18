import React from 'react';
import Container from '@mui/material/Container';
import Copyright from './Copyright';


const Footer: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  )
}

export default Footer;
