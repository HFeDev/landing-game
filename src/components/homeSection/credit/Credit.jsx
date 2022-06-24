import "./Credit.scss";
import bgvideo from "../../../assets/bg-video.mp4";
import { useEffect, useRef } from "react";
import Button from "../../button/Button";

const Credit = ({ isActive }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
    const pauseVideo = () => {
      if (!document.hidden) {
        console.log(document.hidden);
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };
    document.addEventListener("webkitvisibilitychange", pauseVideo);
    return () => {
      document.removeEventListener("webkitvisibilitychange", pauseVideo);
    };
  }, []);

  return (
    <div className={`credit overlay ${isActive ? "active" : ""}`}>
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        loop={true}
        className="overlay"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>
      <div className="credit__content">
        <div className="title">
          <span>Start Your</span>
          <h2 className="main-color">LEGENDS</h2>
        </div>
        <div className="btns m-t-4">
          <Button className="btn-main">PLAY NOW</Button>
          <Button className="btn-second">GET STARTED</Button>
        </div>
      </div>
    </div>
  );
};

export default Credit;
