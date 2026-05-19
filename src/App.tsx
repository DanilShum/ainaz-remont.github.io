import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Services from './components/Services';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ScrollToHash />
        <Routes>
          <Route path="/project/:id" element={
            <>
              <Header />
              <ProjectDetail />
              <Footer />
            </>
          } />
          <Route path="*" element={
            <>
              <Header />
              <main>
                <Hero />
                <Advantages />
                <Services />
                <Team />
                <Portfolio />
                <Contacts />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;