import React from "react";

interface CardProps {
  colorName: string;
  children: React.ReactNode;
  className?: string;
}

const Card = (props: CardProps) => {
  const { children, colorName, className } = props;
  //ref for the current card
  const cardRef = React.useRef<HTMLDivElement>(null);

  //if the card is positioned at the top of the container, remove the shadow using IntersectionObserver

  return (
    <div
      className={`flex flex-col p-12 ${colorName}  rounded-xl ${className}`}
      ref={cardRef}
    >
      {children}
    </div>
  );
};

export default Card;
