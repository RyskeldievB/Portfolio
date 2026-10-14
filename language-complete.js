(() => {
  const textBySelector = {
    '.brand-text': ['RYSKELDIEV BAIEL','РЫСКЕЛЬДИЕВ БАЙЭЛ'],
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

  const pairs = [
    ['Skills','Навыки'],['Solutions','Решения'],['Experience','Опыт'],['Projects','Проекты'],['Resume','Резюме'],['Contact','Контакты'],['Hire me','Нанять меня'],
    ['Kyrgyzstan · Open to relocation across Europe','Кыргызстан · Открыт к удалённой работе и релокации'],
    ['Kyrgyzstan — open to relocation','Кыргызстан — открыт к удалённой работе и релокации'],
    ['Open to relocation across Europe','Открыт к удалённой работе и релокации'],
    ['IT Support','IT-поддержка'],['& Automation','и автоматизация'],['Specialist','Специалист'],
    ['Nearly 3 years of practical IT experience supporting users, Windows workstations, networks and hardware — combined with hands-on Python, FFmpeg, web development and AI-assisted automation projects.','Почти 3 года практического опыта в IT: поддержка пользователей, Windows-компьютеров, сетей и оборудования, а также Python, FFmpeg, веб-разработка и автоматизация с помощью ИИ.'],
    ['Focused on','Основной фокус'],['View Resume','Открыть резюме'],['View resume','Открыть резюме'],['Contact me','Связаться'],['GitHub profile','Профиль GitHub'],['View project','Открыть проект'],
    ['Supported in a real college environment','Поддержка в реальной среде колледжа'],['Years','Года'],['Combined practical IT experience','Совокупный практический опыт в IT'],['combined practical IT experience','совокупный практический опыт в IT'],
    ['Automation workflows and video building','Автоматизация процессов и сборка видео'],['Windows, users, devices, networks and remote tools','Windows, пользователи, устройства, сети и удалённые инструменты'],
    ['Candidate profile','Профиль кандидата'],['Candidate Profile','Профиль кандидата'],
    ['IT Support Specialist · Junior System Administrator · Technical Support','Специалист IT-поддержки · Младший системный администратор · Техническая поддержка'],
    ['Location','Локация'],['Kyrgyzstan','Кыргызстан'],['Relocation','Формат работы'],['Open to Europe','Удалённо / релокация'],['Email','Email'],['Phone','Телефон'],
    ['Windows Support','Поддержка Windows'],['Networking','Сети'],['Remote Support','Удалённая поддержка'],['Virtualization','Виртуализация'],['Automation','Автоматизация'],['PowerShell','PowerShell'],
    ['Core skills','Основные навыки'],['Core Skills','Основные навыки'],
    ['Practical support skills focused on keeping users, devices and networks stable and productive.','Практические навыки поддержки, чтобы пользователи, устройства и сети работали стабильно.'],
    ['Windows & Hardware','Windows и оборудование'],['OS installation, drivers, BIOS, diagnostics, component replacement and troubleshooting.','Установка ОС, драйверы, BIOS, диагностика, замена компонентов и устранение неисправностей.'],
    ['Routers, Wi-Fi, LAN, IP addressing, cable crimping and connectivity troubleshooting.','Роутеры, Wi‑Fi, LAN, IP-адресация, обжим кабелей и устранение проблем подключения.'],
    ['AnyDesk, Veyon, end-user assistance and workstation administration.','AnyDesk, Veyon, помощь пользователям и администрирование рабочих станций.'],
    ['Command Line','Командная строка'],['Active use of CMD and PowerShell for diagnostics and everyday system tasks.','Активное использование CMD и PowerShell для диагностики и повседневных системных задач.'],
    ['Hands-on experience with virtual machines and test environments.','Практический опыт работы с виртуальными машинами и тестовыми средами.'],
    ['Automation & Web','Автоматизация и веб'],['Python, FFmpeg, HTML, CSS, GitHub, websites and AI-assisted development.','Python, FFmpeg, HTML, CSS, GitHub, сайты и разработка с помощью ИИ.'],
    ['What I can solve','Что я могу решать'],['Real problems I can diagnose and handle in day-to-day IT support.','Реальные задачи, которые я могу диагностировать и решать в ежедневной IT-поддержке.'],
    ['Windows issues','Проблемы Windows'],['OS recovery, drivers, startup failures, performance problems and software installation.','Восстановление ОС, драйверы, ошибки запуска, проблемы производительности и установка ПО.'],
    ['Network problems','Проблемы сети'],['Routers, Wi-Fi, LAN, IP addressing, cabling and connectivity troubleshooting.','Роутеры, Wi‑Fi, LAN, IP-адресация, кабели и диагностика подключения.'],
    ['Hardware diagnostics','Диагностика оборудования'],['PC components, BIOS, SSD/RAM issues and practical workstation troubleshooting.','Компоненты ПК, BIOS, проблемы SSD/RAM и практическая диагностика рабочих станций.'],
    ['Remote support','Удалённая поддержка'],['End-user assistance with AnyDesk, Veyon and clear step-by-step troubleshooting.','Помощь пользователям через AnyDesk, Veyon и понятная пошаговая диагностика.'],
    ['Command-line diagnostics','Диагностика через командную строку'],['CMD and PowerShell for network checks, system diagnostics and routine admin tasks.','CMD и PowerShell для проверки сети, системной диагностики и обычных задач администрирования.'],
    ['Python and FFmpeg workflows that reduce repetitive work and speed up content production.','Процессы на Python и FFmpeg, которые сокращают рутинную работу и ускоряют производство контента.'],
    ['Hands-on technical support in a real multi-user environment plus independent project work.','Практическая техническая поддержка в реальной многопользовательской среде плюс самостоятельные проекты.'],
    ['Dec 2025 – Sep 2026','Дек. 2025 – Сен. 2026'],['IT Engineer / Programmer — Bishkek Innovation College','Инженер-программист — Бишкекский Инновационный Колледж'],
    ['Supported approximately 50 Windows PCs used by staff and students.','Поддерживал около 50 компьютеров Windows, которыми пользовались сотрудники и студенты.'],
    ['Installed and recovered Windows, drivers and software; diagnosed hardware, startup and performance issues.','Устанавливал и восстанавливал Windows, драйверы и ПО; диагностировал проблемы оборудования, запуска и производительности.'],
    ['Configured routers, Wi-Fi, LAN and IP addressing; performed network cabling and troubleshooting.','Настраивал роутеры, Wi‑Fi, LAN и IP-адресацию; выполнял сетевые работы и диагностику подключения.'],
    ['Provided direct user support through AnyDesk and Veyon.','Оказывал прямую поддержку пользователям через AnyDesk и Veyon.'],
    ['Used CMD and PowerShell for diagnostics and routine administration.','Использовал CMD и PowerShell для диагностики и повседневного администрирования.'],
    ['~2 years','~2 года'],['Independent IT Support & Personal Projects','Самостоятельная IT-поддержка и личные проекты'],['Practical work beyond formal employment','Практический опыт вне официальной работы'],
    ['PC setup, troubleshooting, software installation and network configuration.','Настройка ПК, устранение неисправностей, установка ПО и настройка сети.'],
    ['Built websites and maintained technical projects.','Создавал сайты и поддерживал технические проекты.'],['Expanded development skills through automation, GitHub and AI-assisted coding.','Развивал навыки разработки через автоматизацию, GitHub и программирование с помощью ИИ.'],
    ['Featured project','Ключевой проект'],['Featured Project','Ключевой проект'],['FEATURED PROJECT','КЛЮЧЕВОЙ ПРОЕКТ'],['A real project demonstrating automation, systems thinking and end-to-end delivery.','Реальный проект, демонстрирующий автоматизацию, системное мышление и реализацию от начала до конца.'],
    ['AI Content Studio — YouTube Production Automation','AI Content Studio — автоматизация производства YouTube-контента'],
    ['AI-assisted application for multi-channel YouTube workflows. Supports projects/templates, script and prompt generation, scene workflows, image generation, Edge TTS voice generation, zoom/pan processing and FFmpeg video assembly.','Приложение с поддержкой ИИ для работы с несколькими YouTube-каналами: проекты и шаблоны, генерация сценариев и промптов, сцены, изображения, озвучка Edge TTS, zoom/pan и сборка видео через FFmpeg.'],
    ['Repository is currently private while the project is under active development.','Репозиторий пока закрыт, так как проект активно развивается.'],['Active project','Активный проект'],
    ['Case study — AI Content Studio','Кейс — AI Content Studio'],['A practical automation project built to turn a repetitive content workflow into one controllable system.','Практический проект автоматизации, который превращает повторяющийся процесс производства контента в одну управляемую систему.'],
    ['Problem','Проблема'],['Producing scene-based YouTube videos required too many manual steps: script preparation, scene handling, audio generation and video assembly.','Создание YouTube-видео из сцен требовало слишком много ручных действий: подготовка сценария, работа со сценами, генерация аудио и сборка видео.'],
    ['Solution','Решение'],['I built an AI-assisted workflow that manages projects, scenes, voice text, image flow and FFmpeg video assembly in one place.','Я создал процесс с поддержкой ИИ, который в одном месте управляет проектами, сценами, текстом озвучки, изображениями и сборкой видео через FFmpeg.'],
    ['The builder can assemble a video from any available matching image + audio scene pairs instead of waiting for every scene to be complete.','Сборщик может создать видео из любых готовых совпадающих пар изображение + аудио, не дожидаясь готовности всех сцен.'],
    ['Stack','Стек'],['Value','Ценность'],['The project demonstrates troubleshooting, workflow design, automation thinking and the ability to turn a real problem into working software.','Проект показывает навыки диагностики, проектирования процессов, автоматизации и умение превращать реальную проблему в рабочее ПО.'],
    ['Dashboard','Панель'],['Scenes','Сцены'],['Voice','Озвучка'],['Video Build','Сборка видео'],['Project','Проект'],['Horror Story #07','Horror Story #07'],['Ready scene pairs','Готовые пары сцен'],['Renderer','Рендерер'],['Build available scenes','Собрать готовые сцены'],
    ['Education & certification','Образование и сертификаты'],['Diploma — Engineer-Programmer','Диплом — Инженер-программист'],['Polytechnic College at MUKR, Kyrgyzstan','Политехнический колледж при МУКР, Кыргызстан'],['Certificate','Сертификат'],['Junior Android Developer','Junior Android Developer'],
    ['Available for IT Support, Desktop Support, Technical Support and Junior System Administration roles with relocation.','Доступен для удалённой работы в IT Support, Desktop Support, Technical Support и на позициях младшего системного администратора.'],
    ['Languages','Языки'],['Russian — fluent · English — technical reading','Русский — свободно · Английский — техническое чтение'],['Target roles','Целевые позиции'],['IT Support · Junior Sysadmin · Technical Support','IT-поддержка · Младший системный администратор · Техническая поддержка'],
    ['Ryskeldiev Baiel — IT Support & Automation Specialist','Рыскельдиев Байэл — специалист по IT-поддержке и автоматизации'],
    ['View details  ↗','Подробнее ↗'],['View details ↗','Подробнее ↗'],['View project details ↗','Подробнее о проекте ↗'],['Open full case study ↗','Открыть полный кейс ↗'],['Show details','Показать подробнее'],['Hide details','Скрыть подробности'],
    ['DETAILS','ПОДРОБНОСТИ'],['Details','Подробности'],['Tools & environment','Инструменты и среда'],['What I can handle','Что я умею'],['CORE SKILL','КЛЮЧЕВОЙ НАВЫК'],['PROJECT READY','ПРОЕКТ ГОТОВ'],['ACTIVE PROJECT','АКТИВНЫЙ ПРОЕКТ'],['Build from available scenes','Собрать из готовых сцен'],['Only matched image + audio pairs are included.','Используются только готовые пары изображение + аудио.'],['Build video','Собрать видео'],
    ['Challenge','Задача'],['Build','Реализация'],['Result','Результат'],['Automation','Автоматизация'],
    ['Too many repeated manual steps per scene.','Слишком много повторяющихся ручных действий для каждой сцены.'],['One workflow for projects, scenes and voice.','Один процесс для проектов, сцен и озвучки.'],['Build video from the scene pairs that are ready.','Сборка видео из уже готовых пар сцен.'],
    ['Hi, I’m','Привет, я'],['Open to Europe','Открыт к удалённой работе'],['Swipe cards →','Листайте карточки →'],['Tap to collapse −','Нажмите, чтобы свернуть −'],['Hide details −','Скрыть подробности −'],
    ['Download CV','Скачать резюме'],['Available for remote work','Доступен для удалённой работы'],['Open to remote work','Открыт к удалённой работе']
  ];

  const exact = new Map(pairs);
  const reverse = new Map(pairs.map(([en,ru]) => [ru,en]));

  function isRu(){
    return document.documentElement.lang === 'ru' ||
      localStorage.getItem('portfolio-language') === 'ru' ||
      localStorage.getItem('portfolioLanguage') === 'ru' ||
      localStorage.getItem('language') === 'ru';
  }

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

  function applyAttributes(ru){
    const attrPairs = [
      ['View project details','Подробнее о проекте'],['Close','Закрыть'],['Switch site to English','Переключить сайт на английский'],['Переключить сайт на русский','Переключить сайт на русский']
    ];
    document.querySelectorAll('[aria-label],[title]').forEach(el=>{
      ['aria-label','title'].forEach(attr=>{
        const value=el.getAttribute(attr); if(!value) return;
        for(const [en,rus] of attrPairs){
          if(ru && value===en) el.setAttribute(attr,rus);
          if(!ru && value===rus) el.setAttribute(attr,en);
        }
      });
    });
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
    applyAttributes(ru);
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
    document.addEventListener('click',e=>{ if(e.target.closest('#langSwitch,.language-switch,.lang-switch,[data-lang]')) setTimeout(apply,0); },true);
    setTimeout(apply,100); setTimeout(apply,350); setTimeout(apply,900); setTimeout(apply,1600);
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
