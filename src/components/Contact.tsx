import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const whatsAppLink = `https://wa.me/+5551996060155?text=${encodeURIComponent('Olá Giu, gostaria de agendar uma consulta!')}`;

  const observerOptions = { threshold: [0, 1] };

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.target.id === 'contact-container') setIsVisible(entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sectionEl = document.getElementById('contact-container');
    if (sectionEl) observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

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
        <Box sx={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
          <Button
            component='a'
            href={whatsAppLink}
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
