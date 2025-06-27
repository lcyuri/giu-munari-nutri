import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowDownward, WhatsApp } from '@mui/icons-material';
import homeImage from '../assets/home-image.jpg';
import '../App.css';
import { WHATS_APP_LINK } from '../constants/genericConstants';

interface HomeProps {
  isButtonVisible: boolean;
}

const Home: React.FC<HomeProps> = ({ isButtonVisible }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${homeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: isButtonVisible ? 1 : 0,
          animation: isButtonVisible ? 'fadeIn 0.5s ease-in-out' : 'fadeOut 0.5s ease-in-out',
          bottom: { xs: '20vh', sm: '5vh' }
        }}
      >
        <Button
          component='a'
          href={WHATS_APP_LINK}
          target='_blank'
          variant='outlined'
          startIcon={<WhatsApp />}
          sx={{
            fontWeight: 'bold',
            color: '#fff',
            borderColor: '#62684e',
            backgroundColor: '#62684e',
            marginBottom: { xs: '400px', sm: '0' },
            fontSize: { xs: '0.9rem', sm: '1.1rem' },
            padding: { xs: '10px 20px', sm: '14px 28px' },
            transition: 'all 0.8s ease-out',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        >
          CONVERSE COMIGO PELO WHATSAPP
        </Button>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            marginTop: { xs: '15px', sm: '30px' }
          }}
        >
          <Typography
            variant='h6'
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              marginBottom: '15px',
              fontSize: { xs: '0.8rem', sm: '1rem' }
            }}
          >
            CONHEÇA MEU TRABALHO
          </Typography>
          <ArrowDownward sx={{ animation: 'bounce 1.5s infinite', fontSize: { xs: '1.5rem', sm: '2rem' } }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
