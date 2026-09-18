import { Bell, MapPin, Music } from 'lucide-react';

function VerifiedMark({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2L17.5 4.5L21 9.5L21 14.5L17.5 19.5L12 22L6.5 19.5L3 14.5L3 9.5L6.5 4.5Z"
        fill="#8B5CF6"
        fillOpacity="0.25"
        stroke="#8B5CF6"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12L11 14.5L15.5 9.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeedCard({
  title,
  meta,
  badge,
  badgeClass,
  photoClass,
  price,
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
      <div className={`relative h-28 ${photoClass}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <span className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${badgeClass}`}>
          {badge}
        </span>
        {price && (
          <span className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-semibold text-white">
            {price}
          </span>
        )}
        <div className="absolute bottom-2 left-2 right-2">
          <p className="flex items-center gap-1 text-[13px] font-semibold text-white">
            {title}
            <VerifiedMark />
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-300">
            <MapPin className="h-3 w-3" />
            {meta}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.28) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative animate-float rounded-[2.4rem] border-[8px] border-slate-800 bg-slate-950 shadow-phone">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[1.9rem] bg-slate-950">
          <div className="flex items-center justify-between px-4 pb-2 pt-8">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                <Music className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="text-sm font-semibold tracking-wide text-white">Apollon</span>
            </div>
            <Bell className="h-4 w-4 text-slate-400" />
          </div>

          <div className="px-4 pb-3">
            <p className="text-xs text-slate-400">Καλησπέρα</p>
            <p className="text-sm font-semibold text-white">Δες ποιος παίζει κοντά σου</p>
          </div>

          <div className="mx-4 mb-3 grid grid-cols-2 rounded-xl bg-slate-900 p-1 text-[11px] font-semibold">
            <span className="rounded-lg py-1.5 text-center text-slate-400">Βρες Venues</span>
            <span className="rounded-lg bg-blue-600 py-1.5 text-center text-white">Βρες Artists</span>
          </div>

          <div className="mb-3 flex gap-1.5 overflow-hidden px-4">
            {['Solo Artists', 'Μπάντες', 'DJs'].map((chip, i) => (
              <span
                key={chip}
                className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium ${
                  i === 1 ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="space-y-2.5 px-4 pb-4">
            <FeedCard
              title="Νυχτερίδα Trio"
              meta="Αθήνα · ~3 km"
              badge="Perfect Match"
              badgeClass="bg-gradient-to-r from-green-500 to-emerald-400 text-slate-950"
              photoClass="bg-gradient-to-br from-violet-700 via-indigo-700 to-slate-900"
              price="€250"
            />
            <FeedCard
              title="DJ Atlas"
              meta="Πειραιάς · House / Disco"
              badge="Match"
              badgeClass="bg-blue-500/90 text-white"
              photoClass="bg-gradient-to-br from-fuchsia-800 via-purple-800 to-slate-900"
              price="€180"
            />
          </div>

          <div className="grid grid-cols-4 border-t border-white/5 bg-brand-dark/90 px-2 py-2.5 text-[9px] text-slate-500">
            {['Αρχική', 'Αιτήσεις', 'Chat', 'Προφίλ'].map((label, i) => (
              <span key={label} className={`text-center ${i === 0 ? 'font-semibold text-purple-400' : ''}`}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
