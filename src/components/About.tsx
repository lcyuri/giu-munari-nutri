import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import aboutImage from '../assets/about-image.jpg';

const About: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '60vh',
        padding: {
          xs: '50px 20px',
          sm: '60px 0',
          md: '60px 0' 
        },
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        gap: { 
          xs: 0, 
          sm: '30px',
          md: '80px'
        }
      }}
    >
      <Box
        sx={{
          flex: 1,
          textAlign: 'center' 
        }}
      >
        <Typography
          variant='h3'
          sx={{
            marginBottom: 4,
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
              md: '2.5rem'
            },
          }}
        >
          SOBRE MIM
        </Typography>
        <Typography
          variant='body1'
          sx={{
            textAlign: 'justify',
            lineHeight: {
              xs: '1.5',
              sm: '2',
              md: '2.5'
            },
            fontSize: {
              xs: '0.875rem',
              sm: '1rem'
            }
          }}
        >
          Eu sou <strong>Giulia Munari</strong>, nutricionista, pós-graduanda em <strong>Nutrição Clínica, Nutrição Esportiva e Exames Laboratoriais</strong>, mas minha primeira formação foi em odontologia.
          Apesar de concluir o curso, eu não me sentia realizada, e foi na nutrição que encontrei o meu verdadeiro <strong>propósito de vida</strong>.
          Minha escolha veio da minha própria história: fui uma criança acima do peso, <strong>convivi com a obesidade</strong>,
          enfrentei o <strong>efeito sanfona, dietas restritivas, transtornos alimentares e distúrbios de imagem</strong>.
          Minha relação com a saúde e a alimentação mudou completamente quando me apaixonei pelos esportes.
          Entendi que <strong>é possível ter um estilo de vida saudável sem abrir mão</strong>  do que gostamos de comer ou dos momentos sociais.
          Hoje, <strong>minha missão é te guiar</strong> até seus objetivos, através de um caminho que una <strong>equilíbrio, saúde e bem-estar</strong>.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          minHeight: 530,
          height: '100%',
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          flex: 1,
          marginTop: {
            xs: 3,
            sm: 0
          }
        }}
      />
    </Container>
  );
};

export default About;
