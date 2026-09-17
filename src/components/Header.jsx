import { Link, NavLink } from 'react-router-dom';
import { APP_NAME } from '../config';

const navLinkClass = ({ isActive }) =>
  `text-sm transition-colors ${
    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
  }`;

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-3" aria-label={`${APP_NAME} αρχική`}>
          <img
            src="/icon.png"
            alt=""
            className="h-9 w-9 rounded-full ring-1 ring-purple-500/40"
          />
          <span className="wordmark text-lg">{APP_NAME}</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6" aria-label="Νομικά">
          <NavLink to="/privacy" className={navLinkClass}>
            Απόρρητο
          </NavLink>
          <NavLink to="/terms" className={navLinkClass}>
            Όροι
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
