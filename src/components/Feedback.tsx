import React from 'react';
import Slider from 'react-slick';
import { Container, Card, Typography, Box } from '@mui/material';
import feedBackImage1 from '../assets/feedbacks/feedback-image-1.png';
import feedBackImage2 from '../assets/feedbacks/feedback-image-2.png'
import feedBackImage3 from '../assets/feedbacks/feedback-image-3.png';
import feedBackImage4 from '../assets/feedbacks/feedback-image-5.png';
import feedBackImage5 from '../assets/feedbacks/feedback-image-7.png';
import feedBackImage6 from '../assets/feedbacks/feedback-image-12.png';
import feedBackImage7 from '../assets/feedbacks/feedback-image-13.png';
import feedBackImage8 from '../assets/feedbacks/feedback-image-14.png';
import feedBackImage9 from '../assets/feedbacks/feedback-image-15.png';
import feedBackImage10 from '../assets/feedbacks/feedback-image-17.png';
import feedBackImage11 from '../assets/feedbacks/feedback-image-18.png';

const images = [
  feedBackImage1,
  feedBackImage2,
  feedBackImage3,
  feedBackImage4,
  feedBackImage5,
  feedBackImage6,
  feedBackImage7,
  feedBackImage8,
  feedBackImage9,
  feedBackImage10,
  feedBackImage11,
];

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

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
          md: '60px 0',
        }
      }}
    >
      <div>
        <Typography
          variant='h3'
          sx={{
            textAlign: 'center',
            marginBottom: 4,
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
              md: '2.5rem',
            },
          }}
        >
          FEEDBACKS
        </Typography>
        <Box 
          sx={{
            width: '100%',
            margin: '0 auto',
            maxWidth: {
              xs: '300px',
              sm: '400px',
              md: '1250px'
            }
          }}
        >
          <Slider {...settings}>
            {images.map((image: string, index: number) => (
              <div key={index}>
                <Card
                  sx={{
                    backgroundColor: '#fff',
                    height: '200px',
                    width: '100%',
                    maxWidth: '290px',
                    boxShadow: 0,
                    borderRadius: '8px',
                  }}
                >
                  <img
                    src={image}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
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


