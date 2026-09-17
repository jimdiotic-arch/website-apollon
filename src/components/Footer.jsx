import { Link } from 'react-router-dom';
import { APP_NAME, SUPPORT_EMAIL } from '../config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-brand-dark/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="wordmark text-base">{APP_NAME}</p>
          <p className="mt-2 text-sm text-slate-400">Music Connects</p>
          <p className="mt-1 text-sm text-slate-500">Αθήνα, Ελλάδα</p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-2 inline-block text-sm text-violet-300 hover:text-white"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
        <nav className="flex flex-col gap-2 text-sm text-slate-400" aria-label="Υποσέλιδο">
          <Link to="/privacy" className="hover:text-white">
            Πολιτική Απορρήτου
          </Link>
          <Link to="/terms" className="hover:text-white">
            Όροι Χρήσης
          </Link>
          <Link to="/account-deletion" className="hover:text-white">
            Διαγραφή Λογαριασμού
          </Link>
          <Link to="/get" className="hover:text-white">
            Κατέβασε την εφαρμογή
          </Link>
        </nav>
      </div>
      <p className="border-t border-white/5 px-4 py-4 text-center text-xs text-slate-600">
        © {year} {APP_NAME}. Όλα τα δικαιώματα κατοχυρωμένα.
      </p>
    </footer>
  );
}
