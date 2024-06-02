import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { cardData, Card } from "./cardData";
import { useNavigate } from "react-router-dom";
import Titles from "../blocs/titles";
import { CustomButton } from "../blocs/Custom-button";
import P from "../blocs/paragraph";

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
    <div className="w-56 px-2 py-2 text-gray-100 duration-200 transform border-2 border-gray-100 rounded-lg cursor-pointer hover:border-custom-red text-gray-10">
      <div
        className="flex flex-col items-center justify-center w-52 h-52"
        ref={container}
      ></div>
      <h2 className="w-full py-3 font-black text-center">{title}</h2>
      <P className="w-full text-center" text={text} />
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
          className="font-black text-center text-gray-100 "
        />
        <div
          className="flex flex-col items-center justify-center gap-12 md:gap-10 lg:gap-20 md:flex md:flex-row md:justify-center md:items-center "
          onClick={() => navigate("/advice")}
        >
          {cardData.map((card, index) => (
            <CardComponent key={index} {...card} />
          ))}
          <CustomButton
            className=" md:hidden"
            onClick={() => navigate("/advice")}
            value="advice"
          />
        </div>
      </div>
    </>
  );
}

export default CardList;
