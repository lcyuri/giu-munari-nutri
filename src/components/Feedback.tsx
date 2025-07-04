import React from 'react';
import Slider from 'react-slick';
import { Card, Typography, Box, Grid2, CardMedia, Container, CardHeader, Avatar } from '@mui/material';
import { SLIDER_SETTINGS } from '../constants/genericConstants';

const images = [
  '1.png',
  '2.png',
  '3.png',
  '5.png',
  '7.png',
  '12.png',
  '13.png',
  '14.png',
  '15.png',
  '17.png',
  '18.png',
  '19.png',
  '20.png',
  '21.png',
].map(name => require(`../assets/feedbacks/${name}`));

const Feedback: React.FC = () => {
  return (
    <Container
      maxWidth='lg'
      fixed
      sx={{
        padding: {
          xs: '50px 20px',
          sm: '50px 20px',
          md: '50px 20px',
          lg: '50px 20px',
          xl: '50px 20px'
        }
      }}
    >
      <Grid2
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
      >
        <Typography variant='h4' align='center' gutterBottom>
          Veja a <strong>experiência</strong> dos meus clientes
        </Typography>
        <Box width='100%'>
          <Slider {...SLIDER_SETTINGS}>
            {images.map((image, index) => (
              <Card
                key={index}
                sx={{
                  boxShadow: 1,
                  maxWidth: {
                    xs: '100%',
                    sm: '95%',
                    md: '95%',
                    lg: '95%',
                    xl: '95%'
                  }
                }}
              >
                <CardMedia
                  component='img'
                  image={image}
                  alt={`Feedback ${index + 1}`}
                  sx={{
                    width: '90%',
                    height: 'auto',
                    margin: '0 auto',
                    padding: '10px',
                    display: 'block',
                  }}
                />
                <CardHeader
                  avatar={
                    <Avatar sx={{ backgroundColor:'#62684e' }}>
                      JP
                    </Avatar>
                  }
                  title='João Pedro'
                  subheader='10 de maio de 2025'
                />
              </Card>
            ))}
          </Slider>
        </Box>
      </Grid2>
    </Container>
  );
};

export default Feedback;