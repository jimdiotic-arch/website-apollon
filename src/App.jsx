import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AmbientBackground from './components/AmbientBackground';
import Footer from './components/Footer';
import Header from './components/Header';
import { accountDeletionContent } from './content/accountDeletion';
import { privacyPolicyContent } from './content/privacy';
import { termsOfServiceContent } from './content/terms';
import GetApp from './pages/GetApp';
import Home from './pages/Home';
import LegalPage from './pages/LegalPage';
import NotFound from './pages/NotFound';
import { SUPPORT_EMAIL } from './config';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function DeletionCta() {
  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Αίτημα διαγραφής λογαριασμού Apollon')}`;
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-brand-dark/80 p-5">
      <p className="text-sm text-slate-300">
        <strong className="text-white">Χρειάζεστε βοήθεια;</strong> Επικοινωνήστε μαζί μας στο{' '}
        {SUPPORT_EMAIL}
      </p>
      <a
        href={mailto}
        className="mt-4 inline-flex rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
      >
        Αίτημα διαγραφής via email
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Μετάβαση στο περιεχόμενο
      </a>
      <div className="relative flex min-h-dvh flex-col overflow-x-hidden bg-slate-950">
        <AmbientBackground />
        <Header />
        <div id="main" className="relative z-10 flex flex-1 flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<LegalPage content={privacyPolicyContent} />} />
            <Route path="/privacy.html" element={<Navigate to="/privacy" replace />} />
            <Route path="/terms" element={<LegalPage content={termsOfServiceContent} />} />
            <Route path="/terms.html" element={<Navigate to="/terms" replace />} />
            <Route
              path="/account-deletion"
              element={<LegalPage content={accountDeletionContent} extra={<DeletionCta />} />}
            />
            <Route
              path="/account-deletion.html"
              element={<Navigate to="/account-deletion" replace />}
            />
            <Route path="/legal/privacy.html" element={<Navigate to="/privacy" replace />} />
            <Route path="/legal/terms.html" element={<Navigate to="/terms" replace />} />
            <Route
              path="/legal/account-deletion.html"
              element={<Navigate to="/account-deletion" replace />}
            />
            <Route path="/get" element={<GetApp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
