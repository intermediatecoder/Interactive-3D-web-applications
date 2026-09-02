import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Basel Technologies Pvt Ltd</h5>
              </div>
              <h3>Jun 2023 <br></br> Jul 2025</h3>
            </div>
            <p>
              Worked as a <b>Software Developer at Basel Technologies Pvt Ltd</b>, building and maintaining production-grade applications using <b>React.js, TypeScript, Node.js, Express.js, Spring Boot, REST APIs, PostgreSQL, and Tailwind CSS</b>. Migrated backend APIs to Node.js, transforming <b>7+ microservices</b> to improve performance, scalability, and maintainability. Developed and optimized secure <b>REST APIs</b> for reliable frontend-backend communication and efficient data exchange. Built responsive and reusable UI components using <b>React.js, TypeScript, and Tailwind CSS</b>, while optimizing UI rendering and centralized styling to <b>improve application performance by 60%</b>. Worked with <b>PostgreSQL</b> for database operations and backend integrations, and contributed to application development, debugging, troubleshooting, and deployment activities using modern development tools including <b>Cursor</b>. Collaborated with cross-functional teams to streamline development and deployment workflows and reduce turnaround time.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Binaried Technologies Pvt Ltd</h5>
              </div>
              <h3>Jul 2025 <br></br> Jul 2026</h3>
            </div>
            <p>
              Worked as a <b>Software Developer at Binaried Technologies Pvt Ltd</b>, building production-grade applications using <b>React, TypeScript, Node.js, Express.js, REST APIs, Prisma, PostgreSQL, React Native, and Expo</b>. Developed key modules including <b>RWA/Society Management, Units & Members, Polls, FAQs, Platform Admin, Feedback, and Analytics</b>, with <b>RBAC and permission-based access control</b>. Designed <b>reusable, scalable UI components</b> and translated Figma designs into responsive, pixel-perfect interfaces. Built <b>REST APIs, DTOs, service/repository layers, database operations</b>, and integrated <b>PostHog Analytics</b>. Contributed to a shared <b>React component library with Storybook</b> and worked with <b>Docker, Git/GitHub, debugging, code reviews, and cross-functional teams</b> to deliver maintainable, production-ready solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
