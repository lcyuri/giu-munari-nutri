import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import homeImage from '../assets/home-image.jpg';
import WhatsAppButton from './WhatsAppButton';

interface HomeProps {
  isButtonVisible: boolean;
}

const Home: React.FC<HomeProps> = ({ isButtonVisible }) => {
  return (
    <Container disableGutters maxWidth={false}>
      <Box
        height='100vh'
        display='flex'
        flexDirection='column'
        justifyContent='end'
        alignItems='center'
        textAlign='center'
        color='#fff'
        position='relative'
        sx={{
          backgroundImage: `url(${homeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Box paddingBottom="20px">
          <WhatsAppButton isButtonVisible={isButtonVisible} variant='full' />
          <Typography
            variant="body1"
            margin="20px 0 10px 0"
            fontWeight='bold'
          >
            CONHEÇA MEU TRABALHO
          </Typography>
          <ArrowDownward
            sx={{
              animation: 'bounce 1.5s infinite',
              fontSize: '30px'
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
