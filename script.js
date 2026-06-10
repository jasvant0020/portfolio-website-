/* ═══════════════════════════════════════════════════
   PORTFOLIO DATA — edit this object to update the site
═══════════════════════════════════════════════════ */
const portfolioData = {
  personal: {
    name: "Arjun Sharma",
    initials: "AS",
    role: "Software Engineer · QA Engineer · Python Developer",
    summary: "CS (AI) student passionate about building reliable software and intelligent systems. I bridge quality assurance and development — writing clean Python, designing robust test suites, and exploring applied AI.",
    availability: "Open to Internships & Full-time",
    location: "Bengaluru, India",
    email: "arjun.sharma@email.com",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/arjunsharma",
    github: "https://github.com/arjunsharma",
    leetcode: "https://leetcode.com/arjunsharma",
    resumeDefault: "#", // link to default resume PDF
  },

  about: {
    summary: "I'm a final-year B.Tech Computer Science (AI) student who enjoys working at the intersection of software quality and intelligent systems. My approach is methodical: I think about edge cases, write tests first when possible, and care deeply about reliability. Outside academics, I build side projects that solve real problems.",
    education: "B.Tech CS (AI), VIT Bhopal — 2025",
    status: "Final Year Student",
    seeking: "SWE / QA / Python Internship",
    languages: "Python, Java, JavaScript",
    objective: "To secure a role where I can apply my skills in Python development, test automation, and AI to deliver high-quality software — while continuing to grow as an engineer in a collaborative, learning-oriented environment.",
    strengths: [
      "Strong foundation in Software Testing Life Cycle (STLC) and defect management",
      "Comfortable writing automation frameworks with Selenium and Playwright",
      "Analytical mindset — I break problems into testable, verifiable units",
      "Quick learner; able to ramp up on new codebases and tools independently",
      "Clear technical communicator — documentation, bug reports, and code reviews",
      "Hands-on with AI/ML tools including OpenCV, YOLO, and face recognition pipelines",
    ],
  },

  github: {
    repos: 28,
    contributions: 340,
    followers: 47,
    stars: 92,
    topLanguages: ["Python", "JavaScript", "Java", "C++"],
  },

  skills: [
    {
      category: "Programming",
      icon: "⌨️",
      items: [
        { name: "Python",       pct: 88 },
        { name: "Java",         pct: 72 },
        { name: "JavaScript",   pct: 70 },
        { name: "C++",          pct: 60 },
      ],
    },
    {
      category: "Testing / QA",
      icon: "🧪",
      items: [
        { name: "Manual Testing",   pct: 90 },
        { name: "Test Case Design", pct: 88 },
        { name: "Bug Reporting",    pct: 87 },
        { name: "SDLC / STLC",     pct: 82 },
        { name: "Regression / Smoke / Functional", pct: 80 },
      ],
    },
    {
      category: "Test Automation",
      icon: "🤖",
      items: [
        { name: "Selenium WebDriver", pct: 78 },
        { name: "Playwright",         pct: 70 },
        { name: "PyTest",             pct: 82 },
      ],
    },
    {
      category: "Web",
      icon: "🌐",
      items: [
        { name: "HTML5",       pct: 85 },
        { name: "CSS3",        pct: 80 },
        { name: "JavaScript",  pct: 70 },
      ],
    },
    {
      category: "AI / ML",
      icon: "🧠",
      items: [
        { name: "OpenCV",           pct: 75 },
        { name: "YOLO (v8)",        pct: 68 },
        { name: "Face Recognition", pct: 72 },
        { name: "NumPy / Pandas",   pct: 80 },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      items: [
        { name: "Git & GitHub", pct: 88 },
        { name: "VS Code",      pct: 92 },
        { name: "Postman",      pct: 80 },
        { name: "Jira",         pct: 74 },
        { name: "Linux / Bash", pct: 70 },
      ],
    },
  ],

  projects: [
    {
      title: "Automated E-Commerce Test Suite",
      category: "QA",
      description: "End-to-end Selenium + PyTest framework for a mock e-commerce platform. Covers login flows, cart management, checkout, and payment edge cases with data-driven tests.",
      tech: ["Python", "Selenium", "PyTest", "HTML Reports"],
      outcome: "Reduced manual regression time by ~70% with 120+ automated test cases",
      github: "https://github.com/arjunsharma/ecommerce-test-suite",
      demo: "",
    },
    {
      title: "Face Attendance System",
      category: "AI",
      description: "Real-time attendance marking system using OpenCV and face_recognition library. Detects and matches faces from a webcam feed, logs entries with timestamps to CSV.",
      tech: ["Python", "OpenCV", "face_recognition", "CSV"],
      outcome: "Achieved 94% recognition accuracy on a dataset of 50+ registered students",
      github: "https://github.com/arjunsharma/face-attendance",
      demo: "",
    },
    {
      title: "API Test Automation Framework",
      category: "QA",
      description: "Modular REST API testing framework built with Python Requests and PyTest. Includes schema validation, auth testing, response time assertions, and CI-ready HTML reports.",
      tech: ["Python", "Requests", "PyTest", "JSON Schema"],
      outcome: "Frameworks is reusable across 3+ internal projects with zero setup friction",
      github: "https://github.com/arjunsharma/api-test-framework",
      demo: "",
    },
    {
      title: "Personal Finance Tracker CLI",
      category: "Python",
      description: "Command-line budgeting tool with expense categorisation, monthly summaries, and CSV export. Uses Rich library for clean terminal output and Click for CLI argument parsing.",
      tech: ["Python", "Click", "Rich", "SQLite", "CSV"],
      outcome: "Used personally for 6+ months; handles 500+ expense records reliably",
      github: "https://github.com/arjunsharma/finance-tracker",
      demo: "",
    },
    {
      title: "YOLO Object Counter",
      category: "AI",
      description: "Real-time object counting in video streams using YOLOv8. Tracks and counts specified object classes crossing a virtual line — useful for traffic or retail analytics.",
      tech: ["Python", "YOLOv8", "OpenCV", "NumPy"],
      outcome: "Processes 25+ FPS on CPU with <3% miss rate on standard benchmark",
      github: "https://github.com/arjunsharma/yolo-counter",
      demo: "",
    },
    {
      title: "Dev Portfolio (this site)",
      category: "Web",
      description: "Minimal, recruiter-focused portfolio website built with vanilla HTML, CSS, and JavaScript. Features dark/light mode, command palette, project filtering, and resume download centre.",
      tech: ["HTML5", "CSS3", "Vanilla JS"],
      outcome: "Scores 98+ on Lighthouse performance and accessibility audits",
      github: "https://github.com/arjunsharma/portfolio",
      demo: "https://arjunsharma.dev",
    },
  ],

  timeline: [
    {
      date: "Jul 2021",
      type: "education",
      title: "B.Tech CSE (AI) — VIT Bhopal",
      sub: "Enrolled in the 4-year Computer Science programme with AI specialisation.",
      active: false,
    },
    {
      date: "Jan 2023",
      type: "project",
      title: "Face Attendance System",
      sub: "Built first real-world AI project as part of a semester mini-project.",
      active: false,
    },
    {
      date: "Apr 2023",
      type: "cert",
      title: "ISTQB Foundation Level",
      sub: "Cleared ISTQB CTFL — foundational certification in software testing.",
      active: false,
    },
    {
      date: "Jul 2023",
      type: "work",
      title: "QA Intern — TechCorp Solutions",
      sub: "6-month internship focused on manual testing for a SaaS product. Wrote 200+ test cases and filed 80+ bugs in Jira.",
      active: false,
    },
    {
      date: "Dec 2023",
      type: "cert",
      title: "Selenium WebDriver with Python — Udemy",
      sub: "Completed advanced Selenium automation course with real-world projects.",
      active: false,
    },
    {
      date: "Mar 2024",
      type: "project",
      title: "API Automation Framework",
      sub: "Published open-source REST API test framework used by 30+ developers.",
      active: false,
    },
    {
      date: "Sep 2024",
      type: "cert",
      title: "Python for AI & ML — Coursera",
      sub: "Specialisation covering NumPy, Pandas, OpenCV, and ML foundations.",
      active: false,
    },
    {
      date: "Now",
      type: "education",
      title: "Final Year — B.Tech CSE (AI)",
      sub: "Working on capstone project. Actively applying for SWE / QA roles.",
      active: true,
    },
    {
      date: "2025 →",
      type: "goal",
      title: "Target: SWE / QA / Python Role",
      sub: "Seeking full-time or internship opportunities at product or startup companies.",
      active: false,
      goal: true,
    },
  ],

  certifications: [
    {
      name: "ISTQB Certified Tester Foundation Level (CTFL)",
      issuer: "ISTQB",
      date: "Apr 2023",
      verifyUrl: "#",
    },
    {
      name: "Selenium WebDriver with Python — Complete Guide",
      issuer: "Udemy",
      date: "Dec 2023",
      verifyUrl: "#",
    },
    {
      name: "Python for Everybody Specialisation",
      issuer: "Coursera / University of Michigan",
      date: "Aug 2022",
      verifyUrl: "#",
    },
    {
      name: "Introduction to AI & Machine Learning",
      issuer: "Coursera / Google",
      date: "Sep 2024",
      verifyUrl: "#",
    },
    {
      name: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Jun 2023",
      verifyUrl: "#",
    },
    {
      name: "Git & GitHub — The Complete Guide",
      issuer: "Udemy",
      date: "Mar 2023",
      verifyUrl: "#",
    },
  ],

  resumes: [
    {
      role: "QA Engineer",
      icon: "🧪",
      desc: "Highlights testing methodologies, automation frameworks, ISTQB cert, and QA internship experience.",
      url: "#",
      updated: "Dec 2024",
    },
    {
      role: "Software Engineer",
      icon: "💻",
      desc: "Focuses on programming skills, projects, data structures, and full-stack capabilities.",
      url: "#",
      updated: "Dec 2024",
    },
    {
      role: "Python Developer",
      icon: "🐍",
      desc: "Showcases Python projects, scripting, automation, REST APIs, and CLI tool development.",
      url: "#",
      updated: "Dec 2024",
    },
    {
      role: "AI / ML Developer",
      icon: "🧠",
      desc: "Features AI projects, OpenCV / YOLO work, ML coursework, and relevant certifications.",
      url: "#",
      updated: "Dec 2024",
    },
  ],
};


/* ═══════════════════════════════════════════════════
   THEME
═══════════════════════════════════════════════════ */
(function initTheme() {
  const saved = localStorage.getItem("portfolio-theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
})();

document.getElementById("theme-toggle").addEventListener("click", () => {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("portfolio-theme", next);
});


/* ═══════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════ */
function el(id) { return document.getElementById(id); }
function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function showToast(msg, duration = 2400) {
  const t = el("toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.classList.add("hidden"), 220);
  }, duration);
}

function catClass(cat) {
  const map = { QA: "cat-qa", Python: "cat-python", AI: "cat-ai", Web: "cat-web" };
  return map[cat] || "cat-python";
}


/* ═══════════════════════════════════════════════════
   RENDER — HERO
═══════════════════════════════════════════════════ */
function renderHero() {
  const { personal, about } = portfolioData;

  el("hero-name-text").textContent = personal.name;
  el("hero-role").textContent = personal.role;
  el("hero-summary").textContent = personal.summary;
  el("hero-availability").textContent = personal.availability;
  el("hero-resume-btn").href = personal.resumeDefault;

  // Meta row
  const metaItems = [
    { icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`, text: personal.location },
    { icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`, text: about.education },
    { icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`, text: "Open to opportunities" },
  ];
  el("hero-meta").innerHTML = metaItems.map(m =>
    `<span class="hero-meta-item">${m.icon} ${m.text}</span>`
  ).join("");

  // JSON preview card
  const d = portfolioData;
  const preview = {
    name: personal.name,
    role: "Software Engineer | QA | Python",
    location: personal.location,
    available: true,
    skills: ["Python", "Selenium", "PyTest", "OpenCV"],
    projects: d.projects.length,
    certifications: d.certifications.length,
  };
  el("hero-json-preview").innerHTML = syntaxHighlight(JSON.stringify(preview, null, 2));
}

function syntaxHighlight(json) {
  return json
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
      let cls = "json-num";
      if (/^"/.test(match)) cls = /:$/.test(match) ? "json-key" : "json-str";
      else if (/true|false/.test(match)) cls = "json-bool";
      else if (/null/.test(match)) cls = "json-null";
      return `<span class="${cls}">${match}</span>`;
    })
    .replace(/[{}\[\],]/g, m => `<span class="json-punct">${m}</span>`);
}


/* ═══════════════════════════════════════════════════
   RENDER — ABOUT
═══════════════════════════════════════════════════ */
function renderAbout() {
  const { about, personal, github } = portfolioData;

  el("about-summary").textContent = about.summary;
  el("about-objective").textContent = about.objective;
  el("about-education").textContent = about.education;
  el("about-status").textContent = about.status;
  el("about-location").textContent = personal.location;
  el("about-seeking").textContent = about.seeking;
  el("about-languages").textContent = about.languages;

  el("about-strengths-list").innerHTML = about.strengths
    .map(s => `<li class="strength-item">${s}</li>`).join("");

  // GitHub stats
  el("github-stats-grid").innerHTML = [
    { num: github.repos, label: "Repos" },
    { num: github.contributions, label: "Contributions" },
    { num: github.followers, label: "Followers" },
    { num: github.stars, label: "Stars" },
  ].map(s => `
    <div class="gstat">
      <span class="gstat-num">${s.num}</span>
      <span class="gstat-label">${s.label}</span>
    </div>
  `).join("");

  el("github-langs").innerHTML = github.topLanguages
    .map(l => `<span class="lang-chip">${l}</span>`).join("");
}


/* ═══════════════════════════════════════════════════
   RENDER — SKILLS
═══════════════════════════════════════════════════ */
function renderSkills() {
  el("skills-grid").innerHTML = portfolioData.skills.map(cat => `
    <div class="skill-category">
      <div class="skill-cat-header">
        <span class="skill-cat-icon">${cat.icon}</span>
        <span class="skill-cat-name">${cat.category}</span>
      </div>
      <div class="skill-items">
        ${cat.items.map(s => `
          <div class="skill-item">
            <div class="skill-meta">
              <span class="skill-name">${s.name}</span>
              <span class="skill-pct">${s.pct}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-pct="${s.pct}" style="width:0%"></div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function animateSkillBars() {
  qsa(".skill-fill").forEach(fill => {
    const pct = fill.dataset.pct;
    fill.style.width = pct + "%";
  });
}


/* ═══════════════════════════════════════════════════
   RENDER — PROJECTS
═══════════════════════════════════════════════════ */
let activeFilter = "All";

function renderProjects(filter = "All", search = "") {
  const grid = el("projects-grid");
  const noRes = el("no-results");

  let filtered = portfolioData.projects;

  if (filter !== "All") {
    filtered = filtered.filter(p => p.category === filter);
  }
  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tech.join(" ").toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noRes.classList.remove("hidden");
    return;
  }
  noRes.classList.add("hidden");

  grid.innerHTML = filtered.map(p => `
    <article class="project-card" role="listitem">
      <div class="project-card-header">
        <span class="project-cat-badge ${catClass(p.category)}">${p.category}</span>
        <div class="project-links">
          ${p.github ? `
            <a href="${p.github}" target="_blank" rel="noopener" class="project-link-btn" aria-label="GitHub repository for ${p.title}" title="GitHub">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>` : ""}
          ${p.demo ? `
            <a href="${p.demo}" target="_blank" rel="noopener" class="project-link-btn" aria-label="Live demo for ${p.title}" title="Live Demo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>` : ""}
        </div>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-outcome">${p.outcome}</div>
      <div class="project-tech">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderProjectFilters() {
  const categories = ["All", ...new Set(portfolioData.projects.map(p => p.category))];
  const tabs = el("filter-tabs");
  tabs.innerHTML = categories.map(c =>
    `<button class="filter-tab${c === "All" ? " active" : ""}" data-cat="${c}" role="tab" aria-selected="${c === "All"}">${c}</button>`
  ).join("");

  tabs.addEventListener("click", e => {
    const btn = e.target.closest(".filter-tab");
    if (!btn) return;
    qsa(".filter-tab").forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    activeFilter = btn.dataset.cat;
    renderProjects(activeFilter, el("project-search").value);
  });

  el("project-search").addEventListener("input", e => {
    renderProjects(activeFilter, e.target.value);
  });
}


/* ═══════════════════════════════════════════════════
   RENDER — TIMELINE
═══════════════════════════════════════════════════ */
function renderTimeline() {
  const typeMap = {
    education: { cls: "tl-education", label: "Education" },
    cert:      { cls: "tl-cert",      label: "Certification" },
    project:   { cls: "tl-project",   label: "Project" },
    work:      { cls: "tl-work",      label: "Work" },
    goal:      { cls: "tl-goal-badge",label: "Goal" },
  };

  el("timeline-track").innerHTML = portfolioData.timeline.map(item => {
    const t = typeMap[item.type] || typeMap.project;
    const cls = item.goal ? "tl-goal" : item.active ? "tl-active" : "";
    return `
      <div class="timeline-item ${cls}">
        <div class="timeline-dot"></div>
        <div class="timeline-meta">
          <span class="timeline-date">${item.date}</span>
          <span class="timeline-type ${t.cls}">${t.label}</span>
        </div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-sub">${item.sub}</div>
      </div>
    `;
  }).join("");
}


/* ═══════════════════════════════════════════════════
   RENDER — CERTIFICATIONS
═══════════════════════════════════════════════════ */
function renderCertifications() {
  el("certs-grid").innerHTML = portfolioData.certifications.map(c => `
    <div class="cert-card">
      <div class="cert-header">
        <span class="cert-name">${c.name}</span>
        <a href="${c.verifyUrl}" target="_blank" rel="noopener" class="cert-verify" aria-label="Verify ${c.name}" title="Verify credential">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>
      <span class="cert-issuer">${c.issuer}</span>
      <span class="cert-date">${c.date}</span>
    </div>
  `).join("");
}


/* ═══════════════════════════════════════════════════
   RENDER — RESUME
═══════════════════════════════════════════════════ */
function renderResume() {
  el("resume-grid").innerHTML = portfolioData.resumes.map(r => `
    <div class="resume-card">
      <div class="resume-icon">${r.icon}</div>
      <div class="resume-role">${r.role}</div>
      <p class="resume-desc">${r.desc}</p>
      <span class="resume-updated">Updated ${r.updated}</span>
      <a href="${r.url}" class="btn btn-secondary btn-sm" download aria-label="Download ${r.role} resume">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download PDF
      </a>
    </div>
  `).join("");
}


/* ═══════════════════════════════════════════════════
   RENDER — CONTACT
═══════════════════════════════════════════════════ */
function renderContact() {
  const { personal } = portfolioData;

  const links = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      copyable: true,
    },
    {
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.12 6.12l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
      copyable: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/arjunsharma",
      href: personal.linkedin,
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
      copyable: false,
    },
    {
      label: "GitHub",
      value: "github.com/arjunsharma",
      href: personal.github,
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
      copyable: false,
    },
    {
      label: "LeetCode",
      value: "leetcode.com/arjunsharma",
      href: personal.leetcode,
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>`,
      copyable: false,
    },
  ];

  el("contact-links").innerHTML = links.map(link => `
    <div class="contact-link-item">
      <div class="contact-link-left">
        <div class="contact-link-icon">${link.icon}</div>
        <div class="contact-link-meta">
          <span class="contact-link-label">${link.label}</span>
          <span class="contact-link-value">${link.value}</span>
        </div>
      </div>
      <div class="contact-link-actions">
        ${link.copyable ? `
          <button class="contact-action-btn copy-btn" data-copy="${link.value}" aria-label="Copy ${link.label}" title="Copy">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </button>` : ""}
        <a href="${link.href}" target="${link.href.startsWith("http") ? "_blank" : "_self"}" rel="noopener" class="contact-action-btn" aria-label="Open ${link.label}" title="Open">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>
    </div>
  `).join("");

  // Copy buttons
  document.addEventListener("click", e => {
    const btn = e.target.closest(".copy-btn");
    if (!btn) return;
    navigator.clipboard.writeText(btn.dataset.copy).then(() => {
      showToast(`Copied: ${btn.dataset.copy}`);
    });
  });
}


/* ═══════════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════════ */
function initContactForm() {
  const form = el("contact-form");
  const feedback = el("form-feedback");
  const submitBtn = el("cf-submit");

  form.addEventListener("submit", async e => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        feedback.textContent = "✓ Message sent! I'll get back to you soon.";
        feedback.className = "form-feedback success";
        feedback.classList.remove("hidden");
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      feedback.textContent = "Could not send. Email me directly at " + portfolioData.personal.email;
      feedback.className = "form-feedback error";
      feedback.classList.remove("hidden");
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/></svg> Send Message`;
  });
}


/* ═══════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════ */
function renderFooter() {
  el("footer-name").textContent = portfolioData.personal.name;
  el("footer-year").textContent = new Date().getFullYear();
}


/* ═══════════════════════════════════════════════════
   SCROLL PROGRESS
═══════════════════════════════════════════════════ */
function initScrollProgress() {
  const bar = el("scroll-progress");
  window.addEventListener("scroll", () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = pct + "%";
  }, { passive: true });
}


/* ═══════════════════════════════════════════════════
   BACK TO TOP
═══════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = el("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) btn.classList.remove("hidden");
    else btn.classList.add("hidden");
  }, { passive: true });

  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}


/* ═══════════════════════════════════════════════════
   ACTIVE NAV ON SCROLL
═══════════════════════════════════════════════════ */
function initNavHighlight() {
  const sections = qsa("section[id]");
  const navLinks = qsa(".nav-link");

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove("active"));
        const active = navLinks.find(l => l.getAttribute("href") === "#" + entry.target.id);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(s => obs.observe(s));
}


/* ═══════════════════════════════════════════════════
   SKILL BAR ANIMATION ON SCROLL
═══════════════════════════════════════════════════ */
function initSkillAnimation() {
  const skillSection = el("skills");
  let animated = false;

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      animateSkillBars();
    }
  }, { threshold: 0.1 });

  if (skillSection) obs.observe(skillSection);
}


/* ═══════════════════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════════════════ */
function initMobileMenu() {
  const btn = el("mobile-menu-btn");
  const menu = el("mobile-menu");
  const iconMenu = qs(".icon-menu", btn);
  const iconClose = qs(".icon-close", btn);

  btn.addEventListener("click", () => {
    const open = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    iconMenu.classList.toggle("hidden", !open);
    iconClose.classList.toggle("hidden", open);
    btn.setAttribute("aria-expanded", String(!open));
  });

  // Close on nav link click
  qsa(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      iconMenu.classList.remove("hidden");
      iconClose.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}


/* ═══════════════════════════════════════════════════
   COMMAND PALETTE (Ctrl+K / Cmd+K)
═══════════════════════════════════════════════════ */
function initCommandPalette() {
  const overlay = el("cmd-overlay");
  const input = el("cmd-input");
  const results = el("cmd-results");

  const cmds = [
    { name: "About", hint: "Who I am", target: "#about", icon: "👤" },
    { name: "Skills", hint: "Technical stack", target: "#skills", icon: "⌨️" },
    { name: "Projects", hint: "What I've built", target: "#projects", icon: "🗂️" },
    { name: "Timeline", hint: "My journey", target: "#timeline", icon: "📅" },
    { name: "Certifications", hint: "Credentials", target: "#certifications", icon: "🏅" },
    { name: "Resume", hint: "Download CV", target: "#resume", icon: "📄" },
    { name: "Contact", hint: "Get in touch", target: "#contact", icon: "✉️" },
    { name: "Toggle Theme", hint: "Dark / Light", action: () => document.getElementById("theme-toggle").click(), icon: "🎨" },
  ];

  let selectedIdx = 0;

  function openPalette() {
    overlay.classList.remove("hidden");
    input.value = "";
    renderResults("");
    setTimeout(() => input.focus(), 50);
  }

  function closePalette() {
    overlay.classList.add("hidden");
  }

  function renderResults(query) {
    const q = query.toLowerCase();
    const filtered = cmds.filter(c => c.name.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q));
    selectedIdx = 0;

    results.innerHTML = filtered.length === 0
      ? `<li style="padding:16px;text-align:center;color:var(--text-3);font-size:.85rem;">No results</li>`
      : filtered.map((c, i) => `
          <li class="cmd-result-item${i === 0 ? " selected" : ""}" data-idx="${i}" data-target="${c.target || ""}" data-action="${c.action ? "1" : ""}">
            <span class="cmd-result-icon">${c.icon}</span>
            <span class="cmd-result-name">${c.name}</span>
            <span class="cmd-result-hint">${c.hint}</span>
          </li>
        `).join("");

    results._filtered = filtered;
  }

  function executeItem(item) {
    closePalette();
    if (item.action) {
      item.action();
    } else if (item.target) {
      document.querySelector(item.target)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  results.addEventListener("click", e => {
    const li = e.target.closest(".cmd-result-item");
    if (!li) return;
    const idx = parseInt(li.dataset.idx);
    const item = results._filtered[idx];
    if (item) executeItem(item);
  });

  input.addEventListener("input", () => renderResults(input.value));

  input.addEventListener("keydown", e => {
    const items = qsa(".cmd-result-item", results);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIdx = Math.min(selectedIdx + 1, items.length - 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIdx = Math.max(selectedIdx - 1, 0);
    } else if (e.key === "Enter") {
      const item = results._filtered?.[selectedIdx];
      if (item) executeItem(item);
      return;
    } else if (e.key === "Escape") {
      closePalette();
      return;
    }
    items.forEach((el, i) => el.classList.toggle("selected", i === selectedIdx));
    items[selectedIdx]?.scrollIntoView({ block: "nearest" });
  });

  overlay.addEventListener("click", e => { if (e.target === overlay) closePalette(); });

  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      overlay.classList.contains("hidden") ? openPalette() : closePalette();
    }
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) closePalette();
  });

  el("cmd-btn").addEventListener("click", openPalette);
}


/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjectFilters();
  renderProjects();
  renderTimeline();
  renderCertifications();
  renderResume();
  renderContact();
  renderFooter();

  initScrollProgress();
  initBackToTop();
  initNavHighlight();
  initSkillAnimation();
  initMobileMenu();
  initCommandPalette();
  initContactForm();
});
