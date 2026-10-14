(() => {
  const css = `
  .solve-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.solve-card{padding:20px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.03);transition:.25s}.solve-card:hover{transform:translateY(-5px);border-color:rgba(104,169,255,.4);box-shadow:0 18px 45px rgba(0,0,0,.2)}.solve-icon{font-size:24px;margin-bottom:10px}.solve-card b{display:block;margin-bottom:6px}.solve-card span{color:var(--muted);font-size:14px}
  .case-wrap{display:grid;grid-template-columns:1.05fr .95fr;gap:18px;align-items:stretch}.case-copy,.mock-app{padding:24px;border:1px solid var(--line);border-radius:22px;background:rgba(255,255,255,.03)}.case-steps{display:grid;gap:12px;margin-top:18px}.case-step{display:grid;grid-template-columns:34px 1fr;gap:12px;align-items:start}.case-num{width:34px;height:34px;border-radius:11px;display:grid;place-items:center;background:linear-gradient(135deg,rgba(104,169,255,.2),rgba(121,240,196,.12));border:1px solid var(--line);font-weight:800;color:var(--accent2)}.case-step strong{display:block;margin-bottom:3px}.case-step span{color:var(--muted);font-size:14px}
  .mock-app{overflow:hidden;position:relative}.mock-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.mock-dots{display:flex;gap:6px}.mock-dots i{width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,.18)}.mock-dots i:nth-child(1){background:#ff6b6b}.mock-dots i:nth-child(2){background:#ffd166}.mock-dots i:nth-child(3){background:#79f0c4}.mock-title{font-size:12px;color:var(--muted)}.mock-body{display:grid;grid-template-columns:120px 1fr;gap:14px}.mock-side{border:1px solid var(--line);border-radius:14px;padding:10px;background:rgba(0,0,0,.13)}.mock-side div{height:9px;border-radius:999px;background:rgba(255,255,255,.08);margin:9px 0}.mock-side div:nth-child(2),.mock-side div:nth-child(4){width:72%}.mock-main{border:1px solid var(--line);border-radius:14px;padding:14px;background:rgba(0,0,0,.12)}.mock-row{display:flex;align-items:center;gap:10px;padding:10px;border:1px solid rgba(255,255,255,.06);border-radius:12px;margin-bottom:10px;background:rgba(255,255,255,.025)}.mock-thumb{width:42px;height:30px;border-radius:8px;background:linear-gradient(135deg,rgba(104,169,255,.25),rgba(157,132,255,.16))}.mock-lines{flex:1}.mock-lines i{display:block;height:7px;border-radius:999px;background:rgba(255,255,255,.1);margin:5px 0}.mock-lines i:nth-child(2){width:62%}.mock-status{font-size:11px;color:var(--accent2);border:1px solid rgba(121,240,196,.22);padding:4px 7px;border-radius:999px}.mock-progress{height:7px;background:rgba(255,255,255,.06);border-radius:999px;overflow:hidden;margin-top:12px}.mock-progress span{display:block;height:100%;width:78%;background:linear-gradient(90deg,var(--accent),var(--accent2));animation:mockPulse 2.3s ease-in-out infinite alternate}@keyframes mockPulse{to{width:92%}}
  .impact-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px}.impact{padding:14px;border-radius:14px;border:1px solid var(--line);background:rgba(255,255,255,.025)}.impact strong{display:block;font-size:18px}.impact span{color:var(--muted);font-size:12px}
  @media(max-width:900px){.solve-grid{grid-template-columns:repeat(2,1fr)}.case-wrap{grid-template-columns:1fr}}@media(max-width:640px){.solve-grid,.impact-row{grid-template-columns:1fr}.mock-body{grid-template-columns:1fr}.mock-side{display:none}}
  `;
  const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);

  const skills=document.getElementById('skills');
  if(skills && !document.getElementById('solutions')){
    const sec=document.createElement('section');
    sec.id='solutions';sec.className='reveal';
    sec.innerHTML=`<div class="section-head"><div><h2 class="section-title">What I can solve</h2><p class="section-sub">Practical problems I can diagnose and handle independently in day-to-day IT support.</p></div></div><div class="solve-grid stagger"><div class="solve-card"><div class="solve-icon">🖥️</div><b>Windows issues</b><span>Boot failures, slow systems, drivers, software errors and OS reinstallation.</span></div><div class="solve-card"><div class="solve-icon">🌐</div><b>Network problems</b><span>No internet, IP conflicts, router/Wi-Fi setup, LAN and connectivity diagnostics.</span></div><div class="solve-card"><div class="solve-icon">🧰</div><b>Hardware troubleshooting</b><span>PC diagnostics, component replacement, BIOS settings and performance issues.</span></div><div class="solve-card"><div class="solve-icon">🛰️</div><b>Remote support</b><span>User assistance through AnyDesk and Veyon without interrupting their workflow.</span></div><div class="solve-card"><div class="solve-icon">⌨️</div><b>Command-line diagnostics</b><span>CMD and PowerShell for troubleshooting, service checks and system tasks.</span></div><div class="solve-card"><div class="solve-icon">⚙️</div><b>Process automation</b><span>Python and FFmpeg workflows to reduce repetitive manual work.</span></div></div>`;
    skills.insertAdjacentElement('afterend',sec);
  }

  const projects=document.getElementById('projects');
  if(projects && !document.getElementById('case-study')){
    const sec=document.createElement('section');
    sec.id='case-study';sec.className='reveal';
    sec.innerHTML=`<div class="section-head"><div><h2 class="section-title">Case study — AI Content Studio</h2><p class="section-sub">From a time-consuming manual workflow to one integrated production system.</p></div></div><div class="case-wrap"><div class="case-copy"><div class="eyebrow"><span class="dot"></span>Real automation project</div><h3 style="font-size:28px;margin:16px 0 8px">Automating a YouTube production pipeline</h3><p style="color:var(--muted);margin:0">The goal was to reduce repetitive work across script preparation, scene handling, voice generation, image/audio matching and final video assembly.</p><div class="case-steps"><div class="case-step"><div class="case-num">1</div><div><strong>Problem</strong><span>Building videos manually from dozens of scenes was slow and error-prone.</span></div></div><div class="case-step"><div class="case-num">2</div><div><strong>Solution</strong><span>Created an AI-assisted Python application with projects, scene workflows, TTS and FFmpeg assembly.</span></div></div><div class="case-step"><div class="case-num">3</div><div><strong>Useful detail</strong><span>The builder can assemble a video from any available matching image + audio scene pairs instead of requiring every scene.</span></div></div></div><div class="impact-row"><div class="impact"><strong>Python</strong><span>workflow orchestration</span></div><div class="impact"><strong>FFmpeg</strong><span>video processing</span></div><div class="impact"><strong>HTML/CSS</strong><span>interface layer</span></div></div></div><div class="mock-app tilt"><div class="mock-top"><div class="mock-dots"><i></i><i></i><i></i></div><div class="mock-title">AI Content Studio · Project Dashboard</div></div><div class="mock-body"><div class="mock-side"><div></div><div></div><div></div><div></div><div></div></div><div class="mock-main"><div class="mock-row"><div class="mock-thumb"></div><div class="mock-lines"><i></i><i></i></div><div class="mock-status">READY</div></div><div class="mock-row"><div class="mock-thumb"></div><div class="mock-lines"><i></i><i></i></div><div class="mock-status">VOICE</div></div><div class="mock-row"><div class="mock-thumb"></div><div class="mock-lines"><i></i><i></i></div><div class="mock-status">BUILD</div></div><div class="mock-progress"><span></span></div></div></div></div></div>`;
    projects.insertAdjacentElement('afterend',sec);
  }

  document.querySelectorAll('#solutions .stagger,#case-study').forEach(el=>{
    if(window.IntersectionObserver){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}}),{threshold:.1});o.observe(el)}else el.classList.add('in');
  });

  const setupAutoplay=()=>{
    if(!window.matchMedia('(max-width:720px)').matches) return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.skills-grid,.solve-grid').forEach(track=>{
      if(track.dataset.autoplayReady==='1') return;
      track.dataset.autoplayReady='1';
      let dir=1;
      let pauseUntil=0;
      let last=performance.now();
      const pause=()=>{pauseUntil=performance.now()+3500};
      track.addEventListener('touchstart',pause,{passive:true});
      track.addEventListener('pointerdown',pause,{passive:true});
      track.addEventListener('wheel',pause,{passive:true});
      const tick=(now)=>{
        const dt=Math.min(now-last,40);
        last=now;
        if(now>pauseUntil && track.scrollWidth>track.clientWidth+4){
          track.scrollLeft += dir * 0.018 * dt;
          const max=track.scrollWidth-track.clientWidth;
          if(track.scrollLeft>=max-1){track.scrollLeft=max;dir=-1}
          else if(track.scrollLeft<=1){track.scrollLeft=0;dir=1}
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(setupAutoplay,150));
  else setTimeout(setupAutoplay,150);
})();
