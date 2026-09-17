/**
 * Lightweight store-targeting helper. iPadOS 13+ reports as Macintosh + touch.
 */
export function detectMobileOS(
  userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '',
) {
  if (/android/i.test(userAgent)) return 'android';
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'ios';
  if (
    typeof navigator !== 'undefined' &&
    /Macintosh/i.test(userAgent) &&
    navigator.maxTouchPoints > 1
  ) {
    return 'ios';
  }
  return 'desktop';
}
