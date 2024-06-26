import React, { useState, useEffect } from "react";
import { nutritionalTips, fitnessTips } from "./data-advice";
import Titles from "../blocs/titles";

const TipsComponent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "nutritional" | "fitness"
  >("nutritional");
  const [isVisible, setIsVisible] = useState(false);

  const handleCategoryChange = (category: "nutritional" | "fitness") => {
    setSelectedCategory(category);
    setIsVisible(true);
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Imposta un ritardo uguale alla durata dell'animazione

      return () => clearTimeout(timer); // Pulisci il timer se il componente viene smontato
    }
  }, [isVisible]);

  const tipsToDisplay =
    selectedCategory === "nutritional" ? nutritionalTips : fitnessTips;

  return (
    <div className="p-6 bg-[#111] h-auto  mb-32 ">
      <div className="flex flex-col items-center justify-center mb-2 md:items-center md:justify-between md:flex md:flex-row md:px-10 ">
        <Titles
          className="font-black text-white"
          title={`${selectedCategory === "nutritional" ? "Health Tips" : "Fitness Tips"}`}
        />
        <div className="flex flex-col items-center justify-center mb-3 md:items-center md:justify-center md:flex md:flex-row md:gap-4">
          <button
            className={`px-4 py-2 w-44 mb-2 md:mb-0 rounded ${selectedCategory === "nutritional" ? "bg-custom-red text-gray-900 " : "bg-gray-700 text-gray-100"}`}
            onClick={() => handleCategoryChange("nutritional")}
          >
            Nutritional Tips
          </button>
          <button
            className={`px-4 py-2 w-44 rounded ${selectedCategory === "fitness" ? "bg-custom-red text-gray-900 " : "bg-gray-700 text-gray-100"}`}
            onClick={() => handleCategoryChange("fitness")}
          >
            Fitness Tips
          </button>
        </div>
      </div>
      <div
        className={` ${isVisible ? "fade" : ""} flex flex-col gap-3 md:flex md:flex-wrap md:flex-row md:justify-around gap-y-20 `}
      >
        {tipsToDisplay.map((tip, index) => (
          <div
            key={index}
            className={` flex flex-col w-full duration-150 transform hover:scale-105 md:w-3/4 lg:w-1/4`}
          >
            <div className="flex flex-col justify-between flex-1 p-4 bg-[#E9E8DF] shadow-lg rounded-t-md h-80">
              <h3 className="mb-2 text-xl font-semibold">{tip.title}</h3>
              <p className="mb-4 font-thin text-justify">{tip.text}</p>
            </div>
            <img
              className="object-cover w-full h-48 rounded-b-md "
              src={tip.image}
              alt={tip.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsComponent;
