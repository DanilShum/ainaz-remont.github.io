import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Services from './components/Services';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;