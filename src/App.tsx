import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import PressReel from './components/sections/PressReel'; // NEW: Corporate Trust
import Manifesto from './components/sections/Manifesto'; // Massively Expanded Philosophy
import DetailedFeatures from './components/sections/DetailedFeatures'; // Upgraded with Icons & Text
import MaterialScience from './components/sections/MaterialScience'; // NEW: Deep Dive
import DailyRhythm from './components/sections/DailyRhythm';
import SmartCoaching from './components/sections/SmartCoaching';
import TechnicalSpecs from './components/sections/TechnicalSpecs';
import SizingKit from './components/sections/SizingKit';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="relative font-sans bg-white antialiased w-full text-zinc-900">
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <PressReel />
        <Manifesto />
        <DetailedFeatures />
        <MaterialScience />
        <DailyRhythm />
        <SmartCoaching />
        <TechnicalSpecs />
        <SizingKit />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}