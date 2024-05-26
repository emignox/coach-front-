import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { CustomButton } from "../blocs/Custom-button";
import { ServiceData, Service } from "./service-data";
import Titles from "../blocs/titles";

function ServiceComponent({
  gif,
  title,
  text,
  buttonText,
  reverse,
}: Service & { reverse?: boolean }) {
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
      path: gif,
    });

    setAnimation(newAnimation);

    return () => {
      newAnimation.destroy();
    };
  }, [gif]);

  return (
    <div
      className={`w-full flex flex-col md:flex md:flex-row ${reverse ? "md:flex-row-reverse  md:text-end " : ""} justify-center items-center md:gap-52`}
    >
      <div className=" w-6/12 md:w-2/12 " ref={container}></div>
      <div className=" flex flex-col justify-center items-center w-3/5">
        <Titles className="font-black" title={`${title}`}></Titles>
        <p>{text}</p>
        {buttonText && (
          <CustomButton value={buttonText} className="text-2xl my-5" />
        )}
      </div>
    </div>
  );
}

function Services() {
  return (
    <>
      {ServiceData.map((service: Service, index: number) => (
        <div key={index} className=" flex text-gray-100 h-screen ">
          <ServiceComponent {...service} reverse={index === 1} />
        </div>
      ))}
    </>
  );
}

export default Services;
