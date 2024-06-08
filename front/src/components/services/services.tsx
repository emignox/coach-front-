import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { CustomButton } from "../blocs/Custom-button";
import { ServiceData, Service } from "./service-data";
import Titles from "../blocs/titles";
import P from "../blocs/paragraph";
import { useNavigate } from "react-router-dom";
import { Scroll } from "../scroll-animation";

function ServiceComponent({
  gif,
  title,
  text,
  buttonText,
  reverse,
}: Service & { reverse?: boolean }) {
  const container = useRef<HTMLDivElement>(null!);
  const [animation, setAnimation] = useState<AnimationItem | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (animation) {
      animation.destroy();
    }

    const newAnimation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: gif,
    });

    setAnimation(newAnimation);

    return () => {
      newAnimation.destroy();
    };
  }, [gif]);

  return (
    <div
      className={`w-full flex flex-col md:flex md:flex-row ${reverse ? "md:flex-row-reverse  md:text-end " : ""} justify-center items-center md:gap-12 lg:gap-20`}
    >
      <div className="w-6/12 md:w-2/12" ref={container}></div>
      <div className="flex flex-col items-center justify-center w-3/5 ">
        <Titles className="font-black" title={`${title}`}></Titles>
        <P className="md:w-3/4" text={text} />
        {buttonText && (
          <CustomButton
            type="button"
            value={buttonText}
            className="my-5 text-2xl"
            onClick={
              buttonText === "Book Now"
                ? () => {
                    navigate("/booking");
                    window.scrollTo(0, 0);
                  }
                : () => {
                    navigate("/advice");
                    window.scrollTo(0, 0);
                  }
            }
          />
        )}
      </div>
    </div>
  );
}

function Services() {
  return (
    <>
      {ServiceData.map((service: Service, index: number) => (
        <Scroll key={index}>
          <div className="flex h-screen text-gray-100 ">
            <ServiceComponent {...service} reverse={index === 1} />
          </div>
        </Scroll>
      ))}
    </>
  );
}

export default Services;
