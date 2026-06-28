/* =========================================================
   Rohit Kumar — Portfolio JS
   Vanilla, dependency-free.
   ========================================================= */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;

  /* ---------------------------------------------------------
     DATA — edit these to update skills & projects
     --------------------------------------------------------- */
  const SKILLS = [
    {
      icon: '⌨️', title: 'Languages',
      tags: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      icon: '⚛️', title: 'Frontend',
      tags: ['React.js', 'React Native', 'Redux', 'Tailwind CSS', 'Material-UI', 'Angular']
    },
    {
      icon: '🛠️', title: 'Backend',
      tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'bcrypt', 'WebSocket', 'Socket.io', 'SSE']
    },
    {
      icon: '🗄️', title: 'Data & Cloud',
      tags: ['MongoDB', 'Mongoose', 'PostgreSQL', 'DynamoDB', 'Vector DB', 'AWS S3', 'Firebase']
    },
    {
      icon: '🤖', title: 'AI / LLM',
      tags: ['OpenAI API', 'Agents SDK', 'LangChain', 'MCP', 'RAG', 'Assistant API', 'Streaming']
    },
    {
      icon: '🧰', title: 'Tools',
      tags: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'VS Code']
    }
  ];

  const PROJECTS = [
    {
      icon: '🧠', tag: 'Flagship', featured: true,
      title: 'IVA — AI Agent & RAG Platform',
      sub: 'Node · React · OpenAI · Vector DB',
      desc: 'Production-grade platform to manage multiple AI agents, their configs and retrieval workflows across web & mobile. Built secure admin APIs for OpenAI credential management, per-agent model config and approval-based updates via automated email flows. Implemented RAG pipelines with vector search, real-time SSE streaming responses, a dynamic custom-field report generator, and analytics across agent interactions.',
      stack: ['Node.js', 'Express', 'React', 'React Native', 'OpenAI API', 'Agents SDK', 'LangChain', 'PostgreSQL', 'Vector DB', 'SSE']
    },
    {
      icon: '🏠', tag: 'Mobile · Play Store',
      title: 'YUHI — Real Estate Referral App',
      sub: 'React Native · Firebase',
      desc: 'Mobile app (live on Google Play) streamlining lead tracking, property sharing and commission management. Built referral logging, document uploads, personalized dashboards, automated payout calculations, real-time notifications, training modules and a socket-based support chatbot.',
      stack: ['React Native', 'Firebase', 'Redux', 'Google Cloud', 'Socket.io']
    },
    {
      icon: '🔗', tag: 'AI System',
      title: 'AI-Powered RAG Agent System',
      sub: 'OpenAI · MCP · LangChain',
      desc: 'Intelligent agent using Retrieval-Augmented Generation to deliver context-aware responses. Implemented document processing, vector DB integration and real-time query handling with the OpenAI Agents SDK, MCP and LangChain — plus streaming over WebSocket for seamless interaction.',
      stack: ['Node.js', 'OpenAI API', 'MCP', 'LangChain', 'Vector DB', 'Socket.io']
    },
    {
      icon: '⚙️', tag: 'Enterprise',
      title: 'Iflow — Business Process Suite',
      sub: 'Angular · TypeScript',
      desc: 'AI-powered business process platform. Worked as an Angular developer enhancing UI/UX, resolving bugs and shipping new features to improve business workflows and overall platform usability.',
      stack: ['Angular', 'TypeScript', 'CSS']
    },
    {
      icon: '🛒', tag: 'Lead · Frontend',
      title: 'DS Commerce — E-commerce Platform',
      sub: 'React · Material UI',
      desc: 'Acted as Frontend Developer & Team Lead, owning key decisions on frontend architecture and tech stack. Integrated payment gateways, built interactive admin dashboards and delivered a seamless shopping experience across the platform.',
      stack: ['React.js', 'Material UI', 'Payment Gateway', 'Redux']
    }
  ];

  const ROLES = [
    'Software Programmer',
    'Full-Stack (MERN) Developer',
    'AI & RAG Engineer',
    'React Native Developer',
    'API & Backend Builder'
  ];

  /* ---------------------------------------------------------
     Preloader
     --------------------------------------------------------- */
  (function preloader() {
    const el = document.getElementById('preloader');
    if (!el) return;
    const bar = el.querySelector('.preloader__bar span');
    const pct = document.getElementById('loaderPct');
    let p = 0;
    const tick = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) { p = 100; clearInterval(tick); }
      if (bar) bar.style.width = p + '%';
      if (pct) pct.textContent = Math.floor(p) + '%';
      if (p === 100) {
        setTimeout(() => {
          el.classList.add('is-done');
          document.body.style.overflow = '';
          startTypewriter();
        }, 350);
      }
    }, 130);
    document.body.style.overflow = 'hidden';
  })();

  /* ---------------------------------------------------------
     Inject skills & projects
     --------------------------------------------------------- */
  (function injectSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    grid.innerHTML = SKILLS.map((c, i) => `
      <div class="skill-cat reveal" data-delay="${(i % 3) + 1}">
        <div class="skill-cat__head">
          <span class="skill-cat__icon">${c.icon}</span>
          <h3 class="skill-cat__title">${c.title}</h3>
        </div>
        <div class="skill-cat__tags">
          ${c.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
        </div>
      </div>`).join('');
  })();

  (function injectProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = PROJECTS.map((p, i) => `
      <article class="project ${p.featured ? 'is-featured' : ''} reveal" data-delay="${(i % 3) + 1}">
        <div class="project__top">
          <span class="project__icon">${p.icon}</span>
          <span class="project__tag">${p.tag}</span>
        </div>
        <h3 class="project__title">${p.title}</h3>
        <p class="project__sub">${p.sub}</p>
        <p class="project__desc">${p.desc}</p>
        <div class="project__stack">
          ${p.stack.map(s => `<span>${s}</span>`).join('')}
        </div>
      </article>`).join('');
  })();

  /* ---------------------------------------------------------
     Typewriter
     --------------------------------------------------------- */
  let typewriterStarted = false;
  function startTypewriter() {
    if (typewriterStarted) return;
    typewriterStarted = true;
    const el = document.getElementById('typewriter');
    if (!el) return;
    if (prefersReduced) { el.textContent = ROLES[0]; return; }
    let r = 0, c = 0, deleting = false;
    function loop() {
      const word = ROLES[r];
      el.textContent = word.slice(0, c);
      if (!deleting && c < word.length) { c++; setTimeout(loop, 70); }
      else if (!deleting && c === word.length) { deleting = true; setTimeout(loop, 1600); }
      else if (deleting && c > 0) { c--; setTimeout(loop, 35); }
      else { deleting = false; r = (r + 1) % ROLES.length; setTimeout(loop, 280); }
    }
    loop();
  }
  // Fallback in case preloader is skipped
  setTimeout(startTypewriter, 3500);

  /* ---------------------------------------------------------
     Navbar: scroll state, active links, burger
     --------------------------------------------------------- */
  const nav = document.getElementById('nav');
  const navLinks = document.getElementById('navLinks');
  const burger = document.getElementById('navBurger');
  const links = Array.from(document.querySelectorAll('.nav__link'));
  const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('is-scrolled', y > 40);

    // scroll progress
    const prog = document.getElementById('scrollProgress');
    if (prog) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }

    // back to top
    const top = document.getElementById('toTop');
    if (top) top.classList.toggle('is-visible', y > 600);

    // active section
    let current = sections[0] ? sections[0].id : 'home';
    for (const s of sections) {
      if (y >= s.offsetTop - 140) current = s.id;
    }
    links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + current));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeMenu() {
    if (navLinks) navLinks.classList.remove('is-open');
    if (burger) { burger.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); }
  }
  if (burger) {
    burger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
  }
  links.forEach(l => l.addEventListener('click', closeMenu));
  document.getElementById('toTop')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------------------------------------------------------
     Reveal on scroll
     --------------------------------------------------------- */
  (function reveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach(i => i.classList.add('is-visible')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    items.forEach(i => io.observe(i));
  })();

  /* ---------------------------------------------------------
     Animated counters
     --------------------------------------------------------- */
  (function counters() {
    const nums = document.querySelectorAll('[data-count]');
    if (!('IntersectionObserver' in window)) { nums.forEach(n => n.textContent = n.dataset.count + (n.dataset.suffix || '')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const isFloat = el.dataset.count.includes('.');
        const dur = 1400; const start = performance.now();
        function step(now) {
          const t = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const val = target * eased;
          el.textContent = (isFloat ? val.toFixed(1) : Math.floor(val)) + suffix;
          if (t < 1) requestAnimationFrame(step);
          else el.textContent = (isFloat ? target.toFixed(1) : target) + suffix;
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.6 });
    nums.forEach(n => io.observe(n));
  })();

  /* ---------------------------------------------------------
     Cursor glow + pointer-tracked gradients
     --------------------------------------------------------- */
  if (!isTouch && !prefersReduced) {
    const glow = document.getElementById('cursorGlow');
    let gx = window.innerWidth / 2, gy = window.innerHeight / 2, cx = gx, cy = gy;
    window.addEventListener('mousemove', (e) => {
      gx = e.clientX; gy = e.clientY;
      if (glow && glow.style.opacity !== '1') glow.style.opacity = '1';
    });
    (function raf() {
      cx += (gx - cx) * 0.12; cy += (gy - cy) * 0.12;
      if (glow) glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    })();

    // local gradient tracking for cards
    document.querySelectorAll('.project, .skill-cat').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
      });
    });
  }

  /* ---------------------------------------------------------
     Tilt effect (3D)
     --------------------------------------------------------- */
  if (!isTouch && !prefersReduced) {
    document.querySelectorAll('[data-tilt]').forEach(el => {
      const max = 9;
      el.style.transformStyle = 'preserve-3d';
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
      });
    });
  }

  /* ---------------------------------------------------------
     Magnetic buttons
     --------------------------------------------------------- */
  if (!isTouch && !prefersReduced) {
    document.querySelectorAll('.magnetic').forEach(el => {
      const strength = 0.32;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------------------------------------------------------
     Year
     --------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     Particle network background
     --------------------------------------------------------- */
  (function particles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || prefersReduced) return;
    const ctx = canvas.getContext('2d');
    let w, h, dpr, particles = [], mouse = { x: -9999, y: -9999 };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
      initParticles();
    }

    function initParticles() {
      const area = window.innerWidth * window.innerHeight;
      const count = Math.min(Math.max(Math.floor(area / 16000), 36), 110);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.6
        });
      }
    }

    const colors = ['124, 92, 255', '25, 227, 194', '255, 93, 143'];

    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const maxDist = 130;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

        // mouse repel
        const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 120) {
          p.x += (mdx / md) * 0.8;
          p.y += (mdy / md) * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(155, 165, 200, 0.55)';
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            const c = colors[(i + j) % colors.length];
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${c}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        // connect to mouse
        const a = particles[i];
        const dxm = a.x - mouse.x, dym = a.y - mouse.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 170) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(124, 92, 255, ${(1 - dm / 170) * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      requestAnimationFrame(draw);
    }

    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseout', () => { mouse.x = -9999; mouse.y = -9999; });
    window.addEventListener('resize', resize);
    resize();
    draw();
  })();

})();
