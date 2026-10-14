(() => {
  function buildMobileContent(){
    if(!window.matchMedia('(max-width:720px)').matches) return;

    const heroMain = document.querySelector('.hero-main');
    if(heroMain && !heroMain.querySelector('.mobile-hello')){
      const hello = document.createElement('div');
      hello.className = 'mobile-hello';
      hello.innerHTML = `
        <div class="mobile-hello-kicker">Hi, I’m</div>
        <div class="mobile-hello-name">Ryskeldiev Baiel</div>
        <div class="mobile-hello-role">IT Support & Automation Specialist</div>
        <div class="mobile-hello-meta">
          <span>🇰🇬 Kyrgyzstan</span>
          <span>•</span>
          <span>Open to Europe</span>
        </div>`;
      heroMain.insertBefore(hello, heroMain.firstChild);
    }

    document.querySelectorAll('.mobile-profile-card').forEach(el => el.remove());

    const caseStudy = document.getElementById('case-study');
    if(caseStudy && !caseStudy.querySelector('.mobile-case-snapshot')){
      const head = caseStudy.querySelector('.section-head');
      const snapshot = document.createElement('div');
      snapshot.className = 'mobile-case-snapshot';
      snapshot.innerHTML = `
        <div class="mobile-case-card">
          <span class="mobile-case-num">01</span>
          <div><b>Challenge</b><p>Producing scene-based YouTube videos meant repeating the same work across scripts, images, voice and assembly.</p></div>
        </div>
        <div class="mobile-case-card">
          <span class="mobile-case-num">02</span>
          <div><b>Build</b><p>I created an AI-assisted Python workflow that organizes projects, scenes, voice generation and media preparation.</p></div>
        </div>
        <div class="mobile-case-card highlight">
          <span class="mobile-case-num">03</span>
          <div><b>Result</b><p>FFmpeg can build a video from the image + audio scene pairs that are already ready, without waiting for every scene.</p></div>
        </div>
        <div class="mobile-case-stack">Python · FFmpeg · Edge TTS · HTML/CSS · GitHub</div>`;
      if(head) head.insertAdjacentElement('afterend', snapshot);
      else caseStudy.prepend(snapshot);
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', () => setTimeout(buildMobileContent, 250));
  } else {
    setTimeout(buildMobileContent, 250);
  }
})();