import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowDownward, WhatsApp } from '@mui/icons-material';
import homeImage from '../assets/home-image.jpg';
import '../App.css';

const Home: React.FC = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300;
      const newOpacity = 1 - Math.min(scrollY / maxScroll, 1);
      setOpacity(newOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${homeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
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
          bottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: opacity,
          transition: 'opacity 0.2s ease',
        }}
      >
        <Button
          variant='outlined'
          startIcon={<WhatsApp />}
          sx={{
            fontWeight: 'bold',
            color: '#fff',
            borderColor: '#62684e',
            backgroundColor: '#62684e',
            fontSize: {
              xs: '0.9rem',
              sm: '1.1rem'
            },
            padding: {
              xs: '10px 20px',
              sm: '14px 28px'
            },
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
            marginTop: {
              xs: '15px',
              sm: '30px'
            }
          }}
        >
          <Typography
            variant='h6'
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              marginBottom: '15px',
              fontSize: {
                xs: '0.8rem',
                sm: '1rem'
              }
            }}
          >
            CONHEÇA MEU TRABALHO
          </Typography>
          <ArrowDownward
            sx={{
              animation: 'bounce 1.5s infinite',
              fontSize: {
                xs: '1.5rem',
                sm: '2rem'
              }
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
