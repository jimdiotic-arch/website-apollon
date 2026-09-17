import { QRCodeSVG } from 'qrcode.react';
import { getQrTarget } from '../config';

export default function QrBlock() {
  const value = getQrTarget();

  return (
    <div className="hidden md:flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-brand-dark/80 p-5">
      <div className="rounded-xl bg-white p-3">
        <QRCodeSVG
          value={value}
          size={148}
          bgColor="#ffffff"
          fgColor="#020617"
          level="M"
          title="Σκανάρισε για λήψη της εφαρμογής Apollon"
        />
      </div>
      <p className="max-w-[11rem] text-center text-xs leading-relaxed text-slate-400">
        Σκανάρισε με την κάμερα του κινητού για να κατεβάσεις το Apollon.
      </p>
    </div>
  );
}
