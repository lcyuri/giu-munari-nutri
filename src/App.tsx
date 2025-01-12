import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Advantage from './components/Advantage';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Box, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const App: React.FC = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(true);
  const [isHomeVisible, setIsHomeVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target.id === 'home') {
          setIsHomeVisible(entry.isIntersecting);
        }
        if (entry.target.id === 'contact') {
          setIsContactVisible(entry.isIntersecting);
        }
        if (entry.target.id === 'footer') {
          setIsFooterVisible(entry.isIntersecting);
        }
      });
    }, {
      root: null,
      threshold: 0.7,
    });
    observer.observe(document.getElementById('home')!);
    observer.observe(document.getElementById('contact')!);
    observer.observe(document.getElementById('footer')!);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isHomeVisible || isContactVisible || isFooterVisible) {
      setShowWhatsApp(false);
    } else {
      setShowWhatsApp(true);
    }
  }, [isHomeVisible, isContactVisible, isFooterVisible]);

  return (
    <div className='app'>
      <div id='home'>
        <Home />
      </div>
      <div>
        <Feedback />
      </div>
      <hr />
      <div>
        <About />
      </div>
      <hr />
      <div>
        <Advantage />
      </div>
      <hr />
      <div id='contact'>
        <Contact />
      </div>
      <div id='footer'>
        <Footer />
      </div>
      {showWhatsApp && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 9999,
            opacity: showWhatsApp ? 1 : 0,
            transition: 'opacity 0.5s ease',
            animation: showWhatsApp ? 'fadeIn 0.5s ease-in-out' : 'fadeOut 0.5s ease-in-out',
            '@media (max-width: 600px)': {
              bottom: 15,
              right: 15,
            },
            '@media (max-width: 400px)': {
              bottom: 10,
              right: 10,
            },
          }}
        >
          <IconButton
            component='a'
            href={`https://wa.me/+5551981860155?text=${encodeURIComponent('Olá Giu, gostaria de agendar uma consulta!')}`}
            target='_blank'
            sx={{
              backgroundColor: '#62684e',
              transition: 'all 0.8s ease-out',
              boxShadow: 3,
              '&:hover': {
                transform: 'scale(1.05)',
                borderColor: '#62684e',
                backgroundColor: '#62684e',
              },
              width: {
                xs: '50px',
                sm: '55px',
                md: '65px',
              },
              height: {
                xs: '50px',
                sm: '55px',
                md: '65px'
              },
            }}
          >
            <WhatsAppIcon
              sx={{
                color: 'white',
                fontSize: {
                  xs: 22,
                  sm: 26,
                  md: 30
                }
              }}
            />
          </IconButton>
        </Box>
      )}
    </div>
  );
};

export default App;
