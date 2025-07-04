import React from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';
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
        <Typography variant='body1' gutterBottom>
          Se você sente que é hora de <strong>mudar seus hábitos</strong>, eu estou aqui para te ajudar a encontrar o caminho para uma <strong>vida mais saudável</strong>.
        </Typography>
        <Typography variant='h4'>
          <strong>Vamos conversar?</strong>
        </Typography>
        <Box marginTop='30px'>
          <WhatsAppButton isButtonVisible={isButtonVisible} variant='full' />
        </Box>
      </Grid2>
    </Container>
  );
};

export default About;
