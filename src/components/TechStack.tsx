const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
  "/images/mysql.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
];

const techNames: Record<string, string> = {
  "/images/react2.webp": "React",
  "/images/next2.webp": "Next.js",
  "/images/node2.webp": "Node.js",
  "/images/express.webp": "Express.js",
  "/images/mongo.webp": "MongoDB",
  "/images/mysql.webp": "MySQL",
  "/images/typescript.webp": "TypeScript",
  "/images/javascript.webp": "JavaScript",
};

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>My Techstack</h2>
      <div className="tech-grid">
        {imageUrls.map((url, i) => (
          <div className="tech-item" key={i}>
            <img src={url} alt={techNames[url]} />
            <span>{techNames[url]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
