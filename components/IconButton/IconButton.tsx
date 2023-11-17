import React from "react";
import Image, { StaticImageData } from "next/image";

interface IconProps {
  src: StaticImageData;
  name: string;
}

interface IconButtonProps {
  icon: IconProps;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border-1 border-primary bg-background rounded-[50%] p-1 cursor-pointer hover:bg-primary transition-all duration-300 ease-in-out"
    >
      <Image
        src={icon.src}
        alt={icon.name}
        width={20}
        height={20}
        className="tint-color"
      />
    </div>
  );
};

export default IconButton;
