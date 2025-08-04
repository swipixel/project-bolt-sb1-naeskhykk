import React from 'react';
import { AnimationProvider } from './components/AnimationProvider';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Events from './components/Events';
import LiveDock from './components/LiveDock';
import SpotifySection from './components/SpotifySection';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <AnimationProvider>
      <div className="min-h-screen app-background text-ecru">
        <CustomCursor />
        <Header />
        <main className="relative z-10">
          <Hero />
          <Menu />
          <Events />
          <Reservation />
          <SpotifySection />
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  );
}

export default App;