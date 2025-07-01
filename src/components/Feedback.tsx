import React from 'react';
import Slider from 'react-slick';
import { Card, Typography, Box, Grid2, CardMedia } from '@mui/material';
import { FEEDBACK_SETTINGS } from '../constants/genericConstants';

const images = [
  'feedback-image-1.png',
  'feedback-image-2.png',
  'feedback-image-3.png',
  'feedback-image-5.png',
  'feedback-image-7.png',
  'feedback-image-12.png',
  'feedback-image-13.png',
  'feedback-image-14.png',
  'feedback-image-15.png',
  'feedback-image-17.png',
  'feedback-image-18.png',
].map(name => require(`../assets/feedbacks/${name}`));

const Feedback: React.FC = () => {
  return (
    <Grid2
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
      minHeight='40vh'
      sx={{
        padding: {
          xs: '50px 20px',
          sm: '60px 0',
          md: '60px 0',
          lg: '60px 0',
          xl: '60px 0'
        }
      }}
    >
      <Typography variant='h4' align='center' gutterBottom>
        FEEDBACKS
      </Typography>
      <Box
        sx={{
          width: {
            xs: '90%',
            sm: '80%',
            md: '80%',
            lg: '80%',
            xl: '60%'
          }
        }}
      >
        <Slider {...FEEDBACK_SETTINGS}>
          {images.map((image, index) => (
            <Card
              key={index}
              sx={{
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
                sx={{ aspectRatio: '4 / 3' }}
              />
            </Card>
          ))}
        </Slider>
      </Box>
    </Grid2>
  );
};

export default Feedback;