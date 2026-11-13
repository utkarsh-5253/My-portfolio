const SKILLS = [
      { name: "HTML5", category: "technical", level: 90, icon: "code" },
      { name: "CSS3 & Layouts", category: "technical", level: 85, icon: "layout" },
      { name: "JavaScript", category: "technical", level: 80, icon: "zap" },
      { name: "Java", category: "technical", level: 75, icon: "cpu" },
      { name: "Git & GitHub", category: "technical", level: 85, icon: "git" },
      { name: "Video Editing", category: "technical", level: 80, icon: "film" },
      { name: "Communication", category: "non-technical", level: 88, icon: "message" },
      { name: "Teamwork", category: "non-technical", level: 90, icon: "users" },
      { name: "Marketing", category: "non-technical", level: 80, icon: "trending" }
    ];

    const PROJECTS = [
      {
        id: "huslerz",
        title: "Huslerz — Student Service Hub",
        shortDesc: "A student-focused platform helping college students discover trusted local service providers for everyday needs.",
        fullDesc: "Huslerz is designed around campus life in Bengaluru, connecting students with verified local providers for essentials like laundry, repairs, printing, and daily utilities through a clean, searchable interface.",
        tech: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
        highlights: [
          "Service category filtering for quick discovery",
          "Clean card-based directory with clear pricing cues",
          "Mobile-first responsive layout for on-the-go access"
        ],
        image: "assets/project-huslerz.jpg"
      },
      {
        id: "portfolio",
        title: "Minimalist Personal Portfolio",
        shortDesc: "A Swiss-editorial personal portfolio built with semantic HTML5, CSS custom properties, Flexbox/Grid, and vanilla JS.",
        fullDesc: "Built as the capstone Web Development Project at Bosscoder School of Technology, this portfolio implements all 11 required interactive features including theme switching, ScrollSpy navigation, filterable skills, modals, and form validation.",
        tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
        highlights: [
          "Light & Dark mode persisted via CSS custom properties",
          "IntersectionObserver ScrollSpy and mobile drawer",
          "Accessible modals and client-side form validation"
        ],
        image: "assets/project-portfolio.jpg"
      },
      {
        id: "web-dev-lab",
        title: "Web Dev Lab Series (P1–P13)",
        shortDesc: "A 13-part laboratory progression covering Git workflows, semantic HTML, design tokens, Flexbox, and CSS Grid.",
        fullDesc: "Completed across three progressive modules at BST: Terminal & Git branching (P1–P4), semantic HTML & CSS positioning (P5–P9), and advanced Flexbox/Grid layouts (P10–P13).",
        tech: ["Git", "GitHub", "Flexbox", "CSS Grid"],
        highlights: [
          "Feature-branch Git workflow with versioned tags",
          "Design token system and sticky navigation patterns",
          "Newspaper-style three-column and project grid layouts"
        ],
        image: "assets/project-weblab.jpg"
      }
    ];

    const ACHIEVEMENTS = [
      {
        id: "sih-2026",
        year: "2026",
        title: "Smart India Hackathon (SIH) 2026",
        org: "Team StressBusters · S-VYASA / BST",
        desc: "Nominated as a 1st-Year CSE (AI & ML) team member to represent the institution at Smart India Hackathon 2026.",
        badge: "National Hackathon Nomination"
      },
      {
        id: "ideathon-2026",
        year: "2026",
        title: "Ideathon 2026 @ BST",
        org: "Bosscoder School of Technology · Unstop",
        desc: "Formed a team, pitched an innovative student solution, and earned a Certificate of Participation.",
        badge: "Certificate of Participation"
      },
      {
        id: "pixellence-2026",
        year: "2026",
        title: "Mood Indigo — Pixellence",
        org: "IIT Bombay",
        desc: "Registered and participated online in Pixellence, the design and digital arts competition at IIT Bombay's Mood Indigo.",
        badge: "Design & Digital Arts"
      }
    ];

    function getIconSvg(name) {
      const icons = {
        code: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
        layout: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
        zap: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        cpu: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/></svg>',
        git: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>',
        film: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>',
        message: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
        users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        trending: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>'
      };
      return icons[name] || icons.code;
    }

    const htmlEl = document.documentElement;
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const themeLabel = document.getElementById("themeLabel");

    function applyTheme(theme) {
      htmlEl.setAttribute("data-theme", theme);
      themeIcon.textContent = theme === "dark" ? "☀" : "☾";
      themeLabel.textContent = theme === "dark" ? "Light" : "Dark";
      try {
        localStorage.setItem("portfolio-theme", theme);
      } catch (e) {}
    }

    let savedTheme = "light";
    try {
      savedTheme = localStorage.getItem("portfolio-theme") || "light";
    } catch (e) {}
    applyTheme(savedTheme);

    themeToggle.addEventListener("click", () => {
      const next = htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
    });

    const menuToggle = document.getElementById("menuToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");

    menuToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      mobileDrawer.setAttribute("aria-hidden", String(!isOpen));
    });

    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        mobileDrawer.setAttribute("aria-hidden", "true");
      });
    });

    const skillsGrid = document.getElementById("skillsGrid");
    function renderSkills(filter = "all") {
      const items = filter === "all" ? SKILLS : SKILLS.filter((s) => s.category === filter);
      skillsGrid.innerHTML = items.map((skill) => `
        <div class="skill-card">
          <div class="skill-head">
            <div class="skill-name-wrap">
              <span class="skill-icon">${getIconSvg(skill.icon)}</span>
              <div>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-cat">${skill.category === "technical" ? "Technical" : "Non-Technical"}</div>
              </div>
            </div>
            <span class="skill-pct">${skill.level}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" data-level="${skill.level}"></div>
          </div>
        </div>
      `).join("");

      requestAnimationFrame(() => {
        skillsGrid.querySelectorAll(".progress-fill").forEach((bar) => {
          bar.style.width = bar.dataset.level + "%";
        });
      });
    }

    document.querySelectorAll(".filter-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".filter-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        renderSkills(tab.dataset.filter);
      });
    });

    renderSkills("all");

    const projectsGrid = document.getElementById("projectsGrid");
    projectsGrid.innerHTML = PROJECTS.map((p) => `
      <article class="project-card">
        <div class="project-thumb">
          <img src="${p.image}" alt="${p.title} preview" />
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.shortDesc}</p>
          <div class="tech-tags">
            ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <button type="button" class="project-btn" data-project-id="${p.id}">View Details &rarr;</button>
        </div>
      </article>
    `).join("");

    const achievementsGrid = document.getElementById("achievementsGrid");
    achievementsGrid.innerHTML = ACHIEVEMENTS.map((a) => `
      <article class="achievement-card">
        <div>
          <span class="achievement-year">${a.year} · ${a.badge}</span>
          <h3 class="achievement-title">${a.title}</h3>
          <p class="achievement-desc">${a.desc}</p>
        </div>
        <button type="button" class="project-btn" data-achievement-id="${a.id}">View Certificate &rarr;</button>
      </article>
    `).join("");

    const detailModal = document.getElementById("detailModal");
    const modalKicker = document.getElementById("modalKicker");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    const modalCloseBtn = document.getElementById("modalCloseBtn");

    function openModal(kicker, title, bodyHtml) {
      modalKicker.textContent = kicker;
      modalTitle.textContent = title;
      modalBody.innerHTML = bodyHtml;
      detailModal.classList.add("open");
    }

    function closeModal() {
      detailModal.classList.remove("open");
    }

    modalCloseBtn.addEventListener("click", closeModal);
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && detailModal.classList.contains("open")) closeModal();
    });

    projectsGrid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-project-id]");
      if (!btn) return;
      const project = PROJECTS.find((p) => p.id === btn.dataset.projectId);
      if (!project) return;
      openModal(
        "Project Details",
        project.title,
        `
          <div class="modal-img"><img src="${project.image}" alt="${project.title}" /></div>
          <p style="font-size:0.94rem; color:var(--text-muted); margin-bottom:14px;">${project.fullDesc}</p>
          <div style="margin-bottom:14px;">
            <div style="font-size:0.82rem; font-weight:600; margin-bottom:6px;">Key Highlights</div>
            <ul style="padding-left:18px; font-size:0.88rem; color:var(--text-muted); display:grid; gap:4px;">
              ${project.highlights.map((h) => `<li>${h}</li>`).join("")}
            </ul>
          </div>
          <div class="tech-tags">${project.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}</div>
        `
      );
    });

    achievementsGrid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-achievement-id]");
      if (!btn) return;
      const item = ACHIEVEMENTS.find((a) => a.id === btn.dataset.achievementId);
      if (!item) return;
      openModal(
        "Achievement Record · " + item.year,
        item.title,
        `
          <div class="cert-preview">
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent); margin-bottom:8px;">${item.badge}</div>
            <div style="font-size:1.15rem; font-weight:600; margin-bottom:4px;">Utkarsh Chaudhary</div>
            <div style="font-size:0.88rem; color:var(--text-muted); margin-bottom:10px;">${item.org}</div>
            <div style="font-family:var(--font-mono); font-size:0.74rem; color:var(--text-muted);">Verified Academic / Event Milestone · ${item.year}</div>
          </div>
          <p style="font-size:0.92rem; color:var(--text-muted);">${item.desc}</p>
        `
      );
    });

    const sections = document.querySelectorAll("main section[id]");
    const allNavLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            allNavLinks.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((sec) => observer.observe(sec));

    const copyEmailBtn = document.getElementById("copyEmailBtn");
    copyEmailBtn.addEventListener("click", () => {
      const email = "utkarsh11933@gmail.com";
      const done = () => {
        copyEmailBtn.textContent = "Copied";
        setTimeout(() => { copyEmailBtn.textContent = "Copy"; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done).catch(() => {
          fallbackCopy(email);
          done();
        });
      } else {
        fallbackCopy(email);
        done();
      }
    });

    function fallbackCopy(text) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
    }

    // Contact Form Validation
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const messageInput = document.getElementById("messageInput");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formStatus = document.getElementById("formStatus");

    function validateForm() {
      let valid = true;
      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const msgVal = messageInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (nameVal.length < 2) {
        nameInput.classList.add("invalid");
        nameError.textContent = "Please enter at least 2 characters for your name.";
        valid = false;
      } else {
        nameInput.classList.remove("invalid");
        nameError.textContent = "";
      }

      if (!emailRegex.test(emailVal)) {
        emailInput.classList.add("invalid");
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
      } else {
        emailInput.classList.remove("invalid");
        emailError.textContent = "";
      }

      if (msgVal.length < 10) {
        messageInput.classList.add("invalid");
        messageError.textContent = "Please enter a message of at least 10 characters.";
        valid = false;
      } else {
        messageInput.classList.remove("invalid");
        messageError.textContent = "";
      }

      return valid;
    }

    [nameInput, emailInput, messageInput].forEach((el) => {
      el.addEventListener("input", () => {
        if (el.classList.contains("invalid")) validateForm();
      });
    });

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formStatus.className = "form-status";
      formStatus.textContent = "";
      if (validateForm()) {
        formStatus.classList.add("success");
        formStatus.textContent = `Thanks, ${nameInput.value.trim()}! Your message passed validation and is ready to send (static demo — no backend attached).`;
        contactForm.reset();
      }
    });
