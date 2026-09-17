import { CheckCircle2, MessageCircle, Search } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Ανακάλυψη & Matching',
    text: 'Καλλιτέχνες βρίσκουν μαγαζιά που ψάχνουν live. Venues ανακαλύπτουν σχήματα που ταιριάζουν στο στυλ και το Tech Rider τους.',
  },
  {
    icon: MessageCircle,
    title: 'Άμεση επικοινωνία',
    text: 'Στείλε αίτηση με ένα μήνυμα. Μόλις γίνει αποδεκτή, ανοίγει chat για ημερομηνίες, αμοιβή και τεχνικές λεπτομέρειες.',
  },
  {
    icon: CheckCircle2,
    title: 'Κλείσιμο live',
    text: 'Το live κλειδώνει στην ατζέντα. Η πληρωμή γίνεται απευθείας μεταξύ σας, εκτός πλατφόρμας — χωρίς προμήθεια από το Apollon.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative px-4 pb-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
          Δωρεάν για όλους
        </p>
        <h2 className="mt-2 text-center text-2xl font-semibold text-white sm:text-3xl">Πώς λειτουργεί</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">
          Τρία βήματα από την ανακάλυψη μέχρι το live. Χωρίς συνδρομή, χωρίς κρυφές χρεώσεις.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <li
              key={title}
              className="rounded-2xl border border-white/10 bg-brand-dark/70 p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-medium text-slate-500">0{index + 1}</span>
              </div>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
