import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Partners } from './components/Partners';
import { Roadmap } from './components/Roadmap';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import TryNow from './components/TryNow';
import { HowItWorks } from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-white">
      <Navbar />
      <Hero />
      <Pricing />
      <Features />
      <HowItWorks />
      <TryNow />
      <Partners />
      <Roadmap />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;