(() => {
  function buildMobileContent(){
    if(!window.matchMedia('(max-width:720px)').matches) return;

    const hero = document.querySelector('.hero');
    if(hero && !document.querySelector('.mobile-profile-card')){
      const profile = document.createElement('div');
      profile.className = 'mobile-profile-card';
      profile.innerHTML = `
        <div class="mobile-profile-top">
          <div>
            <div class="mobile-profile-label">Candidate profile</div>
            <div class="mobile-profile-name">Ryskeldiev Baiel</div>
            <div class="mobile-profile-role">IT Support Specialist · Junior System Administrator</div>
          </div>
          <div class="mobile-profile-badge">Open to Europe</div>
        </div>
        <div class="mobile-profile-meta">
          <span>📍 Kyrgyzstan</span>
          <a href="mailto:ryskeldievbajel014@gmail.com">✉️ Email</a>
          <a href="https://github.com/RyskeldievB" target="_blank" rel="noopener">⌘ GitHub</a>
        </div>`;
      hero.appendChild(profile);
    }

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