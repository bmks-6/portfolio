import React, { useMemo, useState } from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="sectionHeader">
        <div className="sectionTitleWrap">
          <h2 className="sectionTitle">{title}</h2>
          <div className="sectionUnderline" />
        </div>
      </div>
      <div className="sectionBody">{children}</div>
    </section>
  );
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

export default function App() {
  const [active, setActive] = useState('about');

  const resumeData = useMemo(
    () => ({
      name: 'Bollineni Mohan Krishna Sai',
      location: 'Vinukonda, Andhra Pradesh',
      headline:
        'Aspiring Software Engineer and AI Data Science undergraduate with hands-on experience in Java, Spring Boot, REST APIs, MySQL, and web development.',
      links: [
        { label: 'LinkedIn', href: 'https://linkedin.com/in/bollineni-mohan-krishna-sai-7a71a4342' },
        { label: 'GitHub', href: 'https://github.com/mohankrishna6-mks' },
        { label: 'Email', href: 'mailto:mohankrishnasaibollineni@gmail.com' },
        { label: 'Phone', href: 'tel:9154575782' }
      ],
      education: {
        institute: 'Vishnu Institute of Technology, Bhimavaram',
        degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
        years: '2023 – 2027',
        cgpa: 'CGPA: 8.23'
      },
      skills: {
        programming: ['Java', 'Python', 'JavaScript', 'SQL', 'C'],
        core: ['DSA', 'OOP', 'DBMS', 'JDBC', 'MVC Architecture'],
        backend: ['Spring Boot', 'REST APIs', 'CRUD Operations', 'Authentication Authorization'],
        frontend: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'Fetch API'],
        databases: ['MySQL', 'MongoDB', 'NoSQL Basics'],
        tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA'],
        fundamentals: ['Operating Systems', 'Computer Networks', 'HTTP/HTTPS', 'OSI Model Basics', 'Linux']
      },
      experience: [
        {
          role: 'Full Stack Web Development Intern — Main Flow',
          duration: 'Jan 2025 – Mar 2025',
          bullets: [
            'Developed responsive web application modules using React.js, Node.js, and MongoDB.',
            'Implemented REST APIs and performed debugging for backend functionalities.',
            'Used Git and GitHub for collaborative development workflows.',
            'Worked in Agile-based development environments and participated in project discussions.'
          ]
        },
        {
          role: 'Data Analytics Intern — SmartInternz',
          duration: '2025',
          bullets: [
            'Performed exploratory data analysis using Tableau, SQL, and Excel.',
            'Built dashboards and handled structured datasets for visualization tasks.',
            'Worked with data cleaning and reporting techniques for business insights.'
          ]
        }
      ],
      projects: [
        {
          title: 'Online Examination System',
          stack: 'Java, Spring Boot, MySQL, REST API',
          bullets: [
            'Built a web-based examination platform with user authentication, exam management, and automated result generation.',
            'Implemented RESTful APIs for managing exams, students, and results using Spring Boot (CRUD-ready endpoints).',
            'Designed role-aware flows for students/admins so the UI and API behaviors stay consistent for each use-case.',
            'Worked on secure request handling patterns (validation + predictable payload structures) to reduce runtime errors during exam lifecycle.'
          ]
        },
        {
          title: 'Employee Management System',
          stack: 'Java, Spring Boot, MySQL',
          bullets: [
            'Developed a secure employee management application supporting employee records and full CRUD operations.',
            'Created REST APIs and integrated frontend-backend communication using JavaScript Fetch API.',
            'Added validation-focused request handling to keep data integrity during create/update operations.',
            'Designed UI interactions around API outcomes (success/error feedback) to improve usability and debugging speed.'
          ]
        },
        {
          title: 'Book a Doctor',
          stack: 'Java, Spring Boot, MySQL, HTML, CSS, JavaScript',
          bullets: [
            'Developed an online healthcare appointment booking system with patient registration and appointment scheduling.',
            'Created REST APIs for appointment management and integrated MySQL database.',
            'Implemented responsive frontend interfaces and dynamic data rendering using JavaScript and DOM manipulation.',
            'Focused on a smooth appointment flow: form input → API submission → confirmation / next-step updates.'
          ]
        },
        {
          title: 'AI-Powered Job/Resume Match (Mini Prototype)',
          stack: 'Python, Data Cleaning, ML Basics (Prototype)',
          bullets: [
            'Built a small matching prototype that ranks resumes against job descriptions using basic text similarity techniques.',
            'Performed data cleaning (tokenization, normalization) to reduce noise and improve matching quality.',
            'Generated ranked outputs for quick comparison and iterated on preprocessing to improve results.',
            'Practiced end-to-end workflow: dataset prep → feature extraction → evaluation/visual checks.'
          ]
        },
        {
          title: 'REST API Study Hub (CRUD + Auth Patterns)',
          stack: 'JavaScript, REST APIs, Fetch API',
          bullets: [
            'Created reusable UI patterns for calling REST endpoints (GET/POST/PUT/DELETE) with consistent loading and error handling.',
            'Practiced API-first development: clear request/response handling and predictable state updates in the frontend.',
            'Documented endpoint behavior via examples, making it easier to test quickly using tools like Postman.',
            'Used Git/GitHub workflows to track improvements per feature (commits organized by task).'
          ]
        }
      ],

      certifications: [
        'Data Science Using Python — NPTEL',
        'Spring Boot Web Development Program',
        'Foundations of AI Machine Learning — Eduskills'
      ]
    }),
    []
  );

  const onNav = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brandMark" aria-hidden="true">
            <span className="brandDot" />
          </div>
          <div className="brandText">
            <div className="brandName">{resumeData.name}</div>
            <div className="brandSub">AI • Data Science • Software Engineering</div>
          </div>
        </div>

        <nav className="nav">
          {sections.map((s) => (
            <button
              key={s.id}
              className={active === s.id ? 'navLink active' : 'navLink'}
              onClick={() => onNav(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <a className="cta" href="mailto:mohankrishnasaibollineni@gmail.com">
          Contact Me
        </a>
      </header>

      <main className="container">
        <section className="hero" id="about">
          <div className="heroGrid">
            <div className="heroLeft">
              <h1 className="heroTitle">{resumeData.name}</h1>
              <p className="heroHeadline">{resumeData.headline}</p>

              <div className="heroMeta">
                <div className="metaCard">
                  <div className="metaLabel">Location</div>
                  <div className="metaValue">{resumeData.location}</div>
                </div>
                <div className="metaCard">
                  <div className="metaLabel">Education</div>
                  <div className="metaValue">
                    {resumeData.education.degree}
                    <div className="metaSmall">{resumeData.education.institute} • {resumeData.education.years}</div>
                    <div className="metaSmall">{resumeData.education.cgpa}</div>
                  </div>
                </div>
              </div>

              <div className="heroLinks">
                {resumeData.links.map((l) => (
                  <a key={l.label} className="heroLink" href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="heroButtons">
                <button className="btn primary" onClick={() => onNav('projects')}>
                  View Projects
                </button>
                <button className="btn" onClick={() => onNav('skills')}>
                  Explore Skills
                </button>
              </div>
            </div>

            <div className="heroRight">
              <div className="avatarCard">
                <div className="avatar" role="img" aria-label="Profile placeholder">
                  <span className="avatarText">MK</span>
                </div>
                <div className="avatarBadges">
                  <Pill>Java</Pill>
                  <Pill>Spring Boot</Pill>
                  <Pill>React</Pill>
                  <Pill>SQL</Pill>
                </div>
              </div>

              <div className="statsRow">
                <div className="stat">
                  <div className="statNum">3+</div>
                  <div className="statLabel">Projects</div>
                </div>
                <div className="stat">
                  <div className="statNum">2</div>
                  <div className="statLabel">Internships</div>
                </div>
                <div className="stat">
                  <div className="statNum">8.23</div>
                  <div className="statLabel">CGPA</div>
                </div>
              </div>

              <div className="glowPanel">
                <div className="glowTitle">Focus</div>
                <ul className="glowList">
                  <li>Backend APIs (Spring Boot)</li>
                  <li>Full-stack CRUD systems</li>
                  <li>Data insights & visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Section id="skills" title="Skills">
          <div className="skillsGrid">
            <div className="skillBlock">
              <h3 className="skillTitle">Programming</h3>
              <div className="pillWrap">{resumeData.skills.programming.map((x) => <Pill key={x}>{x}</Pill>)}</div>
            </div>
            <div className="skillBlock">
              <h3 className="skillTitle">Core</h3>
              <div className="pillWrap">{resumeData.skills.core.map((x) => <Pill key={x}>{x}</Pill>)}</div>
            </div>
            <div className="skillBlock">
              <h3 className="skillTitle">Backend</h3>
              <div className="pillWrap">{resumeData.skills.backend.map((x) => <Pill key={x}>{x}</Pill>)}</div>
            </div>
            <div className="skillBlock">
              <h3 className="skillTitle">Frontend</h3>
              <div className="pillWrap">{resumeData.skills.frontend.map((x) => <Pill key={x}>{x}</Pill>)}</div>
            </div>
            <div className="skillBlock">
              <h3 className="skillTitle">Databases</h3>
              <div className="pillWrap">{resumeData.skills.databases.map((x) => <Pill key={x}>{x}</Pill>)}</div>
            </div>
            <div className="skillBlock">
              <h3 className="skillTitle">Tools</h3>
              <div className="pillWrap">{resumeData.skills.tools.map((x) => <Pill key={x}>{x}</Pill>)}</div>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="timeline">
            {resumeData.experience.map((job, idx) => (
              <div key={job.role} className="timelineItem">
                <div className="timelineDot" aria-hidden="true" />
                <div className="timelineCard">
                  <div className="timelineHeader">
                    <div className="timelineRole">{job.role}</div>
                    <div className="timelineDuration">{job.duration}</div>
                  </div>
                  <ul className="timelineBullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                {idx !== resumeData.experience.length - 1 ? <div className="timelineLine" /> : null}
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="cardsGrid">
            {resumeData.projects.map((p) => (
              <article key={p.title} className="card">
                <div className="cardTop">
                  <h3 className="cardTitle">{p.title}</h3>
                  <div className="cardStack">{p.stack}</div>
                </div>
                <ul className="cardBullets">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="certGrid">
            {resumeData.certifications.map((c) => (
              <div key={c} className="cert">
                <div className="certIcon" aria-hidden="true">✓</div>
                <div className="certText">{c}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="contactGrid">
            <div className="contactCard">
              <div className="contactLabel">Email</div>
              <a className="contactValue" href="mailto:mohankrishnasaibollineni@gmail.com">
                mohankrishnasaibollineni@gmail.com
              </a>
            </div>
            <div className="contactCard">
              <div className="contactLabel">Phone</div>
              <a className="contactValue" href="tel:9154575782">
                9154575782
              </a>
            </div>
            <div className="contactCard">
              <div className="contactLabel">Links</div>
              <div className="contactLinks">
                <a className="chip" href="https://linkedin.com/in/bollineni-mohan-krishna-sai-7a71a4342" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="chip" href="https://github.com/mohankrishna6-mks" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="footerNote">
            Feel free to connect for internships and real-world backend/full-stack opportunities.
          </div>
        </Section>
      </main>
    </div>
  );
}

