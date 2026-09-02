import { useState, useRef, useEffect, useCallback } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

interface Project {
  title: string;
  category: string;
  tools: string;
  image: string;
  images?: string[];
  video?: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "GrocerHub",
    category: "Grocery E-Commerce Platform",
    tools: "React.js, TypeScript, Spring Boot, REST APIs, PostgreSQL, Tailwind CSS",
    image: "/images/grocerhub.png",
    images: [
      "/images/grocerhub.png",
      "/images/grocerhub_1.png",
      "/images/grocerhub_2.png",
      "/images/grocerhub_3.png",
      "/images/grocerhub_4.png",
      "/images/grocerhub_5.png",
      "/images/grocerhub_6.png",
      "/images/grocerhub_7.png",
    ],
  },
  {
    title: "Guitar Platform",
    category: "E-Commerce Platform",
    tools: "React.js, TypeScript, Node.js, Express.js, GraphQL, PostgreSQL, Tailwind CSS",
    image: "/images/placeholder.webp",
  },
  {
    title: "Developer Portfolio",
    category: "Interactive 3D Web Application",
    tools: "React.js, TypeScript, Three.js, GSAP, Tailwind CSS, Vite",
    image: "/images/portfolio_1.png",
    images: [
      "/images/portfolio_1.png",
      "/images/portfolio_2.png",
      "/images/portfolio_3.png",
      "/images/portfolio_4.png",
      "/images/portfolio_5.png",
      "/images/portfolio_6.png",
      "/images/portfolio_7.png",
      "/images/portfolio_8.png",
    ],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);

  const calculateBounds = useCallback(() => {
    if (!sliderRef.current || !flexRef.current) return;
    const wrapperWidth = sliderRef.current.clientWidth;
    const scrollWidth = flexRef.current.scrollWidth;
    const maxScroll = Math.max(0, scrollWidth - wrapperWidth);

    const boxes = flexRef.current.querySelectorAll<HTMLElement>(".work-box");
    if (boxes.length === 0) return;

    const firstBoxWidth = boxes[0].offsetWidth;
    const calculatedMax =
      maxScroll > 0 ? Math.ceil(maxScroll / firstBoxWidth) : 0;
    setMaxIndex(calculatedMax);

    setCurrentIndex((prev) => {
      const nextIndex = Math.min(prev, calculatedMax);
      const computedTranslate = Math.min(nextIndex * firstBoxWidth, maxScroll);
      setTranslateX(computedTranslate);
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    calculateBounds();
    window.addEventListener("resize", calculateBounds);
    return () => window.removeEventListener("resize", calculateBounds);
  }, [calculateBounds]);

  const updatePosition = useCallback((targetIndex: number) => {
    if (!flexRef.current || !sliderRef.current) return;
    const boxes = flexRef.current.querySelectorAll<HTMLElement>(".work-box");
    if (boxes.length === 0) return;
    const cardWidth = boxes[0].offsetWidth;
    const maxScroll = Math.max(
      0,
      flexRef.current.scrollWidth - sliderRef.current.clientWidth
    );
    const computedTranslate = Math.min(targetIndex * cardWidth, maxScroll);
    setTranslateX(Math.max(0, computedTranslate));
  }, []);

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    updatePosition(newIndex);
  };

  const handleNext = () => {
    if (currentIndex >= maxIndex) return;
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    setCurrentIndex(newIndex);
    updatePosition(newIndex);
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-nav-buttons">
            <button
              type="button"
              className="work-nav-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous project"
              data-cursor="disable"
            >
              <MdChevronLeft />
            </button>
            <button
              type="button"
              className="work-nav-btn"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next project"
              data-cursor="disable"
            >
              <MdChevronRight />
            </button>
          </div>
        </div>

        <div className="work-slider-wrapper" ref={sliderRef}>
          <div
            className="work-flex"
            ref={flexRef}
            style={{
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {projects.map((project, index) => (
              <div className="work-box" key={index}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                </div>
                <WorkImage
                  image={project.image}
                  images={project.images}
                  alt={project.title}
                  video={project.video}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
