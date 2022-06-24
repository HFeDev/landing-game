import HomeSection from "../HomeSection";
import "./Wellcome.scss";
import {
  bg1,
  champAhri,
  champAshe,
  champGaren,
  distortion
} from "../../../assets/images";
import Button from "../../button/Button";

import hoverEffect from "hover-effect";
import { useEffect } from "react";

const champImgs = [champAshe, champAhri, champGaren];

const Wellcome = ({ isActive }) => {
  useEffect(() => {
    const welcomeImgs = document.querySelectorAll(
      "#wellcome__img__slide > img"
    );
    let animates = [];
    console.log(welcomeImgs);
    welcomeImgs.forEach((item, index) => {
      let nextImg = welcomeImgs[
        index === welcomeImgs.length - 1 ? 0 : index + 1
      ].getAttribute("src");
      let animation = new hoverEffect({
        parent: document.querySelector("#wellcome__img__slide"),
        intensity: 0.5,
        image1: item.getAttribute("src"),
        image2: nextImg,
        displacementImage: distortion,
        hover: false
      });
      animates.push(animation);
    });
    // welcomeImgs.forEach((e) => e.remove());

    let currItem = 0;

    const autoImageSlide = () => {
      let prevItem = currItem;
      currItem = (currItem + 1) % animates.length;

      if (!document.hidden) {
        animates[prevItem]?.next();
      }

      setTimeout(() => {
        let canvas = document.querySelectorAll(
          "#wellcome__img__slide > canvas"
        );
        document.querySelector("#wellcome__img__slide").appendChild(canvas[0]);
        animates[prevItem]?.previous();
      }, 3000);
    };

    setInterval(autoImageSlide, 3000);
  }, []);

  return (
    <HomeSection
      className={`wellcome ${isActive ? "active" : ""}`}
      contentClassName="overlay wellcome__content"
      bgImage={bg1}
    >
      <div className="wellcome__infor relative">
        <div className="wellcome__infor_content">
          <div className="wellcome__inf_cont_title">
            <span>Wellcome to</span>
            <h2 className="main-color">Summoner's Rift</h2>
          </div>
          <div className="wellcome__description m-t-2">
            Team up with friends and test your skills in 5v5 MOBA combat. All
            the high-skill competition you crave, designed especially for mobile
            and console with revamped controls and streamlined matches.Explore
            the living universe of Runeterra through lore, comics, games, and
            more. Then dive into the community of gamers, cosplayers, musicians,
            and content creators who are waiting for you to join them.
          </div>
          <div className="btns m-t-2">
            <Button className="btn-main">PLAY NOW</Button>
            <Button className="btn-second">GET STARTED</Button>
          </div>
        </div>
      </div>
      <div className="wellcome__img relative">
        <div className="wellcome__img__slide" id="wellcome__img__slide">
          {champImgs.map((img, index) => (
            <img key={index} src={img} alt={`img champ`} />
          ))}
        </div>
      </div>
    </HomeSection>
  );
};

export default Wellcome;
