/* ═══════════════════════════════════════════════════════════
   JASVANT KUMAR PORTFOLIO — script.js
   All personal data lives in CONFIG at the top.
   Edit CONFIG to personalise without touching anything else.
   ═══════════════════════════════════════════════════════════ */

"use strict";

/* ═══════════════════════ CONFIG ═══════════════════════ */
const CONFIG = {
  name:       "Jasvant Kumar",
  initials:   "JK",
  tagline:    "CS (AI) Student · Aspiring QA & Python & AI Developer",
  intro:      "CS (AI) student building reliable software & intelligent systems. I obsess over quality, automate the tedious, and turn data into decisions.",
  email:      "jasvant@example.com",
  phone:      "+91 98765 43210",
  location:   "Gurugram, Haryana, India",
  portfolio:  "https://jasvant.dev",
  linkedin:   "https://linkedin.com/in/jasvant",
  github:     "https://github.com/jasvant",
  leetcode:   "https://leetcode.com/jasvant",
  hackerrank: "https://hackerrank.com/jasvant",
  formspree:  "https://formspree.io/f/YOUR_FORM_ID",

  typedRoles: [
    "QA Engineer",
    "Software Tester",
    "Python Developer",
    "AI Developer",
    "Automation Tester",
    "Computer Vision Dev"
  ],

  /* ─── RECRUITER OVERVIEW ─── */
  recruiter: [
    { icon:"🎓", label:"Education",         value:"B.Tech CS (AI)" },
    { icon:"📅", label:"Grad Year",         value:"2025" },
    { icon:"⚡", label:"Experience",        value:"Fresher / Entry-Level" },
    { icon:"🟢", label:"Availability",      value:"Immediate" },
    { icon:"💼", label:"Preferred Roles",   value:"QA · Python · AI Dev" },
    { icon:"📍", label:"Location",          value:"Gurugram, India" },
    { icon:"🛂", label:"Work Auth",         value:"Indian Citizen" },
    { icon:"🌐", label:"Work Mode",         value:"Remote / Hybrid / Onsite" },
  ],

  /* ─── SKILLS ─── */
  skills: [
    {
      category: "Programming",
      items: [
        { name:"Python",      pct:85 },
        { name:"Java",        pct:65 },
        { name:"JavaScript",  pct:70 },
        { name:"C++",         pct:60 },
      ]
    },
    {
      category: "Testing",
      items: [
        { name:"Manual Testing",      pct:90 },
        { name:"Test Case Writing",   pct:88 },
        { name:"Bug Reporting",       pct:85 },
        { name:"SDLC / STLC",         pct:80 },
        { name:"Regression Testing",  pct:78 },
        { name:"Smoke Testing",       pct:80 },
        { name:"Functional Testing",  pct:85 },
      ]
    },
    {
      category: "Automation",
      items: [
        { name:"Selenium",   pct:75 },
        { name:"Playwright", pct:65 },
        { name:"PyTest",     pct:78 },
      ]
    },
    {
      category: "Web",
      items: [
        { name:"HTML",       pct:85 },
        { name:"CSS",        pct:78 },
        { name:"JavaScript", pct:70 },
      ]
    },
    {
      category: "AI / ML",
      items: [
        { name:"OpenCV",          pct:75 },
        { name:"YOLO",            pct:65 },
        { name:"Face Recognition",pct:70 },
      ]
    },
    {
      category: "Tools",
      items: [
        { name:"Git",      pct:82 },
        { name:"GitHub",   pct:82 },
        { name:"VS Code",  pct:90 },
        { name:"Postman",  pct:72 },
        { name:"Jira",     pct:75 },
      ]
    },
  ],

  /* ─── PROJECTS ─── */
  projects: [
    {
      id:       "p1",
      title:    "Selenium Test Suite for E-Commerce",
      category: "qa",
      status:   "complete",
      duration: "Jan 2024 – Mar 2024",
      thumb:    "🧪",
      tags:     ["Python","Selenium","PyTest","HTML Reports"],
      desc:     "End-to-end automated test suite covering 120+ test cases for a demo e-commerce platform.",
      problem:  "Manual regression cycles took 8+ hours per sprint — unacceptable velocity blocker.",
      solution: "Built a Page-Object-Model Selenium suite integrated with PyTest and Allure reporting.",
      features: [
        "120+ automated test cases",
        "Page Object Model architecture",
        "CI/CD-ready via GitHub Actions",
        "Allure HTML report generation",
        "Cross-browser (Chrome, Firefox)"
      ],
      learnings:["Selenium advanced waits","POM design pattern","GitHub Actions basics"],
      github:   "#",
      demo:     "#",
      skills:   ["Python","Selenium","PyTest","Allure","GitHub Actions"]
    },
    {
      id:       "p2",
      title:    "Face Attendance System",
      category: "ai",
      status:   "complete",
      duration: "Aug 2023 – Nov 2023",
      thumb:    "🤖",
      tags:     ["Python","OpenCV","face_recognition","SQLite"],
      desc:     "Real-time face recognition based attendance system with admin dashboard and CSV export.",
      problem:  "Manual roll-call in classrooms is slow and error-prone.",
      solution: "Used OpenCV + face_recognition library to detect & identify faces from webcam feed in real-time, logging attendance to SQLite.",
      features: [
        "Real-time face detection & recognition",
        "SQLite attendance log",
        "CSV/Excel export",
        "Admin web dashboard (Flask)",
        "Multi-face simultaneous detection"
      ],
      learnings:["face_recognition library","OpenCV video capture","Flask basics"],
      github:   "#",
      demo:     "#",
      skills:   ["Python","OpenCV","face_recognition","Flask","SQLite"]
    },
    {
      id:       "p3",
      title:    "YOLO Object Detection API",
      category: "ai",
      status:   "complete",
      duration: "Feb 2024 – Apr 2024",
      thumb:    "👁",
      tags:     ["YOLOv8","FastAPI","Python","Docker"],
      desc:     "REST API wrapping YOLOv8 for real-time object detection with image & video support.",
      problem:  "Teams needed a plug-and-play object detection endpoint without heavy ML setup.",
      solution: "Packaged YOLOv8 inference into a FastAPI service with async endpoints and Docker deployment.",
      features: [
        "Image & video frame detection",
        "FastAPI async endpoints",
        "Docker containerised",
        "Swagger UI docs",
        "Confidence threshold config"
      ],
      learnings:["YOLOv8 inference","FastAPI async","Docker basics"],
      github:   "#",
      demo:     "#",
      skills:   ["Python","YOLOv8","FastAPI","Docker"]
    },
    {
      id:       "p4",
      title:    "Playwright API + UI Test Framework",
      category: "qa",
      status:   "complete",
      duration: "Oct 2023 – Dec 2023",
      thumb:    "🎭",
      tags:     ["Playwright","Python","API Testing","GitHub Actions"],
      desc:     "Hybrid framework testing both REST API and UI flows for a sample banking app.",
      problem:  "API and UI were tested in silos, missing integration bugs.",
      solution: "Single Playwright + requests Python framework running API assertions then UI end-to-end flows.",
      features: [
        "API + UI in one run",
        "Data-driven tests via CSV",
        "GitHub Actions CI",
        "Screenshot on failure",
        "JSON + HTML reports"
      ],
      learnings:["Playwright Python","API testing patterns","CI reporting"],
      github:   "#",
      demo:     "#",
      skills:   ["Playwright","Python","pytest","GitHub Actions"]
    },
    {
      id:       "p5",
      title:    "Personal Portfolio Website",
      category: "web",
      status:   "complete",
      duration: "May 2024 – Jun 2024",
      thumb:    "🌐",
      tags:     ["HTML","CSS","JavaScript","GitHub Pages"],
      desc:     "This very portfolio — built with pure HTML/CSS/JS, zero frameworks, GitHub Pages deployed.",
      problem:  "Needed a recruiter-focused showcase without heavyweight build tooling.",
      solution: "Designed a glassmorphism-styled dark-mode portfolio with animations, particle BG and full responsiveness — vanilla JS only.",
      features: [
        "Particle background",
        "Typing animation",
        "Scroll reveal",
        "Theme switcher",
        "Command palette"
      ],
      learnings:["CSS custom properties","Canvas API","intersection observer"],
      github:   "#",
      demo:     "#",
      skills:   ["HTML","CSS","JavaScript"]
    },
    {
      id:       "p6",
      title:    "Python CLI Bug Tracker",
      category: "python",
      status:   "wip",
      duration: "Jun 2024 – Present",
      thumb:    "🐛",
      tags:     ["Python","SQLite","Rich","Click"],
      desc:     "Terminal-based bug tracker with priority, status, and assignment — for developers who hate GUIs.",
      problem:  "Lightweight bug logging without spinning up Jira for side projects.",
      solution: "Python Click CLI + SQLite + Rich library for colorful terminal tables and progress bars.",
      features: [
        "Add / list / close / delete bugs",
        "Priority & status filters",
        "Assignee management",
        "Rich terminal UI",
        "JSON export"
      ],
      learnings:["Click CLI framework","Rich library","SQLite with Python"],
      github:   "#",
      demo:     "#",
      skills:   ["Python","SQLite","Click","Rich"]
    },
  ],

  /* ─── RESUMES ─── */
  resumes: [
    { icon:"🧪", title:"QA Engineer",        updated:"June 2024",  skills:["Manual Testing","Selenium","STLC","Jira"],       file:"#" },
    { icon:"✅", title:"Software Tester",     updated:"June 2024",  skills:["Test Cases","Bug Reports","Regression","SDLC"], file:"#" },
    { icon:"🐍", title:"Python Developer",   updated:"May 2024",   skills:["Python","FastAPI","PyTest","SQLite"],             file:"#" },
    { icon:"🤖", title:"AI Developer",       updated:"Apr 2024",   skills:["OpenCV","YOLO","face_recognition","ML"],         file:"#" },
    { icon:"💻", title:"Software Developer", updated:"June 2024",  skills:["Python","JS","Git","Agile"],                    file:"#" },
  ],

  /* ─── CERTIFICATIONS ─── */
  certifications: [
    { icon:"🎓", name:"ISTQB Foundation Level",         org:"ISTQB",         date:"Mar 2024", link:"#" },
    { icon:"🐍", name:"Python for Everybody",           org:"Coursera",      date:"Jan 2024", link:"#" },
    { icon:"🧪", name:"Selenium WebDriver with Java",   org:"Udemy",         date:"Nov 2023", link:"#" },
    { icon:"🤖", name:"Computer Vision with OpenCV",    org:"OpenCV Univ.",  date:"Sep 2023", link:"#" },
    { icon:"☁", name:"AWS Cloud Practitioner",         org:"Amazon",        date:"Feb 2024", link:"#" },
    { icon:"📊", name:"Agile with Atlassian Jira",      org:"Coursera",      date:"Dec 2023", link:"#" },
    { icon:"🎭", name:"Playwright with Python",         org:"Udemy",         date:"Apr 2024", link:"#" },
    { icon:"🔗", name:"Git & GitHub Mastery",           org:"Udemy",         date:"Aug 2023", link:"#" },
  ],

  /* ─── ACHIEVEMENTS ─── */
  achievements: [
    { icon:"📦", label:"Projects Completed",    count:12 },
    { icon:"🏅", label:"Certifications Earned", count:8  },
    { icon:"💻", label:"GitHub Repositories",   count:25 },
    { icon:"🧩", label:"DSA Problems Solved",   count:200},
    { icon:"🏆", label:"Hackathons",            count:3  },
    { icon:"🎓", label:"Workshops Attended",    count:10 },
  ],

  /* ─── TIMELINE ─── */
  timeline: [
    { title:"Class X — CBSE",              org:"DPS School",       date:"2018",      desc:"Scored 88% in board exams." },
    { title:"Class XII — Science (PCM)",   org:"DPS School",       date:"2020",      desc:"Scored 82%. Developed interest in programming." },
    { title:"B.Tech CS (AI) — Enrolled",   org:"Your University",  date:"Aug 2021",  desc:"Started BTech, focusing on AI and software engineering." },
    { title:"Python & DSA Foundations",    org:"Self-Learning",    date:"2022",      desc:"Completed 200+ LeetCode problems, built first CLI tools." },
    { title:"First QA Project",            org:"Personal",         date:"Jan 2023",  desc:"Built face attendance system; learned OpenCV & Flask." },
    { title:"ISTQB Foundation Prep",       org:"Self-Study",       date:"2023-24",   desc:"Studied ISTQB curriculum alongside college coursework." },
    { title:"Automation Testing Projects", org:"Personal",         date:"2024",      desc:"Built Selenium & Playwright frameworks; published on GitHub." },
    { title:"B.Tech Graduation",           org:"Your University",  date:"Jun 2025",  desc:"Expected graduation — CGPA 8.2." },
    { title:"Target: First Role",          org:"Goal",             date:"2025+",     desc:"QA Engineer / Python Dev / AI Developer role at a product company." },
  ],

  /* ─── GITHUB STATS ─── */
  github_stats: {
    repos:         25,
    stars:         38,
    followers:     42,
    contributions: 310,
    top_languages: ["Python","JavaScript","HTML","C++"],
  },

  /* ─── TESTIMONIALS ─── */
  testimonials: [
    {
      quote:  "Jasvant has an exceptional eye for detail. He caught edge cases in our demo project that even senior testers missed. His documentation is thorough and professional.",
      name:   "Rahul Verma",
      role:   "Senior QA Engineer · Mentor",
      avatar: "RV",
    },
    {
      quote:  "The automation framework Jasvant built for our college project ran 120 tests in 4 minutes. Clean, maintainable code — impressive for a final-year student.",
      name:   "Priya Sharma",
      role:   "Team Lead · Hackathon",
      avatar: "PS",
    },
    {
      quote:  "Extremely fast learner. Given a new tool on Monday, shipping production-ready code by Thursday. His Python skills are well above fresher level.",
      name:   "Ankit Gupta",
      role:   "Project Supervisor",
      avatar: "AG",
    },
  ],

  /* ─── SERVICES ─── */
  services: [
    { icon:"🧪", title:"Manual Testing",       desc:"Detailed test case writing, exploratory testing, and thorough bug reports with reproduction steps." },
    { icon:"📝", title:"QA Documentation",     desc:"Test plans, test strategies, RTM, and bug report templates aligned with ISTQB standards." },
    { icon:"🐍", title:"Python Development",   desc:"CLI tools, automation scripts, REST APIs (FastAPI/Flask), and data processing pipelines." },
    { icon:"🌐", title:"Web Development",      desc:"Responsive HTML/CSS/JS websites and landing pages. Clean, semantic, SEO-friendly markup." },
    { icon:"🎭", title:"Automation Testing",   desc:"Selenium & Playwright frameworks with POM architecture, CI integration and Allure reporting." },
    { icon:"🤖", title:"AI Projects",          desc:"Computer vision solutions using OpenCV, YOLO, and face recognition for real-world use cases." },
  ],

  /* ─── BLOG ─── */
  blogs: [
    { icon:"🧪", title:"Why Page Object Model Makes Selenium Tests Maintainable", category:"QA Testing", date:"May 2024", readtime:"6 min" },
    { icon:"🐍", title:"5 Python Tricks Every QA Automation Engineer Should Know", category:"Python",     date:"Apr 2024", readtime:"8 min" },
    { icon:"👁", title:"Getting Started with YOLOv8: Object Detection in 20 Lines", category:"AI/ML",   date:"Mar 2024", readtime:"10 min" },
    { icon:"🎭", title:"Playwright vs Selenium in 2024: A QA Engineer's Verdict",   category:"QA Testing",date:"Feb 2024", readtime:"7 min" },
    { icon:"📊", title:"How I Use Jira to Manage My Personal Projects",             category:"Tools",    date:"Jan 2024", readtime:"4 min" },
    { icon:"🤖", title:"Building a Face Attendance System with OpenCV",             category:"AI/ML",    date:"Dec 2023", readtime:"12 min" },
  ],

  /* ─── FAQ ─── */
  faq: [
    { q:"Are you available immediately?",              a:"Yes — I'm available for internships and full-time roles immediately after graduation (June 2025). I can also take on part-time/contract work before then." },
    { q:"Are you open to internships?",                a:"Absolutely. I'm actively looking for QA, Python, or AI-focused internships to gain industry experience before my full-time search." },
    { q:"What roles are you targeting?",               a:"QA Engineer, Software Tester, Automation Tester, Python Developer, AI/Computer Vision Developer, and Software Developer — in that preference order." },
    { q:"Will you relocate?",                          a:"Yes, I'm open to relocating across India. Gurugram, Bengaluru, Hyderabad, Pune, and Chennai are all fine." },
    { q:"Are you comfortable with remote work?",       a:"Yes — remote, hybrid, or onsite. I have a reliable home setup with uninterrupted internet." },
    { q:"What is your expected CTC?",                  a:"I'm flexible and open to industry standards for freshers. I prioritise learning, mentorship, and growth over compensation at this stage." },
    { q:"Do you have any work experience?",            a:"I'm a fresher but have built 12+ real-world projects, earned 8 certifications, and solved 200+ DSA problems. My GitHub is the best proof of work." },
  ],
};

/* ═══════════════════════ INIT ═══════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initTheme();
  initNavbar();
  initSectionDots();
  initParticles();
  initTyping();
  initReveal();
  initCounters();
  initReadingProgress();
  initRecruiter();
  initSkills();
  initProjects();
  initResume();
  initCertifications();
  initAchievements();
  initTimeline();
  initGithubStats();
  initTestimonials();
  initServices();
  initBlog();
  initFAQ();
  initContact();
  initFooter();
  initFloating();
  initCmdPalette();
  initContactForm();
  footerYear();
});

/* ═══════════════════════ LOADER ═══════════════════════ */
function initLoader() {
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hidden"), 1800);
  });
  // Fallback
  setTimeout(() => loader.classList.add("hidden"), 3000);
}

/* ═══════════════════════ THEME ═══════════════════════ */
function initTheme() {
  const btn   = document.getElementById("theme-toggle");
  const html  = document.documentElement;
  const icon  = btn.querySelector(".theme-icon");
  const saved = localStorage.getItem("theme") || "dark";
  setTheme(saved);

  btn.addEventListener("click", () => {
    const next = html.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  });

  function setTheme(t) {
    html.dataset.theme = t;
    icon.textContent = t === "dark" ? "☀" : "🌙";
  }
}

/* ═══════════════════════ NAVBAR ═══════════════════════ */
function initNavbar() {
  const nav   = document.getElementById("navbar");
  const ham   = document.getElementById("hamburger");
  const links = document.getElementById("nav-links");

  // Scroll shrink
  window.addEventListener("scroll", () => {
    nav.style.background = window.scrollY > 50
      ? (document.documentElement.dataset.theme === "dark"
          ? "rgba(8,11,24,0.95)" : "rgba(245,246,250,0.95)")
      : "";
  }, { passive: true });

  // Hamburger
  ham.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    ham.classList.toggle("open", open);
    ham.setAttribute("aria-expanded", open);
  });

  // Close on link click
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      ham.classList.remove("open");
      ham.setAttribute("aria-expanded", false);
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navAs    = document.querySelectorAll(".nav-links a");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAs.forEach(a => {
          a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`);
        });
      }
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  sections.forEach(s => obs.observe(s));
}

/* ═══════════════════════ SECTION DOTS ═══════════════════════ */
function initSectionDots() {
  const container = document.getElementById("section-dots");
  const sections  = document.querySelectorAll("section[id]");
  const dots      = [];

  sections.forEach(sec => {
    const dot = document.createElement("button");
    dot.className = "sdot";
    dot.title = sec.id.charAt(0).toUpperCase() + sec.id.slice(1);
    dot.setAttribute("aria-label", `Go to ${sec.id}`);
    dot.addEventListener("click", () => sec.scrollIntoView({ behavior: "smooth" }));
    container.appendChild(dot);
    dots.push({ dot, sec });
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const d = dots.find(d => d.sec === e.target);
      if (d) d.dot.classList.toggle("active", e.isIntersecting);
    });
  }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

  sections.forEach(s => obs.observe(s));
}

/* ═══════════════════════ PARTICLES ═══════════════════════ */
function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });

  const COUNT = Math.min(80, Math.floor(window.innerWidth / 14));
  const COLORS = ["#7c5cfc","#3ecfcf","#f97316","#a78bfa"];

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 2.2 + 0.4;
      this.vx = (Math.random() - .5) * .4;
      this.vy = (Math.random() - .5) * .4;
      this.c  = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.a  = Math.random() * .5 + .15;
    }
    move() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.c;
      ctx.globalAlpha = this.a;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = "#7c5cfc";
          ctx.globalAlpha = (1 - dist / 120) * 0.18;
          ctx.lineWidth = .6;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.move(); p.draw(); });
    drawLines();
    requestAnimationFrame(loop);
  }
  loop();
}

/* ═══════════════════════ TYPING ANIMATION ═══════════════════════ */
function initTyping() {
  const el    = document.getElementById("typed-role");
  const roles = CONFIG.typedRoles;
  let ri = 0, ci = 0, deleting = false;

  function type() {
    const full = roles[ri];
    if (deleting) {
      el.textContent = full.slice(0, --ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
      setTimeout(type, 60);
    } else {
      el.textContent = full.slice(0, ++ci);
      if (ci === full.length) { deleting = true; setTimeout(type, 1800); }
      else setTimeout(type, 80);
    }
  }
  type();
}

/* ═══════════════════════ SCROLL REVEAL ═══════════════════════ */
function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

/* ═══════════════════════ COUNTERS ═══════════════════════ */
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const dur = 1600;
  const step = target / (dur / 16);
  let cur = 0;
  const id = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = Math.floor(cur).toLocaleString();
    if (cur >= target) clearInterval(id);
  }, 16);
}

function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll("[data-count]").forEach(animateCounter);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: .3 });
  document.querySelectorAll(".hero-stats, .achievement-grid, .github-grid").forEach(el => obs.observe(el));
}

/* ═══════════════════════ READING PROGRESS ═══════════════════════ */
function initReadingProgress() {
  const bar = document.getElementById("reading-progress");
  window.addEventListener("scroll", () => {
    const total = document.body.scrollHeight - window.innerHeight;
    bar.style.width = ((window.scrollY / total) * 100) + "%";
  }, { passive: true });
}

/* ═══════════════════════ RECRUITER SECTION ═══════════════════════ */
function initRecruiter() {
  const grid = document.getElementById("recruiter-grid");
  CONFIG.recruiter.forEach(item => {
    grid.innerHTML += `
      <div class="recruiter-card">
        <div class="recruiter-card-icon">${item.icon}</div>
        <div class="recruiter-card-label">${item.label}</div>
        <div class="recruiter-card-value">${item.value}</div>
      </div>`;
  });
}

/* ═══════════════════════ SKILLS ═══════════════════════ */
function initSkills() {
  const container = document.getElementById("skill-categories");
  const search    = document.getElementById("skill-search");

  function renderSkills(filter = "") {
    container.innerHTML = "";
    CONFIG.skills.forEach(cat => {
      const filtered = cat.items.filter(s => s.name.toLowerCase().includes(filter.toLowerCase()));
      if (filtered.length === 0) return;
      const div = document.createElement("div");
      div.className = "skill-category";
      div.innerHTML = `<div class="skill-category-title">${cat.category}</div>
        <div class="skills-row">${filtered.map(s => `
          <div class="skill-item">
            <div class="skill-top">
              <span class="skill-name">${s.name}</span>
              <span class="skill-pct">${s.pct}%</span>
            </div>
            <div class="skill-bar"><div class="skill-bar-fill" data-pct="${s.pct}"></div></div>
          </div>`).join("")}</div>`;
      container.appendChild(div);
    });
    // animate bars
    setTimeout(() => {
      document.querySelectorAll(".skill-bar-fill").forEach(bar => {
        bar.style.width = bar.dataset.pct + "%";
      });
    }, 100);
  }

  renderSkills();
  search.addEventListener("input", () => renderSkills(search.value));
}

/* ═══════════════════════ PROJECTS ═══════════════════════ */
const CATEGORIES = ["all","qa","ai","python","web"];
const CAT_LABELS  = { all:"All", qa:"QA Testing", ai:"AI / ML", python:"Python", web:"Web Dev" };
let   activeFilter = "all", sortBy = "default";

function initProjects() {
  // Filter tabs
  const tabBar = document.getElementById("filter-tabs");
  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-tab" + (cat === "all" ? " active" : "");
    btn.textContent = CAT_LABELS[cat];
    btn.dataset.cat = cat;
    btn.setAttribute("role","tab");
    btn.addEventListener("click", () => {
      activeFilter = cat;
      document.querySelectorAll(".filter-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects();
    });
    tabBar.appendChild(btn);
  });

  // Sort
  document.getElementById("project-sort").addEventListener("change", e => {
    sortBy = e.target.value; renderProjects();
  });

  // Search
  document.getElementById("project-search").addEventListener("input", renderProjects);

  renderProjects();
}

function renderProjects() {
  const grid  = document.getElementById("projects-grid");
  const query = document.getElementById("project-search").value.toLowerCase();
  let list    = CONFIG.projects.filter(p => {
    const matchCat = activeFilter === "all" || p.category === activeFilter;
    const matchQ   = p.title.toLowerCase().includes(query) || p.tags.some(t => t.toLowerCase().includes(query));
    return matchCat && matchQ;
  });

  if (sortBy === "name")   list.sort((a,b) => a.title.localeCompare(b.title));
  if (sortBy === "recent") list.reverse();

  grid.innerHTML = list.map(p => `
    <div class="project-card" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.title} details">
      <div class="project-thumb">
        ${p.thumb}
        <span class="project-status ${p.status === "complete" ? "status-complete" : "status-wip"}">
          ${p.status === "complete" ? "✓ Complete" : "⚡ WIP"}
        </span>
      </div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <div class="project-duration">${p.duration}</div>
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="project-desc">${p.desc}</div>
      </div>
    </div>`).join("") || `<p style="color:var(--text-muted);grid-column:1/-1;text-align:center">No projects match your search.</p>`;

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openProjectModal(card.dataset.id));
    card.addEventListener("keydown", e => { if (e.key === "Enter") openProjectModal(card.dataset.id); });
  });
}

function openProjectModal(id) {
  const p = CONFIG.projects.find(x => x.id === id);
  if (!p) return;
  const modal = document.getElementById("project-modal");
  document.getElementById("modal-content").innerHTML = `
    <div class="modal-header">
      <div class="modal-meta">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}
        <span class="project-status ${p.status==="complete"?"status-complete":"status-wip"}">${p.status==="complete"?"✓ Complete":"⚡ WIP"}</span>
      </div>
      <h2>${p.title}</h2>
      <p style="color:var(--text-muted);font-family:var(--font-mono);font-size:.8rem">${p.duration}</p>
    </div>
    <div class="modal-section-title">Problem</div>
    <p style="color:var(--text-muted);font-size:.9rem;line-height:1.75">${p.problem}</p>
    <div class="modal-section-title">Solution</div>
    <p style="color:var(--text-muted);font-size:.9rem;line-height:1.75">${p.solution}</p>
    <div class="modal-section-title">Key Features</div>
    <ul class="modal-feat-list">${p.features.map(f=>`<li>${f}</li>`).join("")}</ul>
    <div class="modal-section-title">What I Learned</div>
    <ul class="modal-feat-list">${p.learnings.map(l=>`<li>${l}</li>`).join("")}</ul>
    <div class="modal-section-title">Skills Demonstrated</div>
    <div class="modal-skill-tags">${p.skills.map(s=>`<span class="tag">${s}</span>`).join("")}</div>
    <div class="modal-links">
      <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline">⌥ GitHub Repo</a>
      <a href="${p.demo}"   target="_blank" rel="noopener" class="btn btn-primary">🔗 Live Demo</a>
    </div>`;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-backdrop").onclick  = closeModal;
  modal.querySelector(".modal-close").onclick     = closeModal;
}

function closeModal() {
  document.getElementById("project-modal").hidden = true;
  document.body.style.overflow = "";
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ═══════════════════════ RESUME ═══════════════════════ */
function initResume() {
  const grid = document.getElementById("resume-grid");
  CONFIG.resumes.forEach(r => {
    grid.innerHTML += `
      <div class="resume-card glass-card">
        <div class="resume-icon">${r.icon}</div>
        <div class="resume-title">${r.title}</div>
        <div class="resume-updated">Updated: ${r.updated}</div>
        <div class="resume-skills">${r.skills.map(s=>`<span class="resume-skill-tag">${s}</span>`).join("")}</div>
        <a href="${r.file}" class="btn btn-primary w-full" download>↓ Download</a>
        <div class="print-btn" onclick="window.print()">🖨 Print</div>
      </div>`;
  });
  // Footer resume links
  const fl = document.getElementById("footer-resumes");
  CONFIG.resumes.forEach(r => { fl.innerHTML += `<li><a href="${r.file}" download>${r.title}</a></li>`; });
}

/* ═══════════════════════ CERTIFICATIONS ═══════════════════════ */
function initCertifications() {
  const grid = document.getElementById("cert-grid");
  CONFIG.certifications.forEach(c => {
    grid.innerHTML += `
      <div class="cert-card">
        <div class="cert-thumb">${c.icon}</div>
        <div class="cert-body">
          <div class="cert-name">${c.name}</div>
          <div class="cert-org">${c.org}</div>
          <div class="cert-date">${c.date}</div>
          <div class="cert-actions">
            <a href="${c.link}" target="_blank" rel="noopener" class="cert-btn">View</a>
            <a href="${c.link}" target="_blank" rel="noopener" class="cert-btn">Verify</a>
          </div>
        </div>
      </div>`;
  });
}

/* ═══════════════════════ ACHIEVEMENTS ═══════════════════════ */
function initAchievements() {
  const grid = document.getElementById("achievement-grid");
  CONFIG.achievements.forEach(a => {
    grid.innerHTML += `
      <div class="ach-card glass-card">
        <div class="ach-icon">${a.icon}</div>
        <div class="ach-num" data-count="${a.count}">0</div>
        <div class="ach-label">${a.label}</div>
      </div>`;
  });
}

/* ═══════════════════════ TIMELINE ═══════════════════════ */
function initTimeline() {
  const wrap = document.getElementById("timeline-wrap");
  CONFIG.timeline.forEach(t => {
    wrap.innerHTML += `
      <div class="tl-item">
        <div class="tl-content">
          <div class="tl-title">${t.title}</div>
          <div class="tl-org">${t.org}</div>
          <div class="tl-date">${t.date}</div>
          <div class="tl-desc">${t.desc}</div>
        </div>
        <div class="tl-dot-wrap"><div class="tl-dot"></div></div>
        <div class="tl-spacer"></div>
      </div>`;
  });
}

/* ═══════════════════════ GITHUB STATS ═══════════════════════ */
function initGithubStats() {
  const g = CONFIG.github_stats;
  const grid = document.getElementById("github-grid");
  const cards = [
    { icon:"📦", label:"Repositories",   num: g.repos,         count: true },
    { icon:"⭐", label:"Stars",           num: g.stars,         count: true },
    { icon:"👥", label:"Followers",       num: g.followers,     count: true },
    { icon:"🔥", label:"Contributions",  num: g.contributions, count: true },
    { icon:"🗣", label:"Top Languages",  num: null,            langs: g.top_languages },
  ];
  cards.forEach(c => {
    grid.innerHTML += `
      <div class="gh-card glass-card">
        <div class="gh-icon">${c.icon}</div>
        ${c.count ? `<div class="gh-num" data-count="${c.num}">0</div>` : ""}
        <div class="gh-label">${c.label}</div>
        ${c.langs ? `<div class="gh-lang-list">${c.langs.map(l=>`<span class="gh-lang">${l}</span>`).join("")}</div>` : ""}
      </div>`;
  });
}

/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */
function initTestimonials() {
  const track = document.getElementById("testimonials-track");
  CONFIG.testimonials.forEach(t => {
    track.innerHTML += `
      <div class="testimonial-card glass-card">
        <div class="testi-quote">${t.quote}</div>
        <div class="testi-author">
          <div class="testi-avatar">${t.avatar}</div>
          <div><div class="testi-name">${t.name}</div><div class="testi-role">${t.role}</div></div>
        </div>
      </div>`;
  });
}

/* ═══════════════════════ SERVICES ═══════════════════════ */
function initServices() {
  const grid = document.getElementById("services-grid");
  CONFIG.services.forEach(s => {
    grid.innerHTML += `
      <div class="service-card glass-card">
        <div class="service-icon">${s.icon}</div>
        <div class="service-title">${s.title}</div>
        <div class="service-desc">${s.desc}</div>
      </div>`;
  });
}

/* ═══════════════════════ BLOG ═══════════════════════ */
function initBlog() {
  const grid = document.getElementById("blog-grid");
  CONFIG.blogs.forEach(b => {
    grid.innerHTML += `
      <div class="blog-card glass-card">
        <div class="blog-thumb">${b.icon}</div>
        <div class="blog-body">
          <div class="blog-meta">
            <span class="blog-cat">${b.category}</span>
            <span class="blog-date">${b.date}</span>
            <span class="blog-rt">⏱ ${b.readtime}</span>
          </div>
          <div class="blog-title">${b.title}</div>
        </div>
      </div>`;
  });
}

/* ═══════════════════════ FAQ ═══════════════════════ */
function initFAQ() {
  const list = document.getElementById("faq-list");
  CONFIG.faq.forEach(item => {
    const div = document.createElement("div");
    div.className = "faq-item";
    div.innerHTML = `
      <button class="faq-q" aria-expanded="false">
        <span>${item.q}</span><span class="faq-arr">▾</span>
      </button>
      <div class="faq-a">${item.a}</div>`;
    const btn = div.querySelector(".faq-q");
    btn.addEventListener("click", () => {
      const open = !div.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
      div.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open);
    });
    list.appendChild(div);
  });
}

/* ═══════════════════════ CONTACT ═══════════════════════ */
function initContact() {
  const links = [
    { icon:"✉",  label:"Email",      value: CONFIG.email,      href:`mailto:${CONFIG.email}` },
    { icon:"📞",  label:"Phone",      value: CONFIG.phone,      href:`tel:${CONFIG.phone}` },
    { icon:"🔗",  label:"LinkedIn",   value:"linkedin.com/in/jasvant", href: CONFIG.linkedin },
    { icon:"⌥",  label:"GitHub",     value:"github.com/jasvant",      href: CONFIG.github },
    { icon:"🧩",  label:"LeetCode",   value:"leetcode.com/jasvant",    href: CONFIG.leetcode },
    { icon:"🏅",  label:"HackerRank", value:"hackerrank.com/jasvant",  href: CONFIG.hackerrank },
  ];
  const el = document.getElementById("contact-links");
  links.forEach(l => {
    el.innerHTML += `
      <a class="contact-link-item" href="${l.href}" target="_blank" rel="noopener">
        <span class="cl-icon">${l.icon}</span>
        <div><div class="cl-label">${l.label}</div><div class="cl-value">${l.value}</div></div>
      </a>`;
  });

  // Copy email
  document.getElementById("copy-email-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(CONFIG.email).then(() => {
      const btn = document.getElementById("copy-email-btn");
      btn.textContent = "✓ Copied!";
      setTimeout(() => btn.textContent = "📋 Copy Email", 2000);
    });
  });

  // vCard download
  document.getElementById("vcard-btn").addEventListener("click", e => {
    e.preventDefault();
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${CONFIG.name}\nEMAIL:${CONFIG.email}\nTEL:${CONFIG.phone}\nURL:${CONFIG.portfolio}\nEND:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
    a.download = "jasvant_kumar.vcf"; a.click();
  });

  // Footer socials
  const socials = [
    { label:"LinkedIn",   href: CONFIG.linkedin },
    { label:"GitHub",     href: CONFIG.github },
    { label:"LeetCode",   href: CONFIG.leetcode },
    { label:"HackerRank", href: CONFIG.hackerrank },
  ];
  const fs = document.getElementById("footer-socials");
  socials.forEach(s => { fs.innerHTML += `<li><a href="${s.href}" target="_blank" rel="noopener">${s.label}</a></li>`; });

  // FAB links
  document.getElementById("fab-linkedin").href = CONFIG.linkedin;
  document.getElementById("fab-github").href   = CONFIG.github;
  document.getElementById("fab-email").href    = `mailto:${CONFIG.email}`;
}

/* ═══════════════════════ CONTACT FORM ═══════════════════════ */
function initContactForm() {
  const form   = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  form.action  = CONFIG.formspree;

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const btn = form.querySelector("[type=submit]");
    btn.textContent = "Sending…"; btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: "POST", body: new FormData(form),
        headers: { "Accept": "application/json" }
      });
      if (res.ok) {
        status.textContent = "✓ Message sent! I'll get back to you soon.";
        status.className   = "form-status success";
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      status.textContent = "❌ Oops — something went wrong. Please email me directly.";
      status.className   = "form-status error";
    }
    btn.textContent = "Send Message →"; btn.disabled = false;
  });
}

/* ═══════════════════════ FOOTER ═══════════════════════ */
function initFooter() { /* links rendered by initContact / initResume */ }
function footerYear() {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
}

/* ═══════════════════════ FLOATING ACTIONS ═══════════════════════ */
function initFloating() {
  const topBtn = document.getElementById("fab-top");
  window.addEventListener("scroll", () => {
    topBtn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ═══════════════════════ COMMAND PALETTE ═══════════════════════ */
function initCmdPalette() {
  const palette = document.getElementById("cmd-palette");
  const input   = document.getElementById("cmd-input");
  const results = document.getElementById("cmd-results");
  const trigger = document.getElementById("cmd-trigger");

  // All searchable commands
  const COMMANDS = [
    { icon:"👤", label:"About Me",          action:() => scrollTo("#about") },
    { icon:"💡", label:"Skills Dashboard",  action:() => scrollTo("#skills") },
    { icon:"📦", label:"Projects",          action:() => scrollTo("#projects") },
    { icon:"📄", label:"Resume Center",     action:() => scrollTo("#resume") },
    { icon:"🏅", label:"Certifications",    action:() => scrollTo("#certifications") },
    { icon:"⏳", label:"Timeline",          action:() => scrollTo("#timeline") },
    { icon:"📬", label:"Contact",           action:() => scrollTo("#contact") },
    { icon:"🌙", label:"Toggle Dark/Light", action:() => document.getElementById("theme-toggle").click() },
    { icon:"✉",  label:"Email Me",          action:() => window.open(`mailto:${CONFIG.email}`) },
    { icon:"⌥",  label:"Open GitHub",       action:() => window.open(CONFIG.github,"_blank") },
    { icon:"🔗", label:"Open LinkedIn",     action:() => window.open(CONFIG.linkedin,"_blank") },
    // Projects
    ...CONFIG.projects.map(p => ({ icon:"🔬", label:`Project: ${p.title}`, action:() => { scrollTo("#projects"); setTimeout(()=>openProjectModal(p.id),400); } })),
    // Skills
    ...CONFIG.skills.flatMap(cat => cat.items.map(s => ({ icon:"🛠", label:`Skill: ${s.name}`, action:() => { document.getElementById("skill-search").value=s.name; scrollTo("#skills"); setTimeout(()=>{ const ev=new Event("input"); document.getElementById("skill-search").dispatchEvent(ev); },400); } }))),
  ];

  function scrollTo(hash) { document.querySelector(hash)?.scrollIntoView({ behavior:"smooth" }); }

  function open() {
    palette.hidden = false; input.value = ""; render(""); input.focus();
    document.body.style.overflow = "hidden";
  }
  function close() {
    palette.hidden = true; document.body.style.overflow = "";
  }

  function render(q) {
    const filtered = q ? COMMANDS.filter(c => c.label.toLowerCase().includes(q.toLowerCase())) : COMMANDS;
    results.innerHTML = filtered.slice(0,12).map((c,i) => `
      <li class="cmd-item" data-idx="${i}" role="option" tabindex="-1">
        <span class="cmd-item-icon">${c.icon}</span>${c.label}
      </li>`).join("");
    results.querySelectorAll(".cmd-item").forEach((li, i) => {
      li.addEventListener("click", () => { filtered[i].action(); close(); });
    });
  }

  trigger.addEventListener("click", open);
  palette.querySelector(".cmd-backdrop").addEventListener("click", close);
  input.addEventListener("input", e => render(e.target.value));
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); palette.hidden ? open() : close(); }
    if (e.key === "Escape" && !palette.hidden) close();
  });
}
