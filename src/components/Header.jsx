import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { APP_NAME } from '../config';

const sectionLinks = [
  { to: '/#how', label: 'Πώς λειτουργεί' },
  { to: '/#features', label: 'Χαρακτηριστικά' },
  { to: '/#faq', label: 'Συχνές ερωτήσεις' },
];

const navLinkClass = ({ isActive }) =>
  `text-sm transition-colors ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label={`${APP_NAME} αρχική`}>
          <img
            src="/icon.png"
            alt=""
            className="h-9 w-9 rounded-full ring-1 ring-purple-500/40"
          />
          <span className="wordmark text-lg">{APP_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Κύρια πλοήγηση">
          {onHome
            ? sectionLinks.map((item) => (
                <a
                  key={item.to}
                  href={item.to.replace('/', '')}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))
            : sectionLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
          <NavLink to="/privacy" className={navLinkClass}>
            Απόρρητο
          </NavLink>
          <Link
            to="/get"
            className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-colors hover:bg-violet-500"
          >
            Κατέβασε
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/get"
            className="rounded-xl bg-violet-600 px-3 py-2 text-sm font-semibold text-white"
          >
            Κατέβασε
          </Link>
          <button
            type="button"
            className="rounded-xl p-2 text-slate-300 hover:bg-white/5 hover:text-white"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/5 bg-slate-950/95 px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Κινητό μενού">
            {sectionLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <NavLink
              to="/privacy"
              className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Απόρρητο
            </NavLink>
            <NavLink
              to="/terms"
              className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Όροι
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
