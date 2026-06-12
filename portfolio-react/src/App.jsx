import React from 'react'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
]

function Section({ id, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div>
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <div className="logo" aria-hidden="true" />
            <div>
              <div className="brand-title">BOLLINENI MOHAN KRISHNA SAI</div>
              <div className="brand-sub">Aspiring Software Engineer • AI/Data Science</div>
            </div>
          </div>

          <nav className="nav-links" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="card hero-left">
              <div className="pill-row">
                <span className="pill">Java</span>
                <span className="pill">Spring Boot</span>
                <span className="pill">REST APIs</span>
                <span className="pill">React</span>
                <span className="pill">MySQL</span>
              </div>

              <h1 className="h1">
                Building <span className="gradient-text">high-performance</span> web apps and data-driven insights.
              </h1>

              <p className="hero-desc">
                Aspiring Software Engineer and AI Data Science undergraduate with hands-on experience in Java, Spring Boot,
                REST APIs, MySQL, and web development. Strong foundation in OOP, DSA, DBMS, and backend development with
                experience building full-stack applications and CRUD-based systems using Git/GitHub. I enjoy turning
                requirements into clean APIs, responsive UI, and measurable outcomes.
              </p>

              <div className="cta-row">
                <a className="btn primary" href="#projects">View Projects</a>
                <a className="btn" href="#contact">Contact Me</a>
                <a className="btn" href="https://github.com/mohankrishna6-mks" target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn" href="https://linkedin.com/in/bollineni-mohan-krishna-sai-7a71a4342" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>

            <aside className="card hero-right">
              <div className="avatar-wrap">
                <div className="avatar" aria-hidden="true" />
                <div>
                  <div style={{ fontWeight: 900, fontSize: 16 }}>Vinukonda, Andhra Pradesh</div>
                  <div style={{ color: 'rgba(147,197,253,.95)', fontSize: 13, marginTop: 4 }}>
                    Available for internship / full-time
                  </div>
                </div>
              </div>

              <div className="kv">
                <div className="kv-item">
                  <div className="kv-title">Email</div>
                  <div className="kv-value">mohankrishnasaibollineni@gmail.com</div>
                </div>
                <div className="kv-item">
                  <div className="kv-title">Phone</div>
                  <div className="kv-value">9154575782</div>
                </div>
                <div className="kv-item">
                  <div className="kv-title">Links</div>
                  <div className="kv-value">github.com/mohankrishna6-mks</div>
                </div>
              </div>

              <div className="img-placeholder" aria-hidden="true" />
            </aside>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="grid2">
            <div className="item">
              <div className="item-top">
                <h3>Profile</h3>
                <span className="badge">Backend + Full-Stack</span>
              </div>
              <ul className="ul">
                <li>Internship experience with React modules, REST APIs, and debugging backend functionality.</li>
                <li>Comfortable with CRUD systems, authentication/authorization, and database-driven development.</li>
                <li>Data science fundamentals: EDA, dashboards, cleaning and reporting for business insights.</li>
                <li>Git/GitHub workflows in Agile environments with collaborative development.</li>
              </ul>
            </div>
            <div className="item">
              <div className="item-top">
                <h3>Education</h3>
                <span className="badge">B.Tech (AI & Data Science)</span>
              </div>
              <ul className="ul">
                <li>Vishnu Institute of Technology, Bhimavaram (2023 – 2027)</li>
                <li>CGPA: 8.23</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="item">
            <div className="skill-grid">
              {[
                'Java', 'JavaScript', 'Python', 'SQL', 'C',
                'Spring Boot', 'REST APIs', 'Authentication/Authorization', 'CRUD',
                'HTML5', 'CSS3', 'React', 'Fetch API', 'DOM Manipulation',
                'MySQL', 'MongoDB', 'DBMS', 'JDBC', 'MVC',
                'Git', 'GitHub', 'Postman', 'Tableau', 'Agile'
              ].map((s) => (
                <span className="skill" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid2">
            <div className="item">
              <div className="item-top">
                <h3>Main Flow — Full Stack Web Development Intern</h3>
                <span className="badge">Jan 2025 – Mar 2025</span>
              </div>
              <ul className="ul">
                <li>Developed responsive web application modules using React.js, Node.js, and MongoDB.</li>
                <li>Implemented REST APIs and performed debugging for backend functionalities.</li>
                <li>Used Git and GitHub for collaborative development workflows.</li>
                <li>Worked in Agile-based development environments and participated in project discussions.</li>
              </ul>
            </div>
            <div className="item">
              <div className="item-top">
                <h3>SmartInternz — Data Analytics Intern</h3>
                <span className="badge">2025</span>
              </div>
              <ul className="ul">
                <li>Performed exploratory data analysis using Tableau, SQL, and Excel.</li>
                <li>Built dashboards and handled structured datasets for visualization tasks.</li>
                <li>Worked with data cleaning and reporting techniques for business insights.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid2">
            <div className="item">
              <div className="item-top">
                <h3>Online Examination System</h3>
                <span className="badge">Java • Spring Boot • MySQL</span>
              </div>
              <ul className="ul">
                <li>Web-based examination platform with user authentication, exam management, and automated result generation.</li>
                <li>RESTful APIs for managing exams, students, and results using Spring Boot.</li>
              </ul>
            </div>

            <div className="item">
              <div className="item-top">
                <h3>Employee Management System</h3>
                <span className="badge">Java • Spring Boot • MySQL</span>
              </div>
              <ul className="ul">
                <li>Secure employee management application supporting employee records and CRUD operations.</li>
                <li>REST APIs and frontend-backend communication using JavaScript Fetch API.</li>
              </ul>
            </div>

            <div className="item">
              <div className="item-top">
                <h3>Book a Doctor</h3>
                <span className="badge">Java • Spring Boot • HTML/CSS/JS</span>
              </div>
              <ul className="ul">
                <li>Online healthcare appointment booking system with patient registration and appointment scheduling.</li>
                <li>REST APIs for appointment management integrated with MySQL database.</li>
                <li>Responsive frontend with dynamic data rendering using JavaScript and DOM manipulation.</li>
              </ul>
            </div>

            <div className="item">
              <div className="item-top">
                <h3>What I’m building next</h3>
                <span className="badge">Portfolio-ready</span>
              </div>
              <ul className="ul">
                <li>Production-style UI with performance-focused components and clean state management.</li>
                <li>Better project descriptions and live links as they become available.</li>
                <li>Integrating AI/data insights into real workflows (analytics + recommendation ideas).</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="item">
            <div className="skill-grid">
              {[
                'Data Science Using Python — NPTEL',
                'Spring Boot Web Development Program',
                'Foundations of AI Machine Learning — Eduskills'
              ].map((c) => (
                <span className="skill" key={c}>{c}</span>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid2">
            <div className="item">
              <div className="item-top">
                <h3>Let’s connect</h3>
                <span className="badge">Fast response</span>
              </div>
              <ul className="ul">
                <li>Email: <a href="mailto:mohankrishnasaibollineni@gmail.com" style={{ color: 'rgba(89,167,255,.95)', fontWeight: 800 }}>mohankrishnasaibollineni@gmail.com</a></li>
                <li>Phone: <a href="tel:9154575782" style={{ color: 'rgba(89,167,255,.95)', fontWeight: 800 }}>9154575782</a></li>
                <li>Location: Vinukonda, Andhra Pradesh</li>
              </ul>
            </div>

            <div className="item">
              <div className="item-top">
                <h3>Quick links</h3>
                <span className="badge">Profiles</span>
              </div>
              <div className="cta-row" style={{ marginTop: 12 }}>
                <a className="btn primary" href="https://github.com/mohankrishna6-mks" target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn" href="https://linkedin.com/in/bollineni-mohan-krishna-sai-7a71a4342" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} Bollineni Mohan Krishna Sai</div>
          <div style={{ color: 'rgba(147,197,253,.95)' }}>High-contrast blue/black theme</div>

        </div>
      </footer>
    </div>
  )
}

