import React, { ReactNode } from 'react';
import { Typography, Card, CardContent, Container, Grid2 } from '@mui/material';
import { SupportAgent, Fastfood, PlaylistAddCheck, Mood } from '@mui/icons-material';

interface CardContentProps {
  title: string;
  content: string;
  icon: ReactNode;
}

const Advantage: React.FC = () => {
  const cardsContent: CardContentProps[] = [
    {
      title: 'Dieta Flexível',
      content: 'Uma dieta totalmente flexível que se ajusta à sua realidade, com substituições personalizadas.',
      icon: <Fastfood sx={{ fontSize: 40, color: '#F6F1E5' }} />
    },
    {
      title: 'Suporte Personalizado',
      content: 'Estarei ao seu lado em cada etapa da sua jornada, ajudando a superar dificuldades e alcançando seus sonhos.',
      icon: <SupportAgent sx={{ fontSize: 40, color: '#F6F1E5' }} />
    },
    {
      title: 'Plano Exclusivo',
      content: 'Respeito suas preferências e metas, sem dietas genéricas. Planos adaptados à sua rotina.',
      icon: <PlaylistAddCheck sx={{ fontSize: 48, color: '#F6F1E5', marginBottom: '-7px' }} />
    },
    {
      title: 'Controle Emocional',
      content: 'Te ajudo a lidar com as fomes emocionais, superando a ansiedade e o estresse ligados à alimentação.',
      icon: <Mood sx={{ fontSize: 40, color: '#F6F1E5' }} />
    },
  ];

  return (
    <Container
      maxWidth='lg'
      fixed
      sx={{
        padding: {
          xs: '50px 20px',
          sm: '50px 0',
          md: '50px 0',
          lg: '50px 0',
          xl: '50px 0'
        }
      }}
    >
      <Typography variant='h4' gutterBottom align='center'>
        Qual é o <strong>diferencial</strong> da minha consulta?
      </Typography>
      <Grid2
        container
        spacing={2}
        flexDirection={{
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row'
        }}
      >
        {cardsContent.map(card => (
          <Grid2
            size={{
              xs: 12,
              sm: 12,
              md: 6,
              lg: 3,
              xl: 3
            }}
          >
            <Card
              sx={{
                backgroundColor: '#62684e',
                color: '#F6F1E5',
                height: '100%',
                alignContent: 'center',
                justifyContent: 'center',
                display: 'flex',
                boxShadow: 2
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '16px'
                }}
              >
                <Typography align='center'>{card.icon}</Typography>
                <Typography
                  variant='h6'
                  align='center'
                  gutterBottom
                  sx={{ marginTop: '16px' }}
                >
                  <strong>{card.title}</strong>
                </Typography>
                <Typography variant='subtitle1' align='center'>
                  {card.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Advantage;
