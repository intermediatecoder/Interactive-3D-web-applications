import { useState } from "react";
import { MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md";

interface Props {
  image: string;
  images?: string[];
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const imageList =
    props.images && props.images.length > 0 ? props.images : [props.image];
  const currentImg = imageList[activeImageIndex] || props.image;

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveImageIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveImageIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="work-image">
      <div
        className="work-image-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
      >
        {props.link && (
          <a
            className="work-link"
            href={props.link}
            target="_blank"
            rel="noreferrer"
            data-cursor={"disable"}
            title="Open Project"
          >
            <MdArrowOutward />
          </a>
        )}
        <img
          src={currentImg}
          alt={`${props.alt || "Project"} preview ${activeImageIndex + 1}`}
        />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}

        {imageList.length > 1 && (
          <>
            <button
              type="button"
              className="work-img-nav work-img-prev"
              onClick={handlePrevImg}
              aria-label="Previous image"
              data-cursor="disable"
            >
              <MdChevronLeft />
            </button>
            <button
              type="button"
              className="work-img-nav work-img-next"
              onClick={handleNextImg}
              aria-label="Next image"
              data-cursor="disable"
            >
              <MdChevronRight />
            </button>
            <div className="work-img-dots">
              {imageList.map((_, idx) => (
                <span
                  key={idx}
                  className={`work-img-dot ${idx === activeImageIndex ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setActiveImageIndex(idx);
                  }}
                  data-cursor="disable"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkImage;
