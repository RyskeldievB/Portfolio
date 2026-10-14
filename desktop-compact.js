(() => {
  function setupDesktop(){
    if(!window.matchMedia('(min-width:721px)').matches) return;

    document.querySelectorAll('#experience .item').forEach(item=>{
      if(item.querySelector('.desktop-more-btn')) return;
      const list=item.querySelector('ul');
      if(!list) return;
      const btn=document.createElement('button');
      btn.type='button';
      btn.className='desktop-more-btn';
      btn.textContent='Show details';
      btn.addEventListener('click',e=>{
        e.stopPropagation();
        item.classList.toggle('desktop-open');
        btn.textContent=item.classList.contains('desktop-open')?'Hide details':'Show details';
      });
      item.appendChild(btn);
    });

    const mock=document.querySelector('#case-study .mock-app');
    if(mock && mock.dataset.desktopRebuilt!=='1'){
      mock.dataset.desktopRebuilt='1';
      mock.innerHTML=`
        <div class="studio-windowbar">
          <div class="studio-window-dots"><i></i><i></i><i></i></div>
          <span>AI Content Studio</span>
          <span class="studio-window-status">PROJECT READY</span>
        </div>
        <div class="studio-layout">
          <aside class="studio-sidebar">
            <div class="studio-logo">AI</div>
            <nav class="studio-nav">
              <div class="active"><span>⌂</span>Dashboard</div>
              <div><span>▣</span>Projects</div>
              <div><span>☷</span>Scenes</div>
              <div><span>◉</span>Voice</div>
              <div><span>▶</span>Video Build</div>
            </nav>
          </aside>
          <div class="studio-main">
            <div class="studio-main-head">
              <div>
                <small>ACTIVE PROJECT</small>
                <strong>Horror Story #07</strong>
              </div>
              <span class="studio-pill">17 / 24 ready</span>
            </div>
            <div class="studio-progress"><span></span></div>
            <div class="studio-stats">
              <div><small>Scenes</small><strong>17 / 24</strong></div>
              <div><small>Voice</small><strong>Edge TTS</strong></div>
              <div><small>Renderer</small><strong>FFmpeg</strong></div>
            </div>
            <div class="studio-action-row">
              <div class="studio-action-copy">
                <b>Build from available scenes</b>
                <span>Only matched image + audio pairs are included.</span>
              </div>
              <button type="button">Build video</button>
            </div>
          </div>
        </div>`;
    }
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',setupDesktop);
  }else{
    setupDesktop();
  }
})();
