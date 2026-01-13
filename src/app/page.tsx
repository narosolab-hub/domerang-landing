import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import KCCertification from '../components/KCCertification';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Vision from '../components/Vision';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <KCCertification />
      <Features />
      <HowItWorks />
      <Vision />
      <CTA />
      <Footer />
    </main>
  );
}