import { CalendarHeart, Mic2, Store } from 'lucide-react';

const audiences = [
  {
    icon: Mic2,
    title: 'Καλλιτέχνες',
    subtitle: 'Solo · Μπάντα · DJ',
    text: 'Βρες live gigs που ταιριάζουν στο στυλ και το Tech Rider σου, ή συνεργάσου με άλλα σχήματα. Το Perfect Match ανεβαίνει στην κορυφή της λίστας.',
  },
  {
    icon: Store,
    title: 'Venues',
    subtitle: 'Cafe / Bar · Εστιατόριο · Σκηνή · Club',
    text: 'Δημοσίευσε αγγελία, δες καλλιτέχνες που ταιριάζουν στον χώρο σου και κλείσε εμφάνιση με chat. Τα venues δεν βλέπουν άλλα μαγαζιά — μόνο μουσικούς.',
  },
  {
    icon: CalendarHeart,
    title: 'Ιδιωτικά events',
    subtitle: 'Γάμος · Πάρτι · Corporate · Festival',
    text: 'Όρισε budget, διάρκεια και τύπο εκδήλωσης. Το Apollon σου προτείνει σχήματα που καλύπτουν την αισθητική και την πόλη σου.',
  },
];

export default function Audiences() {
  return (
    <section className="relative px-4 pb-8 sm:px-6" aria-labelledby="audiences-title">
      <div className="mx-auto max-w-site">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
          Για ποιον είναι
        </p>
        <h2 id="audiences-title" className="mt-2 text-center text-2xl font-semibold text-white sm:text-3xl">
          Μία εφαρμογή, δύο κόσμοι
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-400">
          Το Apollon είναι μέσο επικοινωνίας και σύνδεσης μεταξύ καλλιτεχνών και χώρων. Η πληρωμή γίνεται απευθείας μεταξύ σας.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {audiences.map(({ icon: Icon, title, subtitle, text }) => (
            <article key={title} className="glass-card rounded-2xl p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-xs font-medium tracking-wide text-violet-300/80">
                {subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
