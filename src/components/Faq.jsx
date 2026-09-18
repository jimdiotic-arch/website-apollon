import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: 'Υπάρχει χρέωση για τη χρήση της πλατφόρμας;',
    a: 'Όχι. Η χρήση του Apollon είναι εντελώς δωρεάν. Δεν υπάρχει συνδρομή, προμήθεια ή κρυφή χρέωση. Η πληρωμή του live γίνεται απευθείας μεταξύ καλλιτέχνη και venue, εκτός εφαρμογής.',
  },
  {
    q: 'Πώς λειτουργεί το Matching;',
    a: 'Η λογική Matching συγκρίνει στυλ, όργανα και πόλη. Όταν υπάρχει απόλυτη ταύτιση, τα προφίλ εμφανίζονται ως Perfect Match με πράσινη ένδειξη στην κορυφή. Μπορείς πάντα να επικοινωνήσεις και με κάποιον που δεν είναι Perfect Match.',
  },
  {
    q: 'Τι είναι το Tech Rider;',
    a: 'Είναι η λίστα τεχνικού εξοπλισμού που χρειάζεται ο καλλιτέχνης (ηχεία, μικρόφωνα, decks κ.λπ.) σε σχέση με όσα παρέχει ο χώρος. Λειτουργεί συμβουλευτικά, ώστε να προετοιμαστείτε σωστά πριν το live.',
  },
  {
    q: 'Υπάρχει έκδοση για υπολογιστή;',
    a: 'Προς το παρόν το Apollon είναι διαθέσιμο στο App Store και στο Google Play. Η web έκδοση έρχεται σύντομα — μέχρι τότε κατέβασε την εφαρμογή στο κινητό σου.',
  },
  {
    q: 'Πρέπει να κάνω εγγραφή για να δω προφίλ;',
    a: 'Μέσα στην εφαρμογή μπορείς να περιηγηθείς ως επισκέπτης. Για αίτηση, chat, ατζέντα και δημοσίευση αγγελίας χρειάζεσαι λογαριασμό. Αυτό το website είναι μόνο ενημερωτικό.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
          Συχνές ερωτήσεις
        </p>
        <h2 className="mt-2 text-center text-2xl font-semibold text-white sm:text-3xl">
          Πρακτικά, χωρίς μικρά γράμματα
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.q} className="glass-card overflow-hidden rounded-2xl">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="text-sm font-semibold text-white sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180 text-violet-300' : ''}`}
                  />
                </button>
                {open && (
                  <p className="border-t border-white/5 px-5 py-4 text-sm leading-relaxed text-slate-400">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
