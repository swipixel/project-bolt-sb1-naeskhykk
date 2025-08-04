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
       <div className="app-background text-ecru">
         <CustomCursor />
         <Header />
         <Hero />
         <Menu />
         <Events />
         {/*<LiveDock /> */}
-        <SpotifySection />
         <Reservation />
+        <SpotifySection />
         <Footer />
       </div>
     </AnimationProvider>
   );
 }
 
 export default App;
