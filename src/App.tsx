import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter basename="/ainaz-remont.github.io">
      <div className="app">
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