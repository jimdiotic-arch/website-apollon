import { Link } from 'react-router-dom';
import { APP_NAME, SUPPORT_EMAIL, TAGLINE } from '../config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-brand-dark/80">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="wordmark text-base">{APP_NAME}</p>
          <p className="mt-2 text-sm text-slate-400">{TAGLINE}</p>
          <p className="mt-1 text-sm text-slate-500">Αθήνα, Ελλάδα</p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-3 inline-block text-sm text-violet-300 hover:text-white"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
        <nav className="flex flex-col gap-2 text-sm text-slate-400" aria-label="Σελίδες">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Εφαρμογή
          </p>
          <Link to="/get" className="hover:text-white">
            Κατέβασε την εφαρμογή
          </Link>
          <Link to="/#how" className="hover:text-white">
            Πώς λειτουργεί
          </Link>
          <Link to="/#features" className="hover:text-white">
            Χαρακτηριστικά
          </Link>
          <Link to="/#faq" className="hover:text-white">
            Συχνές ερωτήσεις
          </Link>
        </nav>
        <nav className="flex flex-col gap-2 text-sm text-slate-400" aria-label="Νομικά">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Νομικά
          </p>
          <Link to="/privacy" className="hover:text-white">
            Πολιτική Απορρήτου
          </Link>
          <Link to="/terms" className="hover:text-white">
            Όροι Χρήσης
          </Link>
          <Link to="/account-deletion" className="hover:text-white">
            Διαγραφή Λογαριασμού
          </Link>
        </nav>
      </div>
      <p className="border-t border-white/5 px-4 py-4 text-center text-xs text-slate-600">
        © {year} {APP_NAME}. Όλα τα δικαιώματα κατοχυρωμένα. Ενημερωτικό website — το booking γίνεται στην εφαρμογή.
      </p>
    </footer>
  );
}
