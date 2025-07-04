import React from 'react';
import { Container, Grid2, Typography } from '@mui/material';
import WhatsAppButton from './WhatsAppButton';
interface ContactProps {
  isButtonVisible: boolean;
}

const About: React.FC<ContactProps> = ({ isButtonVisible }) => {
  return (
    <Container
      maxWidth='lg'
      fixed
      sx={{
        padding: {
          xs: '40px 20px',
          sm: '40px 0',
          md: '40px 0',
          lg: '40px 0',
          xl: '40px 0'
        }
      }}
    >
      <Grid2 alignItems='center' textAlign='center'>
        <Typography variant='subtitle1' gutterBottom>
          Se você sente que é hora de <strong>mudar seus hábitos</strong>, eu estou aqui para te ajudar a encontrar o caminho para uma <strong>vida mais saudável</strong>.
        </Typography>
        <Typography variant='h6' padding='20px 0 10px 0' fontWeight='bold'>
          VAMOS CONVERSAR?
        </Typography>
        <WhatsAppButton isButtonVisible={isButtonVisible} variant='full' />
      </Grid2>
    </Container>
  );
};

export default About;
