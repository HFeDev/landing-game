import { useRef } from "react";
import "./ChampionCard.scss";

const ChampionCard = ({ item, id }) => {
  const cardRef = useRef(null);

  const handOnclick = () => {
    const img = cardRef.current.querySelector("img");

    //element.getBoundingClientRect() cung cấp kích thước và vị trí phần tử trên trang web
    const pos = img.getBoundingClientRect();
    // element.cloneNode :  Phương thức sẽ nhân bản tất cả các thuộc tính và các nút chứa trong phần tử
    const newNode = img.cloneNode(true);
    newNode.style.width = img.offsetWidth + "px";
    newNode.style.height = img.offsetHeight + "px";
    newNode.style.position = "absolute";
    newNode.style.top = pos.top + "px";
    newNode.style.left = pos.left + "px";
    newNode.style.zIndex = "102";

    newNode.style.transition = "all 0.7s ease";
    newNode.id = `champ-img-${id}`;
    newNode.style.width = "auto";
    newNode.style.height = "100%";
    newNode.style.top = 0;
    newNode.style.left = 0;
    setTimeout(() => {
      newNode.style.width = "auto";
      newNode.style.height = "100%";
      newNode.style.top = 0;
      newNode.style.left = 0;
    });

    document.body.appendChild(newNode);

    const videoUrl = `https://youtube.com/embed/${item.video}`;
    document
      .querySelector(`#champ-detail-${id} iframe`)
      .setAttribute("src", videoUrl);
    document.querySelector(`#champ-detail-${id}`).classList.add("active");
  };

  return (
    <div className="champion-card" ref={cardRef} onClick={handOnclick}>
      <div className="frame">
        <div
          className="bg-image overlay bg"
          style={{ backgroundImage: `url(${item.bg})` }}
        ></div>
      </div>
      <img src={item.img} alt="" />
      <div className="name">{item.name}</div>
    </div>
  );
};

export default ChampionCard;
