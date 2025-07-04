export const WHATS_APP_LINK = `https://wa.me/+5551996060155?text=${encodeURIComponent('Olá Giu, gostaria de agendar uma consulta!')}`;

export const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1535, // xl and below
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1199, // lg and below
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 899, // sm and below
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 599, // sm and below
      settings: {
        slidesToShow: 2,
        vertical: true,
        arrows: false
      }
    }
  ],
};

export const BUTTON_STYLE_SETTINGS = {
  styleOverrides: {
    root: {
      backgroundColor: '#8d9773',
      color: '#fff',
      transition: 'background 0.3s',
      '&:hover': {
        backgroundColor: '#62684e'
      }
    }
  }
};

export const TYPOGRAPHY_SETTINGS = {
  h4: {
    fontFamily: 'Montserrat, sans-serif',
    paddingBottom: '10px'
  },
  h6: {
    fontFamily: 'Montserrat, sans-serif'
  },
  subtitle1: {
    fontFamily: 'Open Sans, sans-serif'
  }
};
