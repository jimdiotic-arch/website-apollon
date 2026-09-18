import { Globe } from 'lucide-react';
import { APP_STORE_URL, PLAY_STORE_URL, hasAppStore, hasPlayStore } from '../config';

function BadgeLink({ href, enabled, children, label }) {
  const className =
    'relative inline-flex h-12 items-center transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-lg';

  if (!enabled) {
    return (
      <span className={`${className} cursor-default opacity-50`} aria-label={`${label} — Σύντομα διαθέσιμο`}>
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={`${className} hover:opacity-90`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

function WebSoonBadge() {
  return (
    <span
      className="inline-flex h-12 items-center gap-2.5 rounded-xl border border-white/12 bg-white/5 px-3.5"
      aria-label="Web εφαρμογή — Σύντομα διαθέσιμη"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-violet-200">
        <Globe className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="text-left leading-tight">
        <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Web app
        </span>
        <span className="block text-sm font-semibold text-white">Σύντομα</span>
      </span>
    </span>
  );
}

export default function StoreBadges({ showComingSoon = true, showWebSoon = true }) {
  const comingSoon = !hasAppStore || !hasPlayStore;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <BadgeLink href={APP_STORE_URL} enabled={hasAppStore} label="Download on the App Store">
          <img
            src="/badges/app-store.svg"
            alt="Download on the App Store"
            className="h-10 w-auto"
          />
        </BadgeLink>
        <BadgeLink href={PLAY_STORE_URL} enabled={hasPlayStore} label="Αποκτήστε το στο Google Play">
          <img
            src="/badges/google-play.png"
            alt="Αποκτήστε το στο Google Play"
            className="h-[60px] w-auto"
          />
        </BadgeLink>
        {showWebSoon && <WebSoonBadge />}
      </div>
      {showComingSoon && comingSoon && (
        <p className="text-xs font-medium uppercase tracking-wider text-violet-300/90">
          Σύντομα διαθέσιμο
        </p>
      )}
    </div>
  );
}
