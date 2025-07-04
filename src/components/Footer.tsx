import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import logoImage from '../assets/logo.jpg';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', padding: '10px 0' }}>
      <Container>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          marginBottom='10px'
        >
          <img src={logoImage} style={{ width: '150px' }} alt='Logo' />
        </Box>
        <Typography
          variant='body2'
          color='inherit'
          textAlign='center'
          borderTop='1px solid #dcdcdc'
          paddingTop='10px'
        >
          © 2025 Giulia Munari. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
