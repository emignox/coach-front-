import React from "react";

interface SectionProps {
  type: "row" | "row-reverse";
  children: React.ReactNode;
  className: string;
  ref?: React.RefObject<HTMLDivElement>;
}

const Section: React.FC<SectionProps> = ({
  type,
  children,
  className,
  ref,
}) => {
  let flexDirection;

  switch (type) {
    case "row":
      flexDirection = "md:flex-row";
      break;
    case "row-reverse":
      flexDirection = "md:flex-row-reverse";
      break;
    default:
      flexDirection = "md:flex-row";
  }

  return (
    <div
      ref={ref}
      className={`flex flex-col ${flexDirection} items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
