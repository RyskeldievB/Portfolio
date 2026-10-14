(() => {
  const SELECTOR = '.skills-grid,.solve-grid';

  function disableLegacy(track){
    track.dataset.autoplayReady = '1';
  }

  function initCarousel(track) {
    if (!track || track.dataset.loopAutoplay === '1') return;
    disableLegacy(track);
    track.dataset.loopAutoplay = '1';

    const originals = Array.from(track.children);
    if (originals.length < 2) return;

    originals.forEach(el => {
      const clone = el.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.classList.add('carousel-clone');
      track.appendChild(clone);
    });

    track.style.scrollSnapType = 'none';
    track.style.scrollBehavior = 'auto';

    let paused = false;
    let resumeTimer = null;

    const pause = () => {
      paused = true;
      clearTimeout(resumeTimer);
    };

    const resumeSoon = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { paused = false; }, 2500);
    };

    track.addEventListener('touchstart', pause, { passive: true });
    track.addEventListener('touchend', resumeSoon, { passive: true });
    track.addEventListener('pointerdown', pause, { passive: true });
    track.addEventListener('pointerup', resumeSoon, { passive: true });
    track.addEventListener('pointercancel', resumeSoon, { passive: true });
    track.addEventListener('wheel', () => { pause(); resumeSoon(); }, { passive: true });

    const begin = () => {
      const loopWidth = track.scrollWidth / 2;
      if (loopWidth <= track.clientWidth + 2) return;

      window.setInterval(() => {
        if (paused || window.innerWidth > 720) return;
        track.scrollLeft += 1;
        if (track.scrollLeft >= loopWidth) {
          track.scrollLeft -= loopWidth;
        }
      }, 40);
    };

    setTimeout(begin, 200);
  }

  function start() {
    if (window.innerWidth > 720) return;
    document.querySelectorAll(SELECTOR).forEach(initCarousel);
  }

  // Run immediately so the legacy autoplay sees autoplayReady=1 and exits.
  start();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(start, 50));
  }
})();
