import '../styles/futuristic.css';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Difference } from './components/Difference';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { Portfolio } from './components/Portfolio';
import { Results } from './components/Results';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Difference />
      <Process />
      <Team />
      <Portfolio />
      <Results />
      <CTA />
      <Footer />
    </div>
  );
}