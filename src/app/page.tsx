import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import KeyFeatures from '../components/KeyFeatures';
import KCCertification from '../components/KCCertification';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <KeyFeatures />
      <KCCertification />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
