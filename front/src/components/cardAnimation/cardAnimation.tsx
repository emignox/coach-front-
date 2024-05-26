import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { cardData, Card } from "./cardData";
import { useNavigate } from "react-router-dom";
import Titles from "../blocs/titles";
import { CustomButton } from "../blocs/Custom-button";

function CardComponent({ gif, title, text }: Card) {
  const container = useRef<HTMLDivElement>(null!);
  const [animation, setAnimation] = useState<AnimationItem | null>(null);

  useEffect(() => {
    if (animation) {
      animation.destroy();
    }

    const newAnimation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: gif, // path to the animation json
    });

    setAnimation(newAnimation);

    return () => {
      newAnimation.destroy();
    };
  }, [gif]);

  return (
    <div className="w-56 border-2  transform duration-200 hover:border-custom-red border-gray-100 text-gray-100 py-2 px-2 rounded-lg text-gray-10 cursor-pointer">
      <div
        className="w-52 h-52 flex flex-col justify-center items-center"
        ref={container}
      ></div>
      <h2 className="w-full text-center font-black py-3">{title}</h2>
      <p className="w-full text-center">{text}</p>
    </div>
  );
}
function CardList() {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-32">
        <Titles
          title="No Matter Your Goal."
          className="font-black text-center text-gray-100  "
        />
        <div
          className="flex flex-col justify-center gap-12 md:gap-32 items-center  md:flex md:flex-row md:justify-center md:items-center  "
          onClick={() => navigate("/advice")}
        >
          {cardData.map((card, index) => (
            <CardComponent key={index} {...card} />
          ))}
          <CustomButton
            className=" md:hidden "
            onClick={() => navigate("/advice")}
            value="advice"
          />
        </div>
      </div>
    </>
  );
}

export default CardList;
