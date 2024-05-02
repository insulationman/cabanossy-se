import Logo from "./assets/Cabanossy-Snurra_nobg.svg";
import { useEffect, useRef, useState } from "react";
import PilUpp from "./assets/Pil-Upp.svg";
import PilNer from "./assets/Pil-Ner.svg";
import PieChart from "./assets/PieChart.svg";
import Card from "./Card";
import Footer from "./Footer";
import Logos from "./assets/logos.png";

function App() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [colorNameBG, setColorNameBG] = useState("bg-blue-200");
  const [colorNameCard, setColorNameCard] = useState("bg-cyan-100");

  const BGColorNames = ["bg-amber-200", "bg-blue-200"];

  const CardColorNames = ["bg-yellow-200", "bg-cyan-100"];

  useEffect(() => {
    scrollContainerRef.current?.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        const rotation = (scrollContainerRef.current?.scrollTop || 0) / 2;
        if (imageRef.current != undefined) {
          imageRef.current.style.transform = `rotate(${rotation}deg)`;
        }
      });
    });
  }, []);

  const handleColorChange = () => {
    // //set the color of the background to the next color in the array
    const nextBGColorIndex = BGColorNames.indexOf(colorNameBG) + 1;
    const nextBGColor = BGColorNames[nextBGColorIndex % BGColorNames.length];
    setColorNameBG(nextBGColor);
    //and the color of the cards
    const nextCardColorIndex = CardColorNames.indexOf(colorNameCard) + 1;
    const nextCardColor =
      CardColorNames[nextCardColorIndex % CardColorNames.length];
    setColorNameCard(nextCardColor);
    // setColorNameBG("blue");
  };

  return (
    <div className={`flex h-[100dvh] justify-center ${colorNameBG}`}>
      <div className="max-w-[700px] h-full flex justify-center flex-col">
        <div className=" h-[8rem] md:h-64 p-6 flex justify-center items-center top-0 shrink-0">
          <img
            src={Logo}
            className={"h-24 md:h-32 rounded-full" + " " + colorNameCard}
            alt="logo"
            ref={imageRef}
            style={{ filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));" }}
          />
        </div>
        <div
          className="grow overflow-scroll no-scrollbar pb-auto"
          ref={scrollContainerRef}
          onScroll={() => console.log("scroll")}
        >
          <Card title="A passion for web and coding" colorName={colorNameCard}>
            <p>
              At Cabanossy we are passionate – about web development and code in
              particular. We believe that the web is a great place to be.
            </p>
            <img
              src={PilNer}
              className="h-2 mt-auto self-end overflow-visible"
              alt="pilned"
            />
          </Card>
          <Card title="Grow with IT" colorName={colorNameCard}>
            <p>
              This knowledge about new and established technologies helps our
              customers achieve their goals.
            </p>
            <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="What we do" colorName={colorNameCard}>
            <div className="flex flex-col md:flex-row  gap-3">
              <p className="order-2 md:order-first">
                We do work in three business areas: classic public facing web
                development, customised business software and IT
                management/consulting.
              </p>
              <img
                src={PieChart}
                className="h-24 md:h-32 md:mx-4 md:order-last self-center"
              />
            </div>
            <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="Web development" colorName={colorNameCard}>
            <p>
              We often work with designers to create responsive sites for
              end-customers. Here are some examples:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://viab.se"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Vätterledens Invest
                </a>
              </li>
              <li>
                <a
                  href="https://supai.se/curryketchup/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Supai kitchen
                </a>
              </li>
              <li>
                <a
                  href="https://vhab.se"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  VHAB
                </a>
              </li>
            </ul>
            <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="From design to site" colorName={colorNameCard}>
            <p>
              In our work with marketing agency <strong>2028</strong>, this
              means we take a design and turn it into a site while collaborating
              closely.
            </p>
            <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="Custom software" colorName={colorNameCard}>
            <p>
              Collaboration is also key when you need a customised solution.
              This solution was made by working closely with users, and the
              result is a successful project:
            </p>
            <a
              href="https://isol.se"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              isol.se
            </a>
            <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="Even more customized" colorName={colorNameCard}>
            <p>
              The Gothenburg based company IT-Trans needed tools for storing and
              delivering printing soultions. They now use a custom delivery and
              order management software. Contact us to learn more.
            </p>
            <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="Selected tools" colorName={colorNameCard}>
            <p>
              All this is made possible by using the right tools, some of the
              most common being:
              <strong>
                {" "}
                .NET, React, TypeScript, PostgreSQL, Docker, GitHub Actions,
                Azure and of course WordPress.
              </strong>
            </p>
            <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="Just humans" colorName={colorNameCard}>
            <p>
              All this digital development is usually done in the context of an
              organisation. We help our customers make the right decisions
              within that context.
            </p>
            <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="Get in touch" colorName={colorNameCard}>
            <p>
              Do you want to know more? Get in touch – we will get back to you
              as soon as possible.
            </p>
            <img src={PilUpp} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="Selected clients" colorName={colorNameCard}>
            <img src={Logos} alt="logos" className="w-full my-auto" />
          </Card>
          <Footer onColorChange={handleColorChange} />
          <div className="h-[800px]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
