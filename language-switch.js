(() => {
  const pairs = [
    ['Skills','Навыки'],['Solutions','Решения'],['Experience','Опыт'],['Projects','Проекты'],['Resume','Резюме'],['Contact','Контакты'],
    ['Download CV','Скачать резюме'],['Contact me','Связаться'],['View resume','Открыть резюме'],
    ['IT Support & Automation Specialist','Специалист по IT-поддержке и автоматизации'],
    ['IT Support','IT-поддержка'],['& Automation','и автоматизация'],
    ['Kyrgyzstan · Open to relocation across Europe','Кыргызстан · Готов к удалённой работе и релокации'],
    ['Kyrgyzstan — open to relocation','Кыргызстан — открыт к удалённой работе и релокации'],
    ['Open to Europe','Открыт к Европе'],['Open to relocation','Готов к релокации'],
    ['Available for remote work','Доступен для удалённой работы'],
    ['Nearly 3 years of practical IT experience supporting users, Windows workstations, networks and hardware — plus hands-on Python/FFmpeg automation and web projects.','Почти 3 года практического опыта в IT: поддержка пользователей, Windows-компьютеров, сетей и оборудования, а также автоматизация на Python/FFmpeg и веб-проекты.'],
    ['Candidate Profile','Профиль кандидата'],['Location','Локация'],['Languages','Языки'],['Target roles','Целевые позиции'],
    ['Russian — fluent · English — technical reading','Русский — свободно · Английский — техническое чтение'],
    ['IT Support · Junior Sysadmin · Technical Support','IT-поддержка · Junior Sysadmin · Техническая поддержка'],
    ['Professional IT Engineer / Programmer role','Официальная работа инженером-программистом'],
    ['Supported in a college environment','Поддержка компьютеров в колледже'],
    ['combined practical IT experience','совокупного практического опыта в IT'],
    ['Professional experience','Профессиональный опыт'],
    ['Core skills','Основные навыки'],['Core Skills','Основные навыки'],
    ['Practical support skills focused on keeping users, devices and networks working.','Практические навыки поддержки пользователей, устройств и сетей.'],
    ['Windows & Hardware','Windows и оборудование'],
    ['Windows, hardware and workstation troubleshooting.','Диагностика Windows, оборудования и рабочих станций.'],
    ['OS installation, drivers, BIOS, diagnostics, component replacement and troubleshooting.','Установка ОС, драйверов, настройка BIOS, диагностика, замена компонентов и устранение неисправностей.'],
    ['Workstation setup, repair and everyday user support.','Настройка и ремонт рабочих станций, повседневная поддержка пользователей.'],
    ['Windows installation, recovery and driver setup','Установка и восстановление Windows, настройка драйверов'],
    ['BIOS, SSD, RAM and component diagnostics','Диагностика BIOS, SSD, RAM и компонентов'],
    ['Software installation and performance troubleshooting','Установка ПО и устранение проблем производительности'],
    ['PC component replacement and workstation maintenance','Замена компонентов ПК и обслуживание рабочих станций'],
    ['Networking','Сети'],
    ['LAN, Wi-Fi, routers and connectivity diagnostics.','LAN, Wi‑Fi, роутеры и диагностика подключения.'],
    ['Routers, Wi-Fi, LAN, IP addressing, cable crimping and connectivity troubleshooting.','Роутеры, Wi‑Fi, LAN, IP-адресация, обжим кабелей и устранение проблем подключения.'],
    ['Practical LAN and Wi-Fi troubleshooting for real users and devices.','Практическая диагностика LAN и Wi‑Fi для пользователей и устройств.'],
    ['Router and Wi-Fi setup and troubleshooting','Настройка и диагностика роутеров и Wi‑Fi'],
    ['LAN connectivity and IP addressing','LAN-подключение и IP-адресация'],
    ['Cable crimping and physical network checks','Обжим кабелей и физическая проверка сети'],
    ['Diagnosing no-internet, IP conflict and connection issues','Диагностика отсутствия интернета, конфликтов IP и проблем соединения'],
    ['Remote Support','Удалённая поддержка'],
    ['AnyDesk, Veyon and practical end-user support.','AnyDesk, Veyon и практическая поддержка пользователей.'],
    ['AnyDesk, Veyon, end-user assistance and classroom workstation administration.','AnyDesk, Veyon, помощь пользователям и администрирование учебных компьютеров.'],
    ['Fast end-user assistance without interrupting day-to-day work.','Быстрая удалённая помощь пользователям без остановки их работы.'],
    ['Remote user support and workstation administration','Удалённая поддержка пользователей и администрирование рабочих станций'],
    ['AnyDesk troubleshooting sessions','Удалённая диагностика через AnyDesk'],
    ['Veyon classroom PC management','Управление учебными ПК через Veyon'],
    ['Clear step-by-step support for non-technical users','Понятная пошаговая помощь нетехническим пользователям'],
    ['Command Line','Командная строка'],
    ['Active use of CMD and PowerShell for diagnostics and system tasks.','Активное использование CMD и PowerShell для диагностики и системных задач.'],
    ['Virtualization','Виртуализация'],
    ['Hands-on experience with virtual machines and test environments.','Практический опыт работы с виртуальными машинами и тестовыми средами.'],
    ['Automation & Web','Автоматизация и веб'],
    ['Python, FFmpeg and web automation workflows.','Python, FFmpeg и автоматизация веб-процессов.'],
    ['Python, FFmpeg, HTML, CSS, GitHub, websites and AI-assisted development workflows.','Python, FFmpeg, HTML, CSS, GitHub, сайты и разработка с помощью ИИ.'],
    ['Small automation tools and web projects that reduce repetitive work.','Небольшие инструменты автоматизации и веб-проекты, сокращающие рутинную работу.'],
    ['Python automation for repetitive workflows','Автоматизация повторяющихся процессов на Python'],
    ['FFmpeg-based video processing and assembly','Обработка и сборка видео с помощью FFmpeg'],
    ['HTML/CSS website development and deployment','Разработка и публикация сайтов на HTML/CSS'],
    ['AI-assisted application development and workflow design','Разработка приложений и процессов с помощью ИИ'],
    ['View details  ↗','Подробнее ↗'],['View project details ↗','Подробнее о проекте ↗'],['Open full case study ↗','Открыть полный кейс ↗'],
    ['Show details','Показать подробнее'],['Hide details','Скрыть подробности'],
    ['Technical support in a real multi-user environment.','Техническая поддержка в реальной многопользовательской среде.'],
    ['IT Engineer / Programmer — Bishkek Innovation College, Kyrgyzstan','Инженер-программист — Бишкекский Инновационный Колледж, Кыргызстан'],
    ['Supported approximately 50 Windows PCs used by staff and students.','Поддерживал около 50 компьютеров Windows, которыми пользовались сотрудники и студенты.'],
    ['Installed and recovered Windows, drivers and software; diagnosed hardware, startup and performance issues.','Устанавливал и восстанавливал Windows, драйверы и ПО; диагностировал неисправности оборудования, запуска и производительности.'],
    ['Configured routers, Wi-Fi connectivity, LAN and IP addressing; performed basic network cabling and troubleshooting.','Настраивал роутеры, Wi‑Fi, LAN и IP-адресацию; выполнял базовую прокладку/обжим сети и диагностику подключения.'],
    ['Provided direct user support and remote troubleshooting through AnyDesk and Veyon.','Оказывал прямую поддержку пользователям и удалённо решал проблемы через AnyDesk и Veyon.'],
    ['Used CMD and PowerShell for diagnostics and day-to-day system administration tasks.','Использовал CMD и PowerShell для диагностики и повседневных задач системного администрирования.'],
    ['Independent IT Support & Personal Projects','Самостоятельная IT-поддержка и личные проекты'],
    ['PC setup, troubleshooting, software installation and network configuration.','Настройка ПК, устранение неисправностей, установка ПО и настройка сети.'],
    ['Built websites and maintained personal technical projects.','Создавал сайты и развивал собственные технические проекты.'],
    ['Expanded development skills through automation, GitHub and AI-assisted coding.','Развивал навыки разработки через автоматизацию, GitHub и программирование с помощью ИИ.'],
    ['Featured project','Ключевой проект'],['Featured Project','Ключевой проект'],['FEATURED PROJECT','КЛЮЧЕВОЙ ПРОЕКТ'],
    ['A working project demonstrating automation, systems thinking and practical delivery.','Рабочий проект, демонстрирующий автоматизацию, системное мышление и практическую реализацию.'],
    ['AI Content Studio — YouTube Production Automation','AI Content Studio — автоматизация производства YouTube-контента'],
    ['AI-assisted production workflow for projects, scenes, voice and FFmpeg video assembly.','Производственный процесс с помощью ИИ для проектов, сцен, озвучки и сборки видео через FFmpeg.'],
    ['Active project','Активный проект'],
    ['An AI-assisted application built to reduce repetitive work across multi-channel YouTube production.','Приложение с поддержкой ИИ, созданное для сокращения рутины при производстве контента для нескольких YouTube-каналов.'],
    ['What it does','Что умеет'],
    ['Organizes channels, projects, templates and scene workflows','Организует каналы, проекты, шаблоны и работу со сценами'],
    ['Generates scripts, prompts, images and Edge TTS voice','Генерирует сценарии, промпты, изображения и озвучку Edge TTS'],
    ['Matches available image + audio scene pairs automatically','Автоматически сопоставляет готовые пары изображение + аудио'],
    ['Builds videos with FFmpeg without waiting for every scene','Собирает видео через FFmpeg, не дожидаясь готовности всех сцен'],
    ['Case study — AI Content Studio','Кейс — AI Content Studio'],
    ['From a time-consuming manual workflow to one integrated production system.','От трудоёмкого ручного процесса к единой системе производства.'],
    ['Real automation project','Реальный проект автоматизации'],
    ['Automating a YouTube production pipeline','Автоматизация производства YouTube-видео'],
    ['The goal was to reduce repetitive work across script preparation, scene handling, voice generation, image/audio matching and final video assembly.','Цель — сократить повторяющуюся работу при подготовке сценария, сцен, озвучки, сопоставлении изображения и аудио и финальной сборке видео.'],
    ['Problem','Проблема'],['Solution','Решение'],['Useful detail','Важная деталь'],['Automation','Автоматизация'],['Result','Результат'],['Challenge','Задача'],['Build','Реализация'],
    ['Building videos manually from dozens of scenes was slow and error-prone.','Ручная сборка видео из десятков сцен занимала много времени и приводила к ошибкам.'],
    ['Created an AI-assisted Python application with projects, scene workflows, TTS and FFmpeg assembly.','Создано Python-приложение с поддержкой ИИ: проекты, сцены, TTS и сборка через FFmpeg.'],
    ['The builder can assemble a video from any available matching image + audio scene pairs instead of requiring every scene.','Сборщик может создавать видео из любых готовых совпадающих пар изображение + аудио, не требуя готовности всех сцен.'],
    ['workflow orchestration','управление процессом'],['video processing','обработка видео'],['interface layer','интерфейс'],
    ['From manual scene production to one controllable workflow','От ручного производства сцен к одному управляемому процессу'],
    ['The project started from a real bottleneck: too many repeated steps for every scene and every video.','Проект начался с реальной проблемы: слишком много повторяющихся действий для каждой сцены и каждого видео.'],
    ['How I solved it','Как я это решил'],
    ['Problem — scene preparation, voice generation and assembly required too many manual steps','Проблема — подготовка сцен, генерация озвучки и сборка требовали слишком много ручных действий'],
    ['Solution — one AI-assisted workflow manages projects, scenes, voice text and media preparation','Решение — единый процесс с ИИ управляет проектами, сценами, текстом озвучки и подготовкой медиа'],
    ['Automation — the builder assembles only the ready matching image + audio pairs','Автоматизация — сборщик использует только готовые совпадающие пары изображение + аудио'],
    ['Result — less repetitive work and a workflow that can continue even when some scenes are unfinished','Результат — меньше рутины, а работа продолжается даже если часть сцен ещё не готова'],
    ['Too many repeated manual steps per scene.','Слишком много повторяющихся ручных действий для каждой сцены.'],
    ['One workflow for projects, scenes and voice.','Один процесс для проектов, сцен и озвучки.'],
    ['Build video from the scene pairs that are ready.','Сборка видео из уже готовых пар сцен.'],
    ['Producing scene-based YouTube videos meant repeating the same work across scripts, images, voice and assembly.','Создание YouTube-видео по сценам требовало повторять одни и те же действия со сценариями, изображениями, озвучкой и сборкой.'],
    ['I created an AI-assisted Python workflow that organizes projects, scenes, voice generation and media preparation.','Я создал Python-процесс с поддержкой ИИ, который организует проекты, сцены, генерацию озвучки и подготовку медиа.'],
    ['FFmpeg can build a video from the image + audio scene pairs that are already ready, without waiting for every scene.','FFmpeg может собрать видео из уже готовых пар изображение + аудио, не дожидаясь остальных сцен.'],
    ['Education & certification','Образование и сертификация'],
    ['Diploma — Engineer-Programmer','Диплом — инженер-программист'],
    ['Polytechnic College at MUKR, Kyrgyzstan','Политехнический колледж при МУКР, Кыргызстан'],
    ['Junior Android Developer','Junior Android Developer'],
    ['Entry-level Android development training/certification.','Обучение и сертификация начального уровня по Android-разработке.'],
    ['Available for IT Support, Desktop Support, Technical Support and Junior System Administration roles with relocation.','Рассматриваю удалённые позиции IT Support, Desktop Support, Technical Support и Junior System Administrator.'],
    ['Email','Email'],['Phone','Телефон'],['GitHub','GitHub'],
    ['Hi, I’m','Привет, я'],
    ['DETAILS','ПОДРОБНОСТИ'],['Details','Подробности'],['Tools & environment','Инструменты и среда'],['CORE SKILL','ОСНОВНОЙ НАВЫК'],['What I can handle','Что я умею'],
    ['Close','Закрыть'],
    ['What I can solve','Какие задачи я решаю'],
    ['Practical problems I can diagnose and handle independently in day-to-day IT support.','Практические задачи, которые я могу самостоятельно диагностировать и решать в повседневной IT-поддержке.'],
    ['Windows issues','Проблемы Windows'],['Boot failures, slow systems, drivers, software errors and OS reinstallation.','Ошибки загрузки, медленная работа, драйверы, ошибки ПО и переустановка ОС.'],
    ['Network problems','Проблемы сети'],['No internet, IP conflicts, router/Wi-Fi setup, LAN and connectivity diagnostics.','Нет интернета, конфликты IP, настройка роутера/Wi‑Fi, LAN и диагностика соединения.'],
    ['Hardware troubleshooting','Диагностика оборудования'],['PC diagnostics, component replacement, BIOS settings and performance issues.','Диагностика ПК, замена компонентов, настройки BIOS и проблемы производительности.'],
    ['Remote support','Удалённая поддержка'],['User assistance through AnyDesk and Veyon without interrupting their workflow.','Помощь пользователям через AnyDesk и Veyon без остановки их рабочего процесса.'],
    ['Command-line diagnostics','Диагностика через командную строку'],['CMD and PowerShell for troubleshooting, service checks and system tasks.','CMD и PowerShell для диагностики, проверки служб и системных задач.'],
    ['Process automation','Автоматизация процессов'],['Python and FFmpeg workflows to reduce repetitive manual work.','Python и FFmpeg для сокращения повторяющейся ручной работы.'],
    ['AI Content Studio · Project Dashboard','AI Content Studio · Панель проекта'],
    ['PROJECT READY','ПРОЕКТ ГОТОВ'],['Dashboard','Панель'],['Scenes','Сцены'],['Voice','Озвучка'],['Video Build','Сборка видео'],['ACTIVE PROJECT','АКТИВНЫЙ ПРОЕКТ'],['ready','готово'],['Renderer','Рендер'],
    ['Build from available scenes','Собрать из готовых сцен'],['Only matched image + audio pairs are included.','Включаются только совпадающие пары изображение + аудио.'],['Build video','Собрать видео']
  ];

  const enToRu = new Map(pairs);
  const ruToEn = new Map(pairs.map(([en,ru]) => [ru,en]));
  const STORAGE_KEY = 'portfolio-language';
  let current = localStorage.getItem(STORAGE_KEY) === 'ru' ? 'ru' : 'en';
  let applying = false;

  const normalize = s => s.replace(/\s+/g,' ').trim();

  function translateValue(value, lang){
    const clean = normalize(value);
    if(!clean) return value;
    const map = lang === 'ru' ? enToRu : ruToEn;
    const translated = map.get(clean);
    if(!translated) return value;
    const lead = value.match(/^\s*/)?.[0] || '';
    const tail = value.match(/\s*$/)?.[0] || '';
    return lead + translated + tail;
  }

  function translateNode(root, lang){
    if(!root) return;
    if(root.nodeType === Node.TEXT_NODE){
      const next = translateValue(root.nodeValue || '', lang);
      if(next !== root.nodeValue) root.nodeValue = next;
      return;
    }
    if(root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    if(root.nodeType === Node.ELEMENT_NODE && /^(SCRIPT|STYLE|CODE|PRE)$/i.test(root.tagName)) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node){
        const p = node.parentElement;
        if(!p || /^(SCRIPT|STYLE|CODE|PRE)$/i.test(p.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      const next=translateValue(node.nodeValue || '',lang);
      if(next!==node.nodeValue) node.nodeValue=next;
    });

    if(root.querySelectorAll){
      [root,...root.querySelectorAll('[aria-label],[title],[placeholder]')].forEach(el=>{
        if(!el.getAttribute) return;
        ['aria-label','title','placeholder'].forEach(attr=>{
          const v=el.getAttribute(attr);
          if(!v) return;
          const next=translateValue(v,lang);
          if(next!==v) el.setAttribute(attr,next);
        });
      });
    }
  }

  function setMeta(lang){
    document.documentElement.lang = lang;
    document.title = lang === 'ru' ? 'Ryskeldiev Baiel | IT-поддержка и автоматизация' : 'Ryskeldiev Baiel | IT Support & Automation';
    const meta=document.querySelector('meta[name="description"]');
    if(meta) meta.setAttribute('content', lang === 'ru' ? 'Портфолио Ryskeldiev Baiel — IT-поддержка, Junior System Administrator и автоматизация.' : 'Ryskeldiev Baiel - IT Support Specialist, Junior System Administrator and Automation portfolio.');
  }

  function updateButton(){
    const btn=document.getElementById('langSwitch');
    if(!btn) return;
    const target=current==='en'?'RU':'EN';
    btn.querySelector('.lang-label').textContent=target;
    btn.setAttribute('aria-label',current==='en'?'Переключить сайт на русский':'Switch site to English');
    btn.setAttribute('title',current==='en'?'Русская версия':'English version');
  }

  function applyLanguage(lang){
    current=lang;
    localStorage.setItem(STORAGE_KEY,lang);
    applying=true;
    translateNode(document.body,lang);
    setMeta(lang);
    updateButton();
    applying=false;
  }

  function addButton(){
    if(document.getElementById('langSwitch')) return;
    const nav=document.querySelector('.nav');
    if(!nav) return;
    const btn=document.createElement('button');
    btn.type='button';
    btn.id='langSwitch';
    btn.className='lang-switch';
    btn.innerHTML='<span class="lang-globe" aria-hidden="true">🌐</span><span class="lang-label">RU</span>';
    btn.addEventListener('click',()=>applyLanguage(current==='en'?'ru':'en'));
    const cta=nav.querySelector('.nav-cta');
    if(cta) nav.insertBefore(btn,cta); else nav.appendChild(btn);
    updateButton();
  }

  function init(){
    addButton();
    applyLanguage(current);
    const observer=new MutationObserver(mutations=>{
      if(applying) return;
      if(current!=='ru') return;
      applying=true;
      for(const m of mutations){
        if(m.type==='characterData') translateNode(m.target,'ru');
        m.addedNodes?.forEach(n=>translateNode(n,'ru'));
      }
      applying=false;
    });
    observer.observe(document.body,{subtree:true,childList:true,characterData:true});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(init,350));
  else setTimeout(init,350);
})();
