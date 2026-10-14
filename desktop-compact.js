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
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',setupDesktop);
  }else{
    setupDesktop();
  }
})();
