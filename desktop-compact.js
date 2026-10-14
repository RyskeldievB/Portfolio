(() => {
  const desktopMq=window.matchMedia('(min-width:721px)');

  const skillDetails = [
    {index:0,title:'Windows & Hardware',subtitle:'Workstation setup, repair and everyday user support.',tasks:['Windows installation, recovery and driver setup','BIOS, SSD, RAM and component diagnostics','Software installation and performance troubleshooting','PC component replacement and workstation maintenance'],tools:['Windows 10/11','BIOS','CMD','PowerShell','Hardware']},
    {index:1,title:'Networking',subtitle:'Practical LAN and Wi-Fi troubleshooting for real users and devices.',tasks:['Router and Wi-Fi setup and troubleshooting','LAN connectivity and IP addressing','Cable crimping and physical network checks','Diagnosing no-internet, IP conflict and connection issues'],tools:['LAN','Wi-Fi','TCP/IP','Routers','Cabling']},
    {index:2,title:'Remote Support',subtitle:'Fast end-user assistance without interrupting day-to-day work.',tasks:['Remote user support and workstation administration','AnyDesk troubleshooting sessions','Veyon classroom PC management','Clear step-by-step support for non-technical users'],tools:['AnyDesk','Veyon','Windows','User Support']},
    {index:5,title:'Automation & Web',subtitle:'Small automation tools and web projects that reduce repetitive work.',tasks:['Python automation for repetitive workflows','FFmpeg-based video processing and assembly','HTML/CSS website development and deployment','AI-assisted application development and workflow design'],tools:['Python','FFmpeg','HTML/CSS','GitHub','AI-assisted dev']}
  ];

  const projectDetails={
    kicker:'FEATURED PROJECT',
    title:'AI Content Studio — YouTube Production Automation',
    subtitle:'An AI-assisted application built to reduce repetitive work across multi-channel YouTube production.',
    sectionTitle:'What it does',
    tasks:['Organizes channels, projects, templates and scene workflows','Generates scripts, prompts, images and Edge TTS voice','Matches available image + audio scene pairs automatically','Builds videos with FFmpeg without waiting for every scene'],
    tools:['Python','FFmpeg','Edge TTS','HTML/CSS','GitHub','Automation']
  };

  const caseDetails={
    kicker:'CASE STUDY',
    title:'From manual scene production to one controllable workflow',
    subtitle:'The project started from a real bottleneck: too many repeated steps for every scene and every video.',
    sectionTitle:'How I solved it',
    tasks:['Problem — scene preparation, voice generation and assembly required too many manual steps','Solution — one AI-assisted workflow manages projects, scenes, voice text and media preparation','Automation — the builder assembles only the ready matching image + audio pairs','Result — less repetitive work and a workflow that can continue even when some scenes are unfinished'],
    tools:['Python','FFmpeg','Edge TTS','Workflow Design','AI-assisted Development']
  };

  function removeMobileModal(){
    if(desktopMq.matches) return;
    const modal=document.getElementById('skillModal');
    if(modal) modal.remove();
    document.body.classList.remove('modal-open');
  }

  function ensureDetailModal(){
    if(!desktopMq.matches) return null;
    let modal=document.getElementById('skillModal');
    if(modal) return modal;
    modal=document.createElement('div');
    modal.id='skillModal';
    modal.className='skill-modal';
    modal.setAttribute('aria-hidden','true');
    modal.innerHTML=`
      <div class="skill-modal-backdrop" data-close-modal></div>
      <div class="skill-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="skillModalTitle">
        <button class="skill-modal-close" type="button" aria-label="Close" data-close-modal>×</button>
        <div class="skill-modal-kicker">DETAILS</div>
        <h3 id="skillModalTitle"></h3>
        <p class="skill-modal-sub"></p>
        <div class="skill-modal-body">
          <div class="skill-modal-section-title">Details</div>
          <ul class="skill-modal-list"></ul>
          <div class="skill-modal-section-title">Tools & environment</div>
          <div class="skill-modal-tags"></div>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeDetailModal));
    return modal;
  }

  function openDetailModal(data){
    if(!desktopMq.matches) return;
    const modal=ensureDetailModal();
    if(!modal) return;
    modal.querySelector('.skill-modal-kicker').textContent=data.kicker||'CORE SKILL';
    modal.querySelector('#skillModalTitle').textContent=data.title;
    modal.querySelector('.skill-modal-sub').textContent=data.subtitle;
    const titles=modal.querySelectorAll('.skill-modal-section-title');
    if(titles[0]) titles[0].textContent=data.sectionTitle||'What I can handle';
    if(titles[1]) titles[1].textContent='Tools & environment';
    modal.querySelector('.skill-modal-list').innerHTML=data.tasks.map(x=>`<li>${x}</li>`).join('');
    modal.querySelector('.skill-modal-tags').innerHTML=data.tools.map(x=>`<span>${x}</span>`).join('');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
  }

  function closeDetailModal(){
    const modal=document.getElementById('skillModal');
    if(!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
  }

  function setupSkills(){
    if(!desktopMq.matches) return;
    const cards=[...document.querySelectorAll('#skills .skill')];
    cards.forEach((card,i)=>{
      if(card.dataset.desktopPopupBound==='1') return;
      const data=skillDetails.find(x=>x.index===i);
      if(!data){card.classList.add('desktop-skill-hidden');return;}
      card.dataset.desktopPopupBound='1';
      card.classList.add('desktop-skill-card');
      card.setAttribute('role','button');
      card.setAttribute('tabindex','0');
      const desc=card.querySelector('span');
      if(desc){const short={0:'Windows, hardware and workstation troubleshooting.',1:'LAN, Wi-Fi, routers and connectivity diagnostics.',2:'AnyDesk, Veyon and practical end-user support.',5:'Python, FFmpeg and web automation workflows.'};desc.textContent=short[i]||desc.textContent;}
      if(!card.querySelector('.skill-open-hint')){const hint=document.createElement('div');hint.className='skill-open-hint';hint.textContent='View details  ↗';card.appendChild(hint);}
      const payload={...data,kicker:'CORE SKILL',sectionTitle:'What I can handle'};
      const activate=()=>{if(desktopMq.matches) openDetailModal(payload)};
      card.addEventListener('click',activate);
      card.addEventListener('keydown',e=>{if(desktopMq.matches&&(e.key==='Enter'||e.key===' ')){e.preventDefault();activate();}});
    });
  }

  function setupProjectCard(){
    const project=document.querySelector('#projects .project');
    if(!project || project.dataset.desktopCompact==='1') return;
    project.dataset.desktopCompact='1';
    project.classList.add('project-compact');
    project.innerHTML=`
      <div class="project-compact-main">
        <div class="project-compact-kicker">FEATURED PROJECT</div>
        <h3>AI Content Studio — YouTube Production Automation</h3>
        <p>AI-assisted production workflow for projects, scenes, voice and FFmpeg video assembly.</p>
        <div class="project-compact-tags"><span>Python</span><span>FFmpeg</span><span>Edge TTS</span><span>Automation</span></div>
      </div>
      <div class="project-compact-side">
        <span class="status">Active project</span>
        <button class="project-details-btn" type="button">View project details ↗</button>
      </div>`;
    project.querySelector('.project-details-btn')?.addEventListener('click',()=>openDetailModal(projectDetails));
  }

  function setupCaseStudy(){
    const card=document.querySelector('#case-study .case-card');
    if(!card || card.dataset.desktopCompact==='1') return;
    card.dataset.desktopCompact='1';
    card.classList.add('case-compact-card');
    card.innerHTML=`
      <button class="case-mini-tile" type="button" data-case-open>
        <span>01</span><div><b>Problem</b><small>Too many repeated manual steps per scene.</small></div>
      </button>
      <button class="case-mini-tile" type="button" data-case-open>
        <span>02</span><div><b>Solution</b><small>One workflow for projects, scenes and voice.</small></div>
      </button>
      <button class="case-mini-tile" type="button" data-case-open>
        <span>03</span><div><b>Automation</b><small>Build video from the scene pairs that are ready.</small></div>
      </button>
      <button class="case-details-btn" type="button">Open full case study ↗</button>`;
    card.querySelectorAll('[data-case-open],.case-details-btn').forEach(el=>el.addEventListener('click',()=>openDetailModal(caseDetails)));
  }

  function setupDesktop(){
    if(!desktopMq.matches){removeMobileModal();return;}
    setupSkills();
    ensureDetailModal();
    setupProjectCard();
    setupCaseStudy();

    document.querySelectorAll('#experience .item').forEach(item=>{
      if(item.querySelector('.desktop-more-btn')) return;
      const list=item.querySelector('ul'); if(!list) return;
      const btn=document.createElement('button');
      btn.type='button';btn.className='desktop-more-btn';btn.textContent='Show details';
      btn.addEventListener('click',e=>{e.stopPropagation();item.classList.toggle('desktop-open');btn.textContent=item.classList.contains('desktop-open')?'Hide details':'Show details';});
      item.appendChild(btn);
    });

    const mock=document.querySelector('#case-study .mock-app');
    if(mock && mock.dataset.desktopRebuilt!=='1'){
      mock.dataset.desktopRebuilt='1';
      mock.innerHTML=`<div class="studio-windowbar"><div class="studio-window-dots"><i></i><i></i><i></i></div><span>AI Content Studio</span><span class="studio-window-status">PROJECT READY</span></div><div class="studio-layout"><aside class="studio-sidebar"><div class="studio-logo">AI</div><nav class="studio-nav"><div class="active"><span>⌂</span>Dashboard</div><div><span>▣</span>Projects</div><div><span>☷</span>Scenes</div><div><span>◉</span>Voice</div><div><span>▶</span>Video Build</div></nav></aside><div class="studio-main"><div class="studio-main-head"><div><small>ACTIVE PROJECT</small><strong>Horror Story #07</strong></div><span class="studio-pill">17 / 24 ready</span></div><div class="studio-progress"><span></span></div><div class="studio-stats"><div><small>Scenes</small><strong>17 / 24</strong></div><div><small>Voice</small><strong>Edge TTS</strong></div><div><small>Renderer</small><strong>FFmpeg</strong></div></div><div class="studio-action-row"><div class="studio-action-copy"><b>Build from available scenes</b><span>Only matched image + audio pairs are included.</span></div><button type="button">Build video</button></div></div></div>`;
    }
  }

  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDetailModal();});
  desktopMq.addEventListener?.('change',()=>{if(desktopMq.matches) setupDesktop(); else removeMobileModal();});
  window.addEventListener('resize',removeMobileModal,{passive:true});
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',setupDesktop); else setupDesktop();
})();