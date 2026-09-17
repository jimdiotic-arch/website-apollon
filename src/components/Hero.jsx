import { Mic2, Store } from 'lucide-react';
import { APP_NAME, HERO_SUB, TAGLINE } from '../config';
import QrBlock from './QrBlock';
import StoreBadges from './StoreBadges';

const sides = [
  {
    icon: Mic2,
    title: 'Καλλιτέχνες',
    text: 'Βρες live gigs για το σχήμα σου. Matching με μαγαζιά που καλύπτουν το στυλ και το Tech Rider σου.',
  },
  {
    icon: Store,
    title: 'Venues',
    text: 'Ανακάλυψε τους καλύτερους καλλιτέχνες για το μαγαζί ή το event σου και κλείσε εμφάνιση με chat.',
  },
];

export default function Hero() {
  return (
    <section className="relative px-4 pb-16 pt-8 sm:pt-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="relative mb-6">
          <div
            className="absolute inset-0 -m-8 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 p-1 sm:h-28 sm:w-28">
            <img src="/icon.png" alt={`${APP_NAME} logo`} className="h-full w-full object-contain" />
          </div>
        </div>

        <h1 className="wordmark text-4xl sm:text-5xl">{APP_NAME}</h1>
        <p className="mt-3 text-lg font-medium tracking-wide text-violet-200 sm:text-xl">{TAGLINE}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{HERO_SUB}</p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-6 md:flex-row md:items-start">
          <div className="flex flex-col items-center">
            <StoreBadges />
          </div>
          <QrBlock />
        </div>

        <div className="mt-12 grid w-full gap-4 sm:grid-cols-2">
          {sides.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-brand-dark/70 p-6 text-left backdrop-blur-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
