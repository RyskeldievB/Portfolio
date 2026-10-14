(() => {
  function initCarousel(track) {
    if (!track || track.dataset.loopAutoplay === '1') return;
    track.dataset.loopAutoplay = '1';

    const originals = Array.from(track.children);
    if (originals.length < 2) return;

    // Duplicate one full set so the carousel can loop seamlessly.
    originals.forEach(el => {
      const clone = el.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
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

    // Wait for layout after cloning, then use half the total width as one loop.
    setTimeout(() => {
      const loopWidth = track.scrollWidth / 2;
      if (loopWidth <= track.clientWidth) return;

      // 1px every 45ms ≈ 22px/sec: slow but clearly visible.
      setInterval(() => {
        if (paused || window.innerWidth > 720) return;
        track.scrollLeft += 1;
        if (track.scrollLeft >= loopWidth) {
          track.scrollLeft -= loopWidth;
        }
      }, 45);
    }, 250);
  }

  function start() {
    if (window.innerWidth > 720) return;
    document.querySelectorAll('.skills-grid,.solve-grid').forEach(initCarousel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(start, 500));
  } else {
    setTimeout(start, 500);
  }
})();
