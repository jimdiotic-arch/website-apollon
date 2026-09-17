# Apollon — ενημερωτικό website

Στατικό landing page για το mobile app **Apollon**. Δεν περιέχει login, feed ή booking — μόνο παρουσίαση, badges καταστημάτων, QR και νομικά κείμενα.

## Τοπική ανάπτυξη

```bash
npm install
npm run dev
```

Άνοιξε το URL που εμφανίζει το Vite (συνήθως `http://localhost:5173`).

## Μεταβλητές περιβάλλοντος

Αντίγραψε το `.env.example` σε `.env` όταν έχεις τα store URLs:

```
VITE_SITE_URL=https://your-domain.vercel.app
VITE_APP_STORE_URL=https://apps.apple.com/app/idXXXXXXXX
VITE_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=com.apollon.app
```

- Αν τα store URLs είναι κενά, τα badges εμφανίζουν **Σύντομα διαθέσιμο** και το `/get` δεν κάνει redirect.
- Το QR κωδικοποιεί `{SITE_URL}/get`. Αν το `VITE_SITE_URL` είναι κενό, χρησιμοποιείται το τρέχον origin.

## Σελίδες

| Διαδρομή | Περιεχόμενο |
|---|---|
| `/` | Landing (hero, badges, QR σε desktop, πώς λειτουργεί) |
| `/privacy` | Πολιτική Απορρήτου |
| `/terms` | Όροι Χρήσης |
| `/account-deletion` | Διαγραφή λογαριασμού (απαιτείται από Apple/Google) |
| `/get` | Smart redirect: iOS → App Store, Android → Play Store, desktop → και τα δύο badges |

## Deploy στο Vercel (δωρεάν)

1. Δημιούργησε project στο [Vercel](https://vercel.com) με root directory αυτόν τον φάκελο (`website_Apollon`).
2. Framework preset: Vite. Build command: `npm run build`. Output: `dist`.
3. Πρόσθεσε τα env vars παραπάνω (όταν υπάρχουν store links).
4. Το `vercel.json` κάνει SPA fallback ώστε τα `/privacy`, `/terms`, `/get` να δουλεύουν στο refresh.

Μετά το πρώτο deploy, βάλε το production URL στο `VITE_SITE_URL` και κάνε redeploy ώστε το QR και τα Open Graph tags να δείχνουν σταθερό domain.

Για καλύτερα preview cards σε Facebook / Viber / iMessage, άλλαξε στο `index.html` τα `og:image` και `twitter:image` σε απόλυτο URL, π.χ. `https://your-domain.vercel.app/og-image.png`.

## Follow-up στο mobile app

Όταν αυτό το site είναι live, ενημέρωσε στο `My_App_Refactored` το `LEGAL_BASE_URL` στο `src/constants/appConfig.js` (και τα in-app legal links) ώστε Apple, Google και η εφαρμογή να δείχνουν εδώ αντί για `music-app-delta-ruby.vercel.app`.

Προτεινόμενα public URLs:

- `https://<domain>/privacy`
- `https://<domain>/terms`
- `https://<domain>/account-deletion`
