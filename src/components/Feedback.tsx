import React from 'react';
import Slider from 'react-slick';
import { Container, Card, Typography, Box } from '@mui/material';

const imageNames = [
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
];

const images = imageNames.map(name => require(`../assets/feedbacks/${name}`));

const Feedback: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        vertical: true,
        verticalSwiping: false,
        arrows: false
      }
    }]
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '40vh',
        padding: { xs: '50px 20px', sm: '60px 0', md: '60px 0' }
      }}
    >
      <div>
        <Typography variant='h3' sx={{ textAlign: 'center', marginBottom: 4, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }}}>
          FEEDBACKS
        </Typography>
        <Box
          sx={{
            width: '100%',
            margin: '0 auto',
            maxWidth: { xs: '300px', sm: '400px', md: '1250px' }
          }}
        >
          <Slider {...settings}>
            {images.map((image: string, index: number) => (
              <div key={index}>
                <Card
                  sx={{
                    backgroundColor: '#fff',
                    height: '201px',
                    width: '100%',
                    maxWidth: '290px',
                    boxShadow: 0,
                    borderRadius: '8px'
                  }}
                >
                  <img
                    src={image}
                    alt={`Feedback ${index + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Card>
              </div>
            ))}
          </Slider>
        </Box>
      </div>
    </Container>
  );
};

export default Feedback;


