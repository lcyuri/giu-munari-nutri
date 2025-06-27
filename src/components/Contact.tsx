import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATS_APP_LINK } from '../constants/genericConstants';

interface ContactProps {
  isButtonVisible: boolean;
}

const About: React.FC<ContactProps> = ({ isButtonVisible }) => {
  return (
    <Container
      id='contact-container'
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        flexDirection: { xs: 'column', sm: 'row' },
        padding: { xs: '50px 20px', sm: '60px 0', md: '60px 0' },
        gap: { xs: '40px', sm: '30px', md: '150px' }
      }}
    >
      <Box sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant='body1' sx={{ fontStyle: 'italic', marginBottom: '10px' }}>
          Se você sente que é hora de mudar seus hábitos, eu estou aqui para te ajudar a encontrar o caminho para uma vida mais saudável.
        </Typography>
        <Typography variant='h3' sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
          VAMOS CONVERSAR?
        </Typography>
        <Box
          sx={{
            opacity: isButtonVisible ? 1 : 0,
            animation: isButtonVisible ? 'fadeIn 0.5s ease-in-out' : 'fadeOut 0.5s ease-in-out',
          }}
        >
          <Button
            component='a'
            href={WHATS_APP_LINK}
            target='_blank'
            variant='outlined'
            startIcon={<FaWhatsapp />}
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              borderColor: '#62684e',
              backgroundColor: '#62684e',
              transition: 'all 0.7s ease-out',
              marginTop: '20px',
              '&:hover': { transform: 'scale(1.05)' },
              fontSize: { xs: '0.75rem', sm: '0.9rem' },
              padding: { xs: '6px 12px', sm: '10px 20px' }
            }}
          >
            CONVERSE COMIGO PELO WHATSAPP
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
