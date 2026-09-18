import { BadgeCheck, CalendarDays, Guitar, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Perfect Match',
    text: 'Όταν στυλ, όργανα και πόλη ταυτίζονται, το προφίλ ανεβαίνει στην κορυφή με πράσινη ένδειξη. Το Match είναι συμβουλευτικό — εσύ έχεις τον τελευταίο λόγο.',
  },
  {
    icon: Guitar,
    title: 'Tech Rider',
    text: 'Η λίστα εξοπλισμού του καλλιτέχνη συναντά αυτά που παρέχει ο χώρος. Βλέπεις τι λείπει πριν το live, χωρίς να μπλοκάρεται η επικοινωνία.',
  },
  {
    icon: MessageSquare,
    title: 'Chat μετά την αποδοχή',
    text: 'Η συζήτηση ανοίγει όταν η αίτηση γίνει δεκτή. Κείμενο και φωνητικά, πάντα συνδεδεμένα με συγκεκριμένη αγγελία.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Profile',
    text: 'Το μωβ σήμα δεν αγοράζεται. Το κερδίζεις όταν συμπληρώσεις φωτογραφία, βίντεο, social, βιογραφικό και Tech Rider.',
  },
  {
    icon: BadgeCheck,
    title: 'Αγγελίες & ατζέντα',
    text: 'Venues και organizers δημοσιεύουν έως 3 ενεργές αγγελίες — εφάπαξ live ή μόνιμη συνεργασία. Οι αιτήσεις μαζεύονται στην ατζέντα.',
  },
  {
    icon: CalendarDays,
    title: 'Ημερολόγιο καλλιτέχνη',
    text: 'Μπλόκαρε ημερομηνίες που δεν είσαι διαθέσιμος. Τα μαγαζιά βλέπουν καθαρά πότε μπορείς να παίξεις.',
  },
];

const genres = ['Έντεχνο', 'Ρεμπέτικο', 'Λαϊκά', 'Rock', 'Jazz', 'Pop', 'House', 'Funk'];

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 px-4 pb-8 sm:px-6">
      <div className="mx-auto max-w-site">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
          Μέσα στην εφαρμογή
        </p>
        <h2 className="mt-2 text-center text-2xl font-semibold text-white sm:text-3xl">
          Ό,τι χρειάζεσαι για να κλείσεις live
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">
          Ανακάλυψη, συνεννόηση και οργάνωση — χωρίς checkout και χωρίς προμήθεια.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="glass-card rounded-2xl p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
