import {
  FaGithub,
  FaLinkedinIn,
  FaBriefcase,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let animationFrameId: number;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        animationFrameId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(animationFrameId);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/intermediatecoder" target="_blank" title="GitHub">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/aditya-bhadane/" target="_blank" title="LinkedIn">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://leetcode.com/u/Adi_23/" target="_blank" title="LeetCode">
            <SiLeetcode />
          </a>
        </span>
        <span>
          <a href="https://www.naukri.com/mnjuser/profile" target="_blank" title="Naukri.com">
            <FaBriefcase />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="https://drive.google.com/file/d/1loTAowvOVt8MxFwDYQty8vj0OSGVnL95/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
