import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I’m a Full-Stack Developer with 3 years of professional experience
          building scalable, production-ready web and mobile applications. I
          specialize in React.js, React Native, TypeScript, JavaScript, Node.js,
          Express.js, REST APIs, Spring Boot, PostgreSQL, and Prisma, with
          hands-on experience across both frontend and backend development.
        </p>
        <p className="para">
          I enjoy turning ideas and Figma designs into responsive,
          pixel-perfect interfaces using reusable component architecture, modern
          UI libraries, Tailwind CSS, and effective state management. On the
          backend, I build structured APIs, implement business logic, work with
          databases, and design maintainable service architectures.
        </p>
        <p className="para">
          My experience also includes RBAC and permission-based access control,
          API integration, database design, PostHog analytics, shared component
          libraries with Storybook, and performance optimization. I work with
          tools such as Git, GitHub, Docker, Postman, and Cursor and focus on
          writing clean, maintainable code while solving real-world engineering
          problems.
        </p>
        <p className="para">
          I’m driven by clean architecture, performance, scalability, and
          great user experiences, and I’m always exploring better ways to build
          reliable products that are both technically solid and visually
          engaging.
        </p>
      </div>
    </div>
  );
};

export default About;
