import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { title, children } = props;

  return (
    <div className="flex flex-col mb-5 mx-4 px-6 py-4 bg-yellow-200 shadow-xl sticky top-[8rem] md:top-[14rem] min-h-80">
      {title && <h1 className="text-3xl font-extrabold mt-2 mb-3">{title}</h1>}
      {children}
    </div>
  );
};

export default Card;
