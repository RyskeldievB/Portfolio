(() => {
  function isRussianUI(){
    const text=(document.body?.innerText||'');
    return /Навыки|Опыт|Проекты|Контакты|Резюме/.test(text);
  }

  function syncResumeLinks(){
    const ru=isRussianUI();
    document.querySelectorAll('a[href]').forEach(a=>{
      const href=a.getAttribute('href')||'';
      if(href==='resume.html' || href==='resume-ru.html'){
        a.setAttribute('href',ru?'resume-ru.html':'resume.html');
      }
    });
  }

  const start=()=>{
    syncResumeLinks();
    const observer=new MutationObserver(()=>syncResumeLinks());
    observer.observe(document.body,{subtree:true,childList:true,characterData:true});
    document.addEventListener('click',()=>setTimeout(syncResumeLinks,0),true);
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start);
  else start();
})();
