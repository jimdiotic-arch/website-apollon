import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StoreBadges from '../components/StoreBadges';
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  hasAppStore,
  hasPlayStore,
} from '../config';
import { detectMobileOS } from '../lib/detectOs';
import { usePageTitle } from '../lib/usePageTitle';

export default function GetApp() {
  usePageTitle('Λήψη εφαρμογής');
  const [os, setOs] = useState('desktop');
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const detected = detectMobileOS();
    setOs(detected);

    if (detected === 'ios' && hasAppStore) {
      setRedirecting(true);
      window.location.replace(APP_STORE_URL);
      return;
    }
    if (detected === 'android' && hasPlayStore) {
      setRedirecting(true);
      window.location.replace(PLAY_STORE_URL);
    }
  }, []);

  const comingSoon = (os === 'ios' && !hasAppStore) || (os === 'android' && !hasPlayStore);

  return (
    <main className="relative z-10 mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <img src="/icon.png" alt="" className="mb-6 h-20 w-20 rounded-full ring-1 ring-purple-500/40" />
      <h1 className="text-2xl font-semibold text-white">Κατέβασε το Apollon</h1>
      {redirecting ? (
        <p className="mt-3 text-slate-400">Σε μεταφέρουμε στο κατάστημα της συσκευής σου…</p>
      ) : comingSoon ? (
        <p className="mt-3 text-slate-400">
          Η εφαρμογή θα είναι σύντομα διαθέσιμη στο κατάστημα της συσκευής σου.
        </p>
      ) : (
        <p className="mt-3 text-slate-400">
          Επίλεξε το κατάστημα για το κινητό σου. Από υπολογιστή, χρησιμοποίησε τα κουμπιά παρακάτω ή
          σκανάρισε το QR στην αρχική σελίδα.
        </p>
      )}
      <div className="mt-8">
        <StoreBadges />
      </div>
      <Link to="/" className="mt-10 text-sm text-violet-300 hover:text-white">
        ← Επιστροφή στην αρχική
      </Link>
    </main>
  );
}
