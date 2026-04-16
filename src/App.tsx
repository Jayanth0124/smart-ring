import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import FeatureShowcase from './components/sections/FeatureShowcase';
import LifestyleVideo from './components/sections/LifestyleVideo';
import GalleryScroll from './components/sections/GalleryScroll';
import TechSpecs from './components/sections/TechSpecs';
import SizingKit from './components/sections/SizingKit';
import Testimonials from './components/sections/Testimonials';
import ExpertAdvisory from './components/sections/ExpertAdvisory';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="relative font-sans bg-espresso-50 antialiased w-full">
      <Navbar />
      
      <main className="relative z-0">
        <Hero />
        <FeatureShowcase />
        <LifestyleVideo />
        <GalleryScroll />
        <TechSpecs />
        <SizingKit />
        <Testimonials />
        <ExpertAdvisory />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}