import React from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';
import aboutImage from '../assets/about.png';

const About: React.FC = () => {
  return (
    <Container
      maxWidth='lg'
      fixed
      sx={{
        padding: {
          xs: '50px 20px 40px 20px',
          sm: '50px 20px 40px 20px',
          md: '50px 0',
          lg: '50px 0',
          xl: '50px 0'
        }
      }}
    >
      <Grid2
        container
        spacing={{
          xs: 2,
          sm: 2,
          md: 0,
          lg: 0,
          xl: 0
        }}
        flexDirection={{
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row'
        }}
      >
        <Grid2
          display='flex'
          flexDirection='column'
          justifyContent='center'
          size={{
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
            xl: 6
          }}
          sx={{
            textAlign: {
              xs: 'justify',
              sm: 'justify',
              md: 'left',
              lg: 'left',
              xl: 'left'
            }
          }}
        >
          <Typography
            variant='h4'
            gutterBottom
            sx={{
              textAlign: {
                xs: 'center',
                sm: 'center',
                md: 'left',
                lg: 'left',
                xl: 'left'
              }
            }}
          >
            Eu sou <strong>Giulia Munari</strong>...
          </Typography>
          <Typography variant='subtitle1'>
            Nutricionista, pós-graduanda em <strong>Nutrição Clínica, Nutrição Esportiva e Exames Laboratoriais</strong>, mas minha primeira formação foi em odontologia.
            Apesar de concluir o curso, eu não me sentia realizada, e foi na nutrição que encontrei o meu verdadeiro <strong>propósito de vida</strong>.
            Minha escolha veio da minha própria história: fui uma criança acima do peso, <strong>convivi com a obesidade</strong>,
            enfrentei o <strong>efeito sanfona, dietas restritivas, transtornos alimentares e distúrbios de imagem</strong>.
            Minha relação com a saúde e a alimentação mudou completamente quando me apaixonei pelos esportes.
            Entendi que <strong>é possível ter um estilo de vida saudável sem abrir mão</strong> do que gostamos de comer ou dos momentos sociais.
            Hoje, <strong>minha missão é te guiar</strong> até seus objetivos, através de um caminho que una <strong>equilíbrio, saúde e bem-estar</strong>.
          </Typography>
        </Grid2>
        <Grid2
          display='flex'
          alignItems='center'
          justifyContent={{
            xs: 'center',
            sm: 'center',
            md: 'right',
            lg: 'right',
            xl: 'right'
          }}
          size={{
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
            xl: 6
          }}
        >
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          width='100%'
        >
          <img src={aboutImage} style={{ width: '100%' }} alt='sobre' />
        </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default About;
