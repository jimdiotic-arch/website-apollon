import { Link } from 'react-router-dom';
import { usePageTitle } from '../lib/usePageTitle';

export default function NotFound() {
  usePageTitle('Η σελίδα δεν βρέθηκε');
  return (
    <main className="relative z-10 mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">404</p>
      <h1 className="mt-3 text-2xl font-semibold text-white">Η σελίδα δεν βρέθηκε</h1>
      <p className="mt-3 text-slate-400">Ο σύνδεσμος δεν οδηγεί σε υπάρχουσα σελίδα του Apollon.</p>
      <Link
        to="/"
        className="mt-8 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
      >
        Επιστροφή στην αρχική
      </Link>
    </main>
  );
}
