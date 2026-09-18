import { Globe } from 'lucide-react';
import QrBlock from './QrBlock';
import StoreBadges from './StoreBadges';

export default function DownloadCta() {
  return (
    <section id="download" className="relative scroll-mt-24 px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-site overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/70 via-slate-950 to-blue-950/40 p-8 sm:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_auto]">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              Κατέβασε την εφαρμογή
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Το Apollon παίζει στο κινητό. Το web έρχεται σύντομα.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 lg:mx-0">
              Διαθέσιμο στο App Store και στο Google Play. Η έκδοση για browser είναι σε εξέλιξη — μέχρι τότε σκανάρισε το QR ή πάτα το κατάστημα της συσκευής σου.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-200">
              <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              Web app · Σύντομα
            </div>
            <div className="mt-8">
              <StoreBadges />
            </div>
          </div>
          <div className="flex justify-center">
            <QrBlock compact />
          </div>
        </div>
      </div>
    </section>
  );
}
