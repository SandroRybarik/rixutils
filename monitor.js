/**
 * Creates monitor HOF for orchestrating on scroll events.
 * @param {{ root: null|HTMLElement, rootMargin: string, threshold: number, trigger: 'once'|'multiple' }}
 * @returns {[(element: HTMLElement, action: () => void) => void]}
 */
 export default function monitor(options) {
  /**
   * Stores all attached elements we should act upon
   * @type {HTMLElement[]}
   */
  let observedElements = []
  /**
   * Stores all triggered elements when trigger opt is set to 'once'
   * @type {HTMLElement[]}
   */
  let triggered = []

  // default options, this allows to call monitor() without args
  const opts = {
    trigger: 'once',
    root: null,
    rootMargin: '0px',
    threshold: 0,
    ...options, // allow overide defaults
  }
  
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const targetElement = entry.target;
      const dontTriggerAction = (opts.trigger === 'once' && triggered.find(element => element === targetElement) !== undefined)
      
      // save some computation
      if (dontTriggerAction) {
        continue
      }


      if (entry.isIntersecting) { // currently checked element from all entries

        const foundMatch = observedElements.find(({ element }) => element === targetElement)

        

        if (foundMatch) {
          foundMatch.action(targetElement)
          triggered.push(targetElement)
        }
      }
    }
  }, {
    root: opts.root,
    rootMargin: opts.rootMargin,
    threshold: opts.threshold,
  });

  // register observer function
  return (element, action) => {
    observedElements.push({ element, action })
    observer.observe(element)
  }
}
