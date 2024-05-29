import React from "react";

interface ButtonProps {
  onClick?: () => void;
  value: string;
  className: string;
}

export const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  value,
  className,
}) => {
  return (
    <button
      className={`${className} text-sm font-light  text-black w-32 bg-white hover:bg-custom-red transform transition duration-300 rounded-full py-2`}
      onClick={onClick}
    >
      <p>{value}</p>
    </button>
  );
};
