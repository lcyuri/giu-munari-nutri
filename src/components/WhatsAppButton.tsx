import React from 'react';
import { Box, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { WHATS_APP_LINK } from '../constants/genericConstants';

interface WhatsAppButtonProps {
  isButtonVisible: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ isButtonVisible }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 9999,
        opacity: isButtonVisible ? 1 : 0,
        animation: isButtonVisible ? 'fadeIn 0.5s ease-in-out' : 'fadeOut 0.5s ease-in-out',
        '@media (max-width: 600px)': { bottom: 15, right: 15 },
        '@media (max-width: 400px)': { bottom: 10, right: 10 },
      }}
    >
      <IconButton
        component='a'
        href={WHATS_APP_LINK}
        target='_blank'
        sx={{
          backgroundColor: '#62684e',
          transition: 'all 0.8s ease-out',
          boxShadow: 3,
          '&:hover': { transform: 'scale(1.05)', borderColor: '#62684e', backgroundColor: '#62684e' },
          width: { xs: '50px', sm: '55px', md: '65px' },
          height: { xs: '50px', sm: '55px', md: '65px' },
        }}
      >
        <WhatsAppIcon sx={{ color: 'white', fontSize: { xs: 22, sm: 26, md: 30 } }} />
      </IconButton>
    </Box>
  );
};

export default WhatsAppButton;
