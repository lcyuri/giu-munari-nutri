import React from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logoImage from '../assets/logo-image.jpg';

const Header: React.FC = () => {
  return (
    <AppBar
      position='sticky'
      sx={{ backgroundColor: '#fff' }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center' }}
          >
          <img
            src={logoImage}
            style={{ width: '150px' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2
          }}
        >
          <IconButton
            component='a'
            href='https://wa.me/5599999999999'
            target='_blank'
            rel='noopener noreferrer'
            sx={{
              color: '#97ba7c',
              '&:hover': {
                color: '#62684e',
              },
            }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
