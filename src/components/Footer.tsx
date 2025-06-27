import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import logoImage from '../assets/logo-image.jpg';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', py: 2, mt: 'auto' }}>
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={logoImage} style={{ width: '150px' }} />
        </Box>
        <Box sx={{ textAlign: 'center', mt: 2, borderTop: '1px solid #dcdcdc', pt: 1 }}>
          <Typography variant='body2' color='inherit'>
            © 2025 Giulia Munari. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
