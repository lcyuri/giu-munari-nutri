import React from 'react';
import { Box, Typography, Card, CardContent, Container, Grid } from '@mui/material';
import { SupportAgent, Fastfood, PlaylistAddCheck, Mood } from '@mui/icons-material';

const Advantage: React.FC = () => {
  const cardsContent = [
    {
      title: 'Suporte Personalizado',
      content: 'Estarei ao seu lado em cada etapa da sua jornada, ajudando a superar dificuldades e alcançando seus sonhos.',
      icon: <SupportAgent sx={{ fontSize: 40, color: '#F6F1E5' }} />
    },
    {
      title: 'Dieta Flexível e Adaptada',
      content: 'Uma dieta totalmente flexível que se ajusta à sua realidade, com substituições personalizadas.',
      icon: <Fastfood sx={{ fontSize: 40, color: '#F6F1E5' }} />
    },
    {
      title: 'Plano Personalizado',
      content: 'Respeito suas preferências e metas, sem dietas genéricas. Planos adaptados à sua rotina.',
      icon: <PlaylistAddCheck sx={{ fontSize: 40, color: '#F6F1E5' }} />
    },
    {
      title: 'Controle Emocional',
      content: 'Te ajudo a lidar com as fomes emocionais, superando a ansiedade e o estresse ligados à alimentação.',
      icon: <Mood sx={{ fontSize: 40, color: '#F6F1E5' }} />
    },
  ];

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '40vh',
        padding: {
          xs: '50px 20px',
          sm: '60px 0',
          md: '60px 0' 
        }
      }}
    >
      <div>
        <Typography
          sx={{
            textAlign: 'center',
            marginBottom: 4,
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
              md: '2.5rem' 
            },
          }}
        >
          QUAL É O DIFERENCIAL DA MINHA CONSULTORIA?
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {cardsContent.map((card: any, index: number) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >
              <Card
                sx={{
                  backgroundColor: '#62684e',
                  boxShadow: 20,
                  borderRadius: '8px',
                  color: '#F6F1E5',
                  height: '100%',
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                  }}
                >
                  <Box sx={{ marginBottom: '16px' }}>
                    {card.icon}
                  </Box>
                  <Typography
                    variant='h6'
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      marginBottom: '16px',
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    align='center'
                    sx={{ fontSize: '0.875rem' }}
                  >
                    {card.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Advantage;
