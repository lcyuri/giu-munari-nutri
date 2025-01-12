import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

const About: React.FC = () => {
  const [opacity, setOpacity] = useState(0);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibility = entry.intersectionRatio;
            setOpacity(visibility);
          } else {
            setOpacity(0);
          }
        });
      },
      {
        threshold: [0, 1],
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <Container
      ref={contactRef}
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        padding: {
          xs: '50px 20px',
          sm: '60px 0',
          md: '60px 0'
        },
        gap: {
          xs: '40px',
          sm: '30px',
          md: '150px'
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          textAlign: 'center' 
        }}
      >
        <Typography
          variant='body1'
          sx={{
            fontStyle: 'italic',
            marginBottom: '10px'
          }}
        >
          Se você sente que é hora de mudar seus hábitos, eu estou aqui para te ajudar a encontrar o caminho para uma vida mais saudável.
        </Typography>
        <Typography
          variant='h3'
          sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
              md: '2.5rem'
            }
          }}
        >
          VAMOS CONVERSAR?
        </Typography>
        <Box 
          sx={{
            opacity: opacity,
            transition: 'opacity 0.8s ease'
          }}
        >
          <Button
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
              fontSize: {
                xs: '0.75rem',
                sm: '0.9rem'
              },
              padding: {
                xs: '6px 12px',
                sm: '10px 20px'
              }
            }}
          >
            CONVERSE COMIGO PELO WHATSAPP
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography
          variant='body1'
          sx={{
            fontWeight: 'bold',
            marginBottom: 2
          }}
        >
          Me encontre também em:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: { sm: 'row' },
            gap: 2
          }}
        >
          <Box
            sx={{
              display: 'flex', 
              alignItems: 'center'
            }}
          >
            <IconButton
              href='https'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                backgroundColor: '#E4405F',
                color: 'white',
                marginRight: '10px',
                '&:hover': { backgroundColor: '#C13584' },
                fontSize: {
                  xs: '0.875rem',
                  sm: '0.9rem',
                  md: '1rem'
                }
              }}
            >
              <FaInstagram />
            </IconButton>
            <Typography
              variant='subtitle1'
              sx={{
                fontWeight: 'bold',
                color: '#E4405F',
                fontSize: {
                  xs: '0.875rem',
                  sm: '0.9rem',
                  md: '1rem'
                }
              }}
            >
              Instagram
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              href='https'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                backgroundColor: '#000000',
                color: 'white',
                marginRight: '10px',
                '&:hover': { backgroundColor: '#333333' },
                fontSize: {
                  xs: '0.875rem',
                  sm: '0.9rem',
                  md: '1rem'
                }
              }}
            >
              <FaTiktok />
            </IconButton>
            <Typography
              variant='subtitle1'
              sx={{
                fontWeight: 'bold',
                color: '#000000',
                fontSize: {
                  xs: '0.875rem',
                  sm: '0.9rem',
                  md: '1rem'
                }
              }}
            >
              TikTok
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
