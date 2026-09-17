import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import { usePageTitle } from '../lib/usePageTitle';

export default function Home() {
  usePageTitle('');
  return (
    <>
      <Hero />
      <HowItWorks />
    </>
  );
}
