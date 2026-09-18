import { APP_NAME, HERO_HEADLINE, HERO_SUB, TAGLINE } from '../config';
import PhoneMockup from './PhoneMockup';
import QrBlock from './QrBlock';
import StoreBadges from './StoreBadges';

const highlights = ['Δωρεάν για όλους', 'Χωρίς προμήθεια', 'iOS & Android'];

export default function Hero() {
  return (
    <section className="relative px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:pb-24">
      <div className="mx-auto grid max-w-site items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
            {TAGLINE}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            {HERO_HEADLINE}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            {HERO_SUB}
          </p>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-6 lg:items-start">
            <StoreBadges />
            <p className="max-w-md text-sm text-slate-500">
              Η εφαρμογή είναι διαθέσιμη στο App Store και στο Google Play. Η web έκδοση έρχεται σύντομα.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-end">
          <PhoneMockup />
          <QrBlock />
        </div>
      </div>
      <p className="sr-only">{APP_NAME}</p>
    </section>
  );
}
