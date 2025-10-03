import React from "react";
import Headline from "./core/Headline";
import Image from "next/image";

interface LightBoxCardProps {
  headline: string;
  imageSrc: string;
}

const LightBoxCard: React.FC<LightBoxCardProps> = ({ headline, imageSrc }) => {
  return (
    <div className="flex flex-col text-center">
      <Image
        src={imageSrc}
        width={500}
        height={500}
        alt={headline}
        className="rounded mb-5 aspect-video object-cover w-full"
      />

      <Headline level={3}>{headline}</Headline>
    </div>
  );
};

export default LightBoxCard;
