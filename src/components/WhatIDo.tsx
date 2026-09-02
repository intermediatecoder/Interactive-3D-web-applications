import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FRONTEND</h3>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">JavaScript (ES6+)</div>
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS3</div>
                <div className="what-tags">Tailwind CSS</div>
                <div className="what-tags">React Native</div>
                <div className="what-tags">Redux</div>
                <div className="what-tags">Zustand</div>
                <div className="what-tags">PostHog</div>
                <div className="what-tags">Context API</div>
                <div className="what-tags">TanStack Query</div>
                <div className="what-tags">React Hook Form</div>
                <div className="what-tags">Material UI</div>
                <div className="what-tags">shadcn/ui</div>
                <div className="what-tags">Storybook</div>
                <div className="what-tags">Figma</div>
                <div className="what-tags">Responsive Design</div>
                <div className="what-tags">Component Architecture</div>
                <div className="what-tags">API Integration</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BACKEND</h3>
              <div className="what-content-flex">
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">Spring Boot</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">GraphQL</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">Microservices</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">Git & GitHub</div>
                <div className="what-tags">RBAC</div>
                <div className="what-tags">Service/Repository Architecture</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DATABASE & TOOLS</h3>
              <div className="what-content-flex">
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">Prisma ORM</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">TimescaleDB</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">GitHub</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">Postman</div>
                <div className="what-tags">DBeaver</div>
                <div className="what-tags">Linux</div>
                <div className="what-tags">Cursor</div>
                <div className="what-tags">Claude</div>
                <div className="what-tags">Codex</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
