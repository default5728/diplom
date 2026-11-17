// ===== Пошта, на яку приходять заявки від відвідувачів =====
const OWNER_EMAIL = 'aleksanderkey3@gmail.com';

// ===== Дані про 4 готові проєкти портфоліо =====
const PROJECTS = [
  {
    id: 'project_1',
    num: '01',
    dotColor: '#48634B',
    url: 'project_1.html',
    image: '/images/project_1.jpg',
    title: 'Інтерактивна веб-карта Rust',
    subtitle: 'Готовий проєкт 01',
    shortDesc: 'Готова веб-карта ігрового світу Rust із позначенням локацій, фільтрацією монументів та інтеграцією REST API.',
    stack: 'HTML, CSS, JavaScript, REST API',
    status: 'Готовий вебпроєкт · Працює онлайн',
    externalUrl: 'https://rustmap.onrender.com',
    externalLabel: 'Відкрити сайт проєкту',
    showcaseSub: 'Інтерактивні шари локацій, пошук об’єктів та інтеграція з REST API',
    features: [
      'Інтерактивна мапа ігрового світу з масштабуванням та навігацією.',
      'Фільтрація та пошук ігрових локацій і монументів за категоріями.',
      'Отримання актуальних даних карти через REST API.'
    ]
  },
  {
    id: 'project_2',
    num: '02',
    dotColor: '#2B4C65',
    url: 'project_2.html',
    image: '/images/project_2.jpg',
    title: 'Telegram-бот зворотного зв’язку',
    subtitle: 'Готовий проєкт 02',
    shortDesc: 'Робочий Telegram-бот, який збирає заявки користувачів, відповідає на базові запитання та пересилає звернення адміністратору.',
    stack: 'Python або JavaScript, Telegram Bot API',
    status: 'Готовий проєкт · Telegram Bot API',
    externalUrl: 'https://t.me/BotFather',
    externalLabel: 'Перейти до Telegram',
    showcaseSub: 'Приймання звернень, команди меню та миттєва передача адміністратору',
    features: [
      'Інтерактивне меню та автоматичні відповіді на типові запитання.',
      'Приймання звернень користувачів і миттєва передача адміністратору.',
      'Інтеграція з Telegram Bot API та валідація повідомлень.'
    ]
  },
  {
    id: 'project_3',
    num: '03',
    dotColor: '#6E5A3E',
    url: 'project_3.html',
    image: '/images/project_3.jpg',
    title: 'Калькулятор вартості вебпослуг',
    subtitle: 'Готовий проєкт 03',
    shortDesc: 'Інтерактивний калькулятор вартості послуг (лендінг, RAG-пошук, Telegram-бот, API) з миттєвим підрахунком та відправкою замовлення на пошту.',
    stack: 'HTML, CSS, JavaScript',
    status: 'Готовий інтерактивний інструмент',
    externalUrl: '',
    externalLabel: '',
    showcaseSub: 'Розрахунок вартості робіт, прозора структура послуг та відправка у форму зв’язку',
    features: [
      'Вибір потрібних типів робіт і додаткових модулів розробки.',
      'Миттєвий автоматичний підрахунок орієнтовної вартості проєкту.',
      'Передача сформованого замовлення у форму зворотного зв’язку на головній.'
    ]
  },
  {
    id: 'project_4',
    num: '04',
    dotColor: '#222624',
    url: 'project_4.html',
    image: '/images/project_4.jpg',
    title: 'Персональне вебпортфоліо',
    subtitle: 'Готовий проєкт 04',
    shortDesc: 'Цей багатосторінковий сайт-портфоліо з презентацією Canva, оглядом робіт, пошуком по сайту та поштовою формою.',
    stack: 'HTML, CSS, JavaScript',
    status: 'Готовий проєкт · Опубліковано',
    externalUrl: '',
    externalLabel: '',
    showcaseSub: 'Єдиний сайт із готовими роботами, презентацією, пошуком і формою зв’язку',
    features: [
      'Презентація кваліфікаційної роботи (Canva) та огляд усіх проєктів.',
      'Адаптивна багатосторінкова структура зі світлою та темною темами.',
      'Швидкий пошук по сайту та відправка повідомлень через Gmail.'
    ]
  }
];

// ===== Послуги для калькулятора (на project_3.html) =====
const SERVICES = [
  {
    id: 'landing',
    title: 'Лендінг-сайт під ключ',
    desc: 'Адаптивна верстка, анімації, форма зворотного зв’язку та базова SEO-оптимізація.',
    price: 4500
  },
  {
    id: 'rag',
    title: 'RAG-система / AI-асистент',
    desc: 'Розумний пошук і чат по ваших документах або базі знань компанії.',
    price: 7500
  },
  {
    id: 'tg_bot',
    title: 'Telegram-бот',
    desc: 'Інтерактивне меню, збір заявок, відповіді на запитання та сповіщення адміну.',
    price: 3500
  },
  {
    id: 'backend_api',
    title: 'База даних і REST API',
    desc: 'Підключення MySQL / PHP або Node.js для збереження заявок і роботи з даними.',
    price: 3000
  },
  {
    id: 'admin_panel',
    title: 'Адмін-панель або кабінет',
    desc: 'Зручне керування контентом, замовленнями та перегляд статистики.',
    price: 4000
  },
  {
    id: 'deploy',
    title: 'Налаштування хостингу і домену',
    desc: 'Публікація готового проєкту в інтернет, SSL-сертифікат та базовий захист.',
    price: 1500
  }
];

// ===== Сторінки для пошуку =====
const SEARCH_PAGES = [
  { title: 'Головна сторінка', subtitle: 'Огляд портфоліо', url: 'index.html#hero', tags: 'головна портфоліо' },
  { title: 'Презентація Canva', subtitle: 'Слайди до захисту', url: 'index.html#presentation', tags: 'презентація слайди canva iframe' },
  { title: 'Технологічний стек', subtitle: 'HTML, CSS, JS, PHP, MySQL, RAG, Git', url: 'index.html#skills', tags: 'навички html css js php mysql rag git' },
  { title: 'Зворотний зв’язок', subtitle: 'Відправити лист через Gmail', url: 'index.html#feedback', tags: 'пошта gmail email форма повідомлення контакти' },
  { title: 'Інтерактивна веб-карта Rust', subtitle: 'Проєкт 01', url: 'project_1.html', tags: 'карта rust api' },
  { title: 'Telegram-бот зворотного зв’язку', subtitle: 'Проєкт 02', url: 'project_2.html', tags: 'бот telegram телеграм' },
  { title: 'Калькулятор вартості вебпослуг', subtitle: 'Проєкт 03 · Калькулятор послуг', url: 'project_3.html#calc-section', tags: 'калькулятор вартість оцінка лендінг rag бот' },
  { title: 'Персональне вебпортфоліо', subtitle: 'Проєкт 04', url: 'project_4.html', tags: 'портфоліо сайт' },
  { title: 'Довідкові джерела', subtitle: 'Офіційна документація', url: 'index.html#resources', tags: 'документація python mdn php mysql' }
];

// ===== Ключі пам’яті браузера =====
const THEME_KEY = 'portfolio_theme_v1';
const CALC_DRAFT_KEY = 'portfolio_calc_message_draft';

// ===== 1. Перемикач світлої / темної теми =====
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.textContent = saved === 'dark' ? '☀' : '☾';

  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
    btn.textContent = next === 'dark' ? '☀' : '☾';
  });
}

// ===== 2. Висувна панель: Пошук + Проєкти =====
function initDrawer() {
  const trigger = document.getElementById('roadmap-trigger');
  const drawer = document.getElementById('bag-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('drawer-close');
  const searchInput = document.getElementById('site-search-input');
  const searchResults = document.getElementById('drawer-search-results');
  const roadmapBlock = document.getElementById('drawer-roadmap');
  const projectList = document.getElementById('drawer-project-list');
  const countBadge = document.getElementById('roadmap-count');

  if (countBadge) countBadge.textContent = String(PROJECTS.length);

  if (projectList) {
    projectList.innerHTML = PROJECTS.map(
      (proj) => `
      <a href="${proj.url}" class="drawer-project-btn">
        <span class="swatch-dot" style="background: ${proj.dotColor}"></span>
        <div class="drawer-project-info">
          <span class="drawer-project-name">${proj.num}. ${proj.title}</span>
          <span class="drawer-project-meta">${proj.stack}</span>
        </div>
        <span>→</span>
      </a>`
    ).join('');
  }

  function setOpen(open) {
    if (!drawer || !backdrop) return;
    drawer.hidden = !open;
    backdrop.hidden = !open;
  }

  trigger?.addEventListener('click', () => setOpen(true));
  closeBtn?.addEventListener('click', () => setOpen(false));
  backdrop?.addEventListener('click', () => setOpen(false));

  searchInput?.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
      searchResults.hidden = true;
      roadmapBlock.hidden = false;
      return;
    }
    roadmapBlock.hidden = true;
    searchResults.hidden = false;

    const found = SEARCH_PAGES.filter((p) =>
      `${p.title} ${p.subtitle} ${p.tags}`.toLowerCase().includes(q)
    );
    searchResults.innerHTML = found.length
      ? found
          .map(
            (p) => `
          <a href="${p.url}" class="search-result-btn">
            <span class="search-result-title">${p.title}</span>
            <span class="search-result-sub">${p.subtitle}</span>
          </a>`
          )
          .join('')
      : '<p style="opacity:0.7;">Нічого не знайдено</p>';
  });
}

// ===== 3. Статичний список реалізованого функціоналу (без вибору) =====
function renderFeatureList(listEl, projectId) {
  if (!listEl) return;
  const proj = PROJECTS.find((p) => p.id === projectId);
  if (!proj) return;

  listEl.innerHTML = proj.features
    .map(
      (text) => `
      <li class="feature-item">
        <span class="feature-check" aria-hidden="true">✓</span>
        <span>${text}</span>
      </li>`
    )
    .join('');
}

// ===== 4. Калькулятор вартості послуг (на project_4.html) =====
function initCalculator() {
  const listEl = document.getElementById('calc-services-list');
  const summaryList = document.getElementById('calc-selected-list');
  const totalEl = document.getElementById('calc-total-price');
  const sendBtn = document.getElementById('calc-send-btn');
  if (!listEl || !summaryList || !totalEl || !sendBtn) return;

  const selectedIds = new Set(['landing']);

  function updateSummary() {
    const chosen = SERVICES.filter((s) => selectedIds.has(s.id));
    const total = chosen.reduce((sum, s) => sum + s.price, 0);

    totalEl.textContent = `${total.toLocaleString('uk-UA')} ₴`;
    sendBtn.disabled = chosen.length === 0;

    if (!chosen.length) {
      summaryList.innerHTML = '<li class="calc-empty">Оберіть хоча б одну послугу зі списку.</li>';
      return;
    }

    summaryList.innerHTML = chosen
      .map(
        (s) => `
        <li class="calc-selected-row">
          <span>${s.title}</span>
          <strong>${s.price.toLocaleString('uk-UA')} ₴</strong>
        </li>`
      )
      .join('');
  }

  listEl.innerHTML = '';
  SERVICES.forEach((service) => {
    const card = document.createElement('label');
    card.className = `calc-service-card${selectedIds.has(service.id) ? ' is-selected' : ''}`;

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.className = 'calc-checkbox';
    cb.checked = selectedIds.has(service.id);

    cb.addEventListener('change', () => {
      if (cb.checked) selectedIds.add(service.id);
      else selectedIds.delete(service.id);
      card.classList.toggle('is-selected', cb.checked);
      updateSummary();
    });

    const body = document.createElement('div');
    body.className = 'calc-service-body';
    body.innerHTML = `
      <div class="calc-service-top">
        <span class="calc-service-title">${service.title}</span>
        <span class="calc-service-price">${service.price.toLocaleString('uk-UA')} ₴</span>
      </div>
      <p class="calc-service-desc">${service.desc}</p>
    `;

    card.append(cb, body);
    listEl.appendChild(card);
  });

  sendBtn.addEventListener('click', () => {
    const chosen = SERVICES.filter((s) => selectedIds.has(s.id));
    if (!chosen.length) return;

    const total = chosen.reduce((sum, s) => sum + s.price, 0);
    const lines = chosen.map((s) => `• ${s.title} — ${s.price.toLocaleString('uk-UA')} ₴`).join('\n');
    const draftMessage = `Вітаю! Мене цікавить розробка:\n${lines}\n\nОрієнтовна сума: ${total.toLocaleString('uk-UA')} ₴\nДодатковий коментар: `;

    sessionStorage.setItem(CALC_DRAFT_KEY, draftMessage);
    window.location.href = 'index.html#feedback';
  });

  updateSummary();
}

// ===== 5. Форма зворотного зв’язку (відправка через поточний Google / Gmail акаунт відвідувача) =====
function initFeedbackForm() {
  const form = document.getElementById('feedback-form');
  const card = document.getElementById('feedback-form-card');
  const nameInput = document.getElementById('feedback-name');
  const msgInput = document.getElementById('feedback-message');
  const statusBox = document.getElementById('feedback-status');
  const mailtoLink = document.getElementById('feedback-mailto-link');
  const copyBtn = document.getElementById('feedback-copy-btn');
  if (!form || !msgInput) return;

  // Підставляємо текст, якщо користувач перейшов з калькулятора на project_4.html
  const savedDraft = sessionStorage.getItem(CALC_DRAFT_KEY);
  if (savedDraft) {
    msgInput.value = savedDraft;
    sessionStorage.removeItem(CALC_DRAFT_KEY);
    if (card) {
      card.classList.add('is-highlighted');
      setTimeout(() => card.classList.remove('is-highlighted'), 1800);
    }
  }

  function buildPayload() {
    const visitorName = nameInput?.value.trim() || 'Гість сайту';
    const text = msgInput.value.trim();
    const subject = `Повідомлення з портфоліо від ${visitorName}`;
    const body = `${text}\n\n---\nВідправник: ${visitorName}`;
    return { subject, body };
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!msgInput.value.trim()) {
      msgInput.focus();
      return;
    }

    const { subject, body } = buildPayload();
    const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(OWNER_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailtoHref = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Відкриваємо Gmail від імені акаунта Google, у який увійшов відвідувач
    const triggerLink = document.createElement('a');
    triggerLink.href = gmailHref;
    triggerLink.target = '_blank';
    triggerLink.rel = 'noopener noreferrer';
    document.body.appendChild(triggerLink);
    triggerLink.click();
    triggerLink.remove();

    if (mailtoLink) mailtoLink.href = mailtoHref;
    if (statusBox) statusBox.hidden = false;
  });

  copyBtn?.addEventListener('click', () => {
    const { body } = buildPayload();
    navigator.clipboard?.writeText(body);
    copyBtn.textContent = 'Скопійовано ✓';
    setTimeout(() => {
      copyBtn.textContent = 'Скопіювати текст';
    }, 1800);
  });
}

// ===== 6. Логіка головної сторінки (index.html) =====
function initHomePage() {
  const heroStage = document.getElementById('hero-stage');
  const heroTilt = document.getElementById('hero-project-tilt');
  const heroLink = document.getElementById('hero-project-link');
  const heroImg = document.getElementById('hero-project-img');
  const heroKicker = document.getElementById('hero-project-kicker');
  const heroName = document.getElementById('hero-project-name');
  const heroBtns = document.querySelectorAll('#hero-project-swatches .swatch-btn');

  // Плавний 3D-нахил картинки за курсором
  if (heroStage && heroTilt) {
    heroStage.addEventListener('mousemove', (e) => {
      const rect = heroStage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroTilt.style.transform = `rotateX(${(-y * 10).toFixed(1)}deg) rotateY(${(x * 12).toFixed(1)}deg)`;
    });
    heroStage.addEventListener('mouseleave', () => {
      heroTilt.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }

  function selectProject(pid) {
    const proj = PROJECTS.find((p) => p.id === pid) || PROJECTS[0];

    if (heroLink) heroLink.href = proj.url;
    if (heroImg) {
      heroImg.src = proj.image;
      heroImg.alt = proj.title;
    }
    if (heroKicker) heroKicker.textContent = `Проєкт ${proj.num} · ${proj.stack}`;
    if (heroName) heroName.textContent = proj.title;

    heroBtns.forEach((b) => b.classList.toggle('is-active', b.dataset.project === pid));
  }

  heroBtns.forEach((b) => b.addEventListener('click', () => selectProject(b.dataset.project)));

  selectProject('project_1');

  // Скрол-показ 4 проєктів (Showcase)
  const showcaseTrack = document.getElementById('showcase');
  const frames = document.querySelectorAll('.showcase-frame');
  const stageDots = document.querySelectorAll('.stage-dot');
  const capKicker = document.getElementById('caption-kicker');
  const capTitle = document.getElementById('caption-title');
  const capSub = document.getElementById('caption-sub');
  const capLink = document.getElementById('caption-link');

  function setStage(idx) {
    const proj = PROJECTS[idx];
    if (capKicker) capKicker.textContent = `Проєкт ${proj.num} / 04 · ${proj.stack}`;
    if (capTitle) capTitle.textContent = proj.title;
    if (capSub) capSub.textContent = proj.showcaseSub;
    if (capLink) capLink.href = proj.url;
    stageDots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
  }

  stageDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      frames.forEach((f, i) => {
        f.style.clipPath = i <= idx ? 'inset(0 0 0 0%)' : 'inset(0 0 0 100%)';
      });
      setStage(idx);
    });
  });

  if (showcaseTrack && frames.length === 4) {
    window.addEventListener('scroll', () => {
      const rect = showcaseTrack.getBoundingClientRect();
      const max = showcaseTrack.offsetHeight - window.innerHeight;
      if (max <= 0) return;
      const p = Math.max(0, Math.min(1, -rect.top / max));

      frames[1].style.clipPath = `inset(0 0 0 ${(1 - Math.max(0, Math.min(1, (p - 0.1) / 0.25))) * 100}%)`;
      frames[2].style.clipPath = `inset(0 0 0 ${(1 - Math.max(0, Math.min(1, (p - 0.4) / 0.25))) * 100}%)`;
      frames[3].style.clipPath = `inset(0 0 0 ${(1 - Math.max(0, Math.min(1, (p - 0.7) / 0.25))) * 100}%)`;

      const idx = p >= 0.72 ? 3 : p >= 0.42 ? 2 : p >= 0.14 ? 1 : 0;
      setStage(idx);
    });
  }

  initFeedbackForm();
}

// ===== 7. Логіка окремої сторінки проєкту (project_1..4.html) =====
function initProjectPage(projectId) {
  const proj = PROJECTS.find((p) => p.id === projectId);
  const coverBox = document.getElementById('project-detail-cover');
  const featureList = document.getElementById('detail-feature-list');

  renderFeatureList(featureList, projectId);

  const lightbox = document.getElementById('lightbox-dialog');
  const lightboxBody = document.getElementById('lightbox-body');
  coverBox?.addEventListener('click', () => {
    if (!proj) return;
    lightboxBody.innerHTML = `
      <div>
        <img src="${proj.image}" alt="${proj.title}" class="lightbox-img" />
        <p style="padding:14px 20px;font-weight:600;">${proj.title}</p>
      </div>`;
    lightbox.showModal();
  });

  // Калькулятор запускається тільки на project_4.html, де є його розмітка
  initCalculator();
}

// ===== 8. Запуск при завантаженні сторінки =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDrawer();

  const lightbox = document.getElementById('lightbox-dialog');
  document.getElementById('lightbox-close')?.addEventListener('click', () => lightbox?.close());
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.close();
  });

  const projectId = document.body.dataset.projectId;
  if (projectId) {
    initProjectPage(projectId);
  } else {
    initHomePage();
  }
});
