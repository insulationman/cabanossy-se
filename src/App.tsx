import Logo from "./assets/Cabanossy-Snurra_Rityta 1.svg";
import { useEffect, useRef } from "react";
import PilUpp from "./assets/Pil-Upp.svg";
import PilNer from "./assets/Pil-Ner.svg";
import PieChart from "./assets/PieChart.svg";
import Card from "./Card";
import Footer from "./Footer";
import Logos from "./assets/logos.png";

function App() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="flex h-[100dvh] justify-center bg-amber-200">
      <div className="max-w-[700px] h-full flex justify-center flex-col">
        <div className="sticky h-[8rem] md:h-[14rem]  p-4 flex justify-center items-center top-0">
          <img
            src={Logo}
            className="h-24 md:h-32 "
            alt="logo"
            ref={imageRef}
            style={{ filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));" }}
          />
        </div>
        <div
          className="grow overflow-scroll pb-auto"
          ref={scrollContainerRef}
          onScroll={() => console.log("scroll")}
        >
          <Card title="A passion for web and coding">
            <p>
              At Cabanossy we are passionate – about web development and code in
              particular. Let’s create amazing websites and applications
              together.
            </p>
            <img
              src={PilNer}
              className="h-2 mt-auto self-end overflow-visible"
              alt="pilned"
            />
          </Card>
          <Card title="Grow with IT">
            <p>
              Most businesses can use new and established technologies to grow
              and expand, or just to use less energy at work. We can help you
              with that.
            </p>
            <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="Business areas">
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
          <Card title="Web development">
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
          <Card title="From design to site">
            <p>
              In our work with marketing agency <strong>2028</strong>, this
              means we take a design and turn it into a site while collaborating
              closely.
            </p>
            <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="Custom software">
            <p>
              Sometimes you need a customised solution. We have developed this:
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
          <Card title="And even more customized">
            <p>
              Gothenburg based IT-Trans configures, stores and delivers printing
              soultions. We build a custom delivery and order management
              software for them. Contact us to learn more.
            </p>
            <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="Selected tools">
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
          <Card title="Get in touch">
            <p>
              Do you want to know more? Get in touch – we will get back to you
              as soon as possible.
            </p>
            <img src={PilUpp} className="h-2 mt-auto self-end" alt="pilned" />
          </Card>
          <Card title="Selected clients">
            <img src={Logos} alt="logos" className="w-full my-auto" />
          </Card>
          <Footer />
          <div className="h-[800px]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
