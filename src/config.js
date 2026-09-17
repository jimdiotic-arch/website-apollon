export const APP_NAME = 'Apollon';
export const COMPANY_NAME = 'Apollon';
export const SUPPORT_EMAIL = 'Apollon.app@gmail.com';
export const TAGLINE = 'Music Connects';
export const HERO_SUB =
  'Βρες live gigs για το σχήμα σου ή ανακάλυψε τους καλύτερους καλλιτέχνες για το μαγαζί σου.';

export const APP_STORE_URL = import.meta.env.VITE_APP_STORE_URL || '';
export const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL || '';
export const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '');

export const hasAppStore = Boolean(APP_STORE_URL);
export const hasPlayStore = Boolean(PLAY_STORE_URL);

export function getQrTarget() {
  const base = SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
  return `${base}/get`;
}
