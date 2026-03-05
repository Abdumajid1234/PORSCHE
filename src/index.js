import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Section1 from './components/Section1';
import bgVideo from './bgvideo.mp4'; // Fayl yo'li to'g'riligini tekshiring
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <video
      className="bg-video"
      autoPlay   // 'p' harfi katta
      muted      // Ovoz o'chirilgan bo'lishi shart (autoplay uchun)
      loop       // Takrorlanish
      playsInline // Mobil brauzerlar uchun muhim
    >
      <source src={bgVideo} type="video/mp4" />
      Sizning brauzeringiz videoni qo'llab-quvvatlamaydi.
    </video>

    <Home />
    <Section1/>
    <Footer/>

  </React.StrictMode>
);