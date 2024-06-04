import React from "react";

interface TitlesProps {
  title: string;
  className?: string;
}

const Titles: React.FC<TitlesProps> = ({ title, className }) => {
  return (
    <h1
      className={`${className} text-4xl py-12 transform duration-200  hover:text-custom-red  md:text-6xl xl:text-6xl`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default Titles;
