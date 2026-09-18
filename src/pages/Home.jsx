import Audiences from '../components/Audiences';
import DownloadCta from '../components/DownloadCta';
import Faq from '../components/Faq';
import Features from '../components/Features';
import FreeBanner from '../components/FreeBanner';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import { usePageTitle } from '../lib/usePageTitle';

export default function Home() {
  usePageTitle('');
  return (
    <>
      <Hero />
      <Audiences />
      <HowItWorks />
      <Features />
      <FreeBanner />
      <Faq />
      <DownloadCta />
    </>
  );
}
