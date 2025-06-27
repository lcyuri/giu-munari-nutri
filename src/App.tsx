import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Advantage from './components/Advantage';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(true);
  const [isHomeVisible, setIsHomeVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const observerOptions = { root: null, threshold: 0.7 };

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.target.id === 'home') setIsHomeVisible(entry.isIntersecting);
      if (entry.target.id === 'contact') setIsContactVisible(entry.isIntersecting);
      if (entry.target.id === 'footer') setIsFooterVisible(entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const homeEl = document.getElementById('home');
    if (homeEl) observer.observe(homeEl);

    const contactEl = document.getElementById('contact');
    if (contactEl) observer.observe(contactEl);

    const footerEl = document.getElementById('footer');
    if (footerEl) observer.observe(footerEl);

    return () => observer.disconnect();
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
        <Home isButtonVisible={!showWhatsApp}/>
      </div>
      <Feedback />
      <hr />
      <About />
      <hr />
      <Advantage />
      <hr />
      <div id='contact'>
        <Contact isButtonVisible={!showWhatsApp} />
      </div>
      <div id='footer'>
        <Footer />
      </div>
      <WhatsAppButton isButtonVisible={showWhatsApp}/>
    </div>
  );
};

export default App;
