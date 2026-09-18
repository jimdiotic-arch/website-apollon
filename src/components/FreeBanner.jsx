export default function FreeBanner() {
  return (
    <section className="relative px-4 pb-4 sm:px-6" aria-label="Χωρίς χρέωση">
      <div className="mx-auto max-w-site rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-6 py-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Χωρίς προμήθεια
        </p>
        <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
          Η χρήση του Apollon είναι εντελώς δωρεάν.
        </p>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
          Δεν υπάρχει συνδρομή ούτε κράτηση από τα live. Η αμοιβή συμφωνείται και πληρώνεται απευθείας μεταξύ σας.
        </p>
      </div>
    </section>
  );
}
