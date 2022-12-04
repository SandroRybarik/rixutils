/**
 * Detects whether user care to run animations and motion stuff code.
 * @param {() => void)} runMotionStuff 
 */
 export function prefersMotion(runMotionStuff, runNonMotionStuff = () => { }) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!mediaQuery || mediaQuery.matches) {
    runNonMotionStuff()
  } else {
    runMotionStuff()
  }
}

export const isMotionPreferred = () => {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  return !(!mediaQuery || mediaQuery.matches)
}
