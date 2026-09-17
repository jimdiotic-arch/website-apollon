import { useEffect } from 'react';
import { APP_NAME, TAGLINE } from '../config';

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${APP_NAME}` : `${APP_NAME} — ${TAGLINE}`;
  }, [title]);
}
