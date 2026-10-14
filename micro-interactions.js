(() => {
  const mq = window.matchMedia('(min-width: 721px) and (pointer: fine)');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mq.matches || reduce.matches) return;

  const targets = [
    ...document.querySelectorAll('.btn, .nav-cta'),
    ...document.querySelectorAll('#skills .skill, #experience .item, #projects .project, #case-study .case-step, #contact .contact-card')
  ];

  const isButton = el => el.matches('.btn, .nav-cta');

  targets.forEach(el => {
    let raf = 0;

    const reset = () => {
      cancelAnimationFrame(raf);
      el.classList.remove('micro-active');
      el.style.transform = '';
    };

    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) - 0.5;
      const ny = ((e.clientY - r.top) / r.height) - 0.5;
      const maxMove = isButton(el) ? 5 : 2.5;
      const lift = isButton(el) ? 1 : 3;
      const scale = isButton(el) ? 1.015 : 1.008;
      const x = nx * maxMove;
      const y = ny * maxMove - lift;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.classList.add('micro-active');
        el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${scale})`;
      });
    });

    el.addEventListener('mouseleave', reset);
    el.addEventListener('blur', reset);
  });
})();
