import { CheckCircle2, MessageCircle, Search } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Ανακάλυψη & Matching',
    text: 'Η έξυπνη λογική συγκρίνει στυλ, όργανα, πόλη και Tech Rider. Όταν υπάρχει απόλυτη ταύτιση, εμφανίζεται Perfect Match με πράσινη ένδειξη στην κορυφή.',
  },
  {
    icon: MessageCircle,
    title: 'Αίτηση & chat',
    text: 'Στείλε αίτηση με ένα σύντομο μήνυμα. Μόλις γίνει αποδεκτή, ανοίγει chat για ημερομηνίες, αμοιβή και τεχνικές λεπτομέρειες.',
  },
  {
    icon: CheckCircle2,
    title: 'Κλείσιμο live',
    text: 'Το live κλειδώνει στην ατζέντα. Η πληρωμή γίνεται απευθείας μεταξύ σας, εκτός πλατφόρμας — χωρίς καμία προμήθεια από το Apollon.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-site">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
          Δωρεάν για όλους
        </p>
        <h2 className="mt-2 text-center text-2xl font-semibold text-white sm:text-3xl">Πώς λειτουργεί</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">
          Τρία βήματα από την ανακάλυψη μέχρι το live. Χωρίς συνδρομή, χωρίς κρυφές χρεώσεις.
        </p>
        <ol className="mt-12 space-y-0 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="relative flex gap-4 md:flex-col md:gap-0">
              <div className="flex flex-col items-center md:mb-5 md:flex-row md:items-center md:gap-3">
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-[0_0_16px_rgba(139,92,246,0.45)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {index < steps.length - 1 && (
                  <span className="mt-1 hidden h-full w-px flex-1 bg-gradient-to-b from-purple-500/40 to-transparent md:hidden" />
                )}
                <span className="mt-2 hidden text-xs font-medium text-slate-500 md:block">
                  0{index + 1}
                </span>
              </div>
              <div className="glass-card mb-6 flex-1 rounded-2xl p-6 md:mb-0">
                <p className="text-xs font-medium text-slate-500 md:hidden">0{index + 1}</p>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
