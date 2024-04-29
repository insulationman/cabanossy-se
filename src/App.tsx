import Logo from "./assets/Cabanossy-Snurra_Rityta 1.svg";
import { useEffect, useRef } from "react";
import PilUpp from "./assets/Pil-Upp.svg";
import PilNer from "./assets/Pil-Ner.svg";
import PieChart from "./assets/PieChart.svg";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        const rotation = (window.scrollY / 1) % 360;
        if (imageRef.current != undefined) {
          imageRef.current.style.transform = `rotate(${rotation}deg)`;
        }
      });
    });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-[700px]">
        <div className="sticky h-[10rem] md:h-[14rem]  flex justify-center items-center sticky top-0">
          <img src={Logo} className="h-24 md:h-32" alt="logo" ref={imageRef} />
        </div>
        <Card title="A passion for web and coding">
          <p>
            At Cabanossy we are passionate – about web development and code in
            particular. Let’s create amazing websites and applications together.
          </p>
          <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
        </Card>
        <Card title="Grow with IT">
          <p>
            Most businesses can use new and established technologies to grow and
            expand. We can help you with that.
          </p>
          <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
        </Card>
        <Card title="Business areas">
          <div className="flex flex-col md:flex-row  gap-3">
            <p className="order-2 md:order-first">
              We do work in three business areas: "classic" public facing web
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
            In our work with marketing agency <strong>2028</strong>, this means
            we take a design and turn it into a site while collaborating
            closely.
          </p>
          <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
        </Card>
        <Card title="Custom software">
          <p>
            Sometimes you need a customised solution. Cabanossy has developed
            this:
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
            soultions. We build a custom delivery and order management software
            for them. Contact us to learn more.
          </p>
          <img src={PilNer} className="h-2 mt-auto self-end" alt="pilned" />
        </Card>

        <Card title="Get in touch">
          <p>
            Do you want to know more? Get in touch – we will get back to you as
            soon as possible.
          </p>
          <img src={PilUpp} className="h-2 mt-auto self-end" alt="pilned" />
        </Card>
        <Footer />
      </div>
    </div>
  );
}

export default App;
