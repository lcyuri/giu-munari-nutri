import React from 'react';
import { Box, IconButton, Button, useTheme, useMediaQuery } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { WHATS_APP_LINK } from '../constants/genericConstants';

interface WhatsAppButtonProps {
  isButtonVisible?: boolean;
  variant: 'floating' | 'full';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ isButtonVisible, variant }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (variant === 'floating') {
    return (
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 9999,
          opacity: isButtonVisible ? 1 : 0,
          animation: isButtonVisible ? 'fadeIn 0.5s ease-in-out' : 'fadeOut 0.5s ease-in-out',
          '@media (max-width: 600px)': {
            bottom: 15,
            right: 15
          },
          '@media (max-width: 400px)': {
            bottom: 10,
            right: 10
          }
        }}
      >
        <IconButton
          href={WHATS_APP_LINK}
          target='_blank'
          size='large'
          sx={{ boxShadow: 5 }}
        >
          <WhatsAppIcon
            sx={{
              fontSize: {
                xs: '24px',
                sm: '30px',
                md: '34px',
                lg: '34px',
                xl: '34px'
              }
            }}
          />
        </IconButton>
      </Box>
    );
  }

  return (
    <Button
      href={WHATS_APP_LINK}
      target='_blank'
      variant='outlined'
      startIcon={<WhatsAppIcon />}
      size={isSmallScreen ? 'medium' : 'large'}
      sx={{
        border: 0,
        borderRadius: '4px',
        boxShadow: 5,
        fontWeight: 'bold',
        opacity: isButtonVisible ? 1 : 0,
        animation: isButtonVisible ? 'fadeIn 0.5s ease-in-out' : 'fadeOut 0.5s ease-in-out',
        height: {
          xs: '40px',
          sm: '44px',
          md: '48px',
          lg: '48px',
          xl: '48px'
        }
      }}
    >
      CONVERSE COMIGO PELO WHATSAPP
    </Button>
  );
};

export default WhatsAppButton;