(() => {
  const textBySelector = {
    '.profile-title': ['Candidate Profile','Профиль кандидата'],
    '.profile-name': ['Ryskeldiev Baiel','Рыскельдиев Байэл'],
    '.profile-role': ['IT Support Specialist · Junior System Administrator · Technical Support','Специалист IT-поддержки · Младший системный администратор · Техническая поддержка'],
    '.mobile-hello-kicker': ["Hi, I’m",'Привет, я'],
    '.mobile-hello-name': ['Ryskeldiev Baiel','Рыскельдиев Байэл'],
    '.mobile-hello-role': ['IT Support & Automation Specialist','Специалист по IT-поддержке и автоматизации'],
    '.project-compact-kicker': ['FEATURED PROJECT','КЛЮЧЕВОЙ ПРОЕКТ'],
    '.skill-modal-kicker': ['DETAILS','ПОДРОБНОСТИ'],
    '.studio-window-status': ['PROJECT READY','ПРОЕКТ ГОТОВ']
  };

  const exact = new Map([
    ['Dashboard','Панель'],
    ['Projects','Проекты'],
    ['Scenes','Сцены'],
    ['Voice','Озвучка'],
    ['Video Build','Сборка видео'],
    ['ACTIVE PROJECT','АКТИВНЫЙ ПРОЕКТ'],
    ['Scenes','Сцены'],
    ['Renderer','Рендерер'],
    ['Build from available scenes','Собрать из готовых сцен'],
    ['Only matched image + audio pairs are included.','Используются только готовые пары изображение + аудио.'],
    ['Build video','Собрать видео'],
    ['Details','Подробности'],
    ['Tools & environment','Инструменты и среда'],
    ['What I can handle','Что я умею'],
    ['CORE SKILL','КЛЮЧЕВОЙ НАВЫК'],
    ['View details  ↗','Подробнее ↗'],
    ['View details ↗','Подробнее ↗'],
    ['View project details ↗','Подробнее о проекте ↗'],
    ['Open full case study ↗','Открыть полный кейс ↗'],
    ['Show details','Показать подробнее'],
    ['Hide details','Скрыть подробности'],
    ['Active project','Активный проект'],
    ['Challenge','Задача'],
    ['Build','Реализация'],
    ['Result','Результат'],
    ['Problem','Проблема'],
    ['Solution','Решение'],
    ['Automation','Автоматизация'],
    ['Contact me','Связаться'],
    ['Download CV','Скачать резюме'],
    ['View resume','Открыть резюме'],
    ['Candidate Profile','Профиль кандидата'],
    ['Location','Локация'],
    ['Languages','Языки'],
    ['Target roles','Целевые позиции'],
    ['Available for remote work','Доступен для удалённой работы'],
    ['Open to remote work','Открыт к удалённой работе'],
    ['Open to Europe','Открыт к Европе'],
    ['Professional experience','Профессиональный опыт'],
    ['Core skills','Основные навыки'],
    ['Core Skills','Основные навыки'],
    ['Featured project','Ключевой проект'],
    ['Featured Project','Ключевой проект'],
    ['Case study — AI Content Studio','Кейс — AI Content Studio'],
    ['Education & certification','Образование и сертификаты'],
    ['Contact','Контакты']
  ]);
  const reverse = new Map([...exact].map(([en,ru]) => [ru,en]));

  function isRu(){ return document.documentElement.lang === 'ru' || localStorage.getItem('portfolioLanguage') === 'ru' || localStorage.getItem('language') === 'ru'; }

  function replaceTextNode(node, ru){
    const raw=node.nodeValue;
    if(!raw || !raw.trim()) return;
    const trimmed=raw.trim();
    const map=ru?exact:reverse;
    if(!map.has(trimmed)) return;
    node.nodeValue=raw.replace(trimmed,map.get(trimmed));
  }

  function walk(root, ru){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(n){
      const p=n.parentElement;
      if(!p || ['SCRIPT','STYLE','NOSCRIPT'].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    let n; while((n=walker.nextNode())) replaceTextNode(n,ru);
  }

  function apply(){
    const ru=isRu();
    Object.entries(textBySelector).forEach(([sel,[en,rus]])=>{
      document.querySelectorAll(sel).forEach(el=>{
        const wanted=ru?rus:en;
        if(el.textContent.trim()!==wanted) el.textContent=wanted;
      });
    });
    walk(document.body,ru);

    document.querySelectorAll('.info-row').forEach(row=>{
      const label=row.querySelector('span');
      const value=row.querySelector('strong');
      if(!label||!value) return;
      if(ru){
        if(label.textContent.trim()==='Location') label.textContent='Локация';
        if(label.textContent.trim()==='Languages') label.textContent='Языки';
        if(label.textContent.trim()==='Target roles') label.textContent='Целевые позиции';
      }
    });

    document.querySelectorAll('footer .wrap, .footer-box').forEach(el=>{
      if(ru) el.innerHTML=el.innerHTML.replaceAll('Ryskeldiev Baiel','Рыскельдиев Байэл');
      else el.innerHTML=el.innerHTML.replaceAll('Рыскельдиев Байэл','Ryskeldiev Baiel');
    });
  }

  let scheduled=false;
  const schedule=()=>{ if(scheduled) return; scheduled=true; requestAnimationFrame(()=>{scheduled=false;apply();}); };
  const start=()=>{
    apply();
    new MutationObserver(schedule).observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['lang']});
    document.addEventListener('click',e=>{ if(e.target.closest('.language-switch,.lang-switch,[data-lang],button,a')) setTimeout(apply,0); },true);
    setTimeout(apply,350); setTimeout(apply,900);
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
