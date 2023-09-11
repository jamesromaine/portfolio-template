// Animation script
function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
    addObserver(el, options)
  })
}
function addObserver(el, animation, prefix = 'animate__') {
  const animationName = `${prefix}${animation}`;
  // Check if `IntersectionObserver` is supported
  if (!('IntersectionObserver' in window)) {
    // Simple fallback
    // The animation/callback will be called immediately so
    // the scroll animation doesn't happen on unsupported browsers
    entry.target.classList.add(`${prefix}animated`, animationName);
    return
  }
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`${prefix}animated`, animationName);
        observer.unobserve(entry.target)
      }
    })
  })
  observer.observe(el)
}
// Trigger Animations:
scrollTrigger('.boxL', 'slideInLeft')
scrollTrigger('.boxR', 'slideInRight')
scrollTrigger('.boxZoom', 'zoomIn')
