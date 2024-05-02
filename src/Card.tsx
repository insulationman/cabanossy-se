import React from "react";

interface CardProps {
  title: string;
  colorName: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { title, children, colorName } = props;
  //ref for the current card
  const cardRef = React.useRef<HTMLDivElement>(null);

  //if the card is positioned at the top of the container, remove the shadow using IntersectionObserver
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardRef.current?.classList.add("shadow-xl");
          } else {
            cardRef.current?.classList.remove("shadow-xl");
          }
        });
      },
      { threshold: 1 }
    );
    observer.observe(cardRef.current!);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`flex flex-col mb-5 mx-4 px-6 py-4 ${colorName} shadow-xl sticky top-[-1px] min-h-80`}
      ref={cardRef}
    >
      {title && <h1 className="text-3xl font-extrabold mt-2 mb-3">{title}</h1>}
      {children}
    </div>
  );
};

export default Card;
