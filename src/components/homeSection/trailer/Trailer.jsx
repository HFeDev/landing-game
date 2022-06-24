import { useEffect, useRef } from "react";
import { bg3, trailerImg } from "../../../assets/images";
import HomeSection from "../HomeSection";
import "./Trailer.scss";

const Trailer = ({ isActive }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <HomeSection
      className={`trailer ${isActive ? "active" : ""}`}
      contentClassName="overlay trailer__content"
      bgImage={bg3}
    >
      <div className="trailer__content_img">
        <img src={trailerImg} alt="" />
      </div>

      <div className="trailer__content_infor">
        <div className="title">
          <span>Compete with</span>
          <h2 className="main-color">Friends</h2>
        </div>

        <div className="video">
          <iframe
            ref={iframeRef}
            width="100%"
            title="trailer"
            src="https://youtube.com/embed/TFzkbos0oeo"
          ></iframe>
        </div>
      </div>
    </HomeSection>
  );
};

export default Trailer;
