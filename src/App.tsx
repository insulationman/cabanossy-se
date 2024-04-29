import Logo from "./assets/Cabanossy-Snurra_Rityta 1.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Email from "./assets/Email.svg";
import LinkedIn from "./assets/LinkedIn.svg";
import PilUpp from "./assets/Pil-Upp.svg";
import PilNer from "./assets/Pil-Ner.svg";
import palette from "./assets/palette-solid.svg";
import Card from "./Card";

function App() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [themeHue, setThemeHue] = useState(0);

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

  const ThemeHues = [55, 0, 90, 180, 270];

  return (
    <>
      <div className="logo-container">
        <img src={Logo} className="logo" alt="logo" ref={imageRef} />
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
      <Card title="Get in touch">
        <p>
          Do you want to know more? Get in touch – we will get back to you as
          soon as possible.
        </p>
        <img src={PilUpp} className="h-2 mt-auto self-end" alt="pilned" />
      </Card>
      <div className="flex align-items-center px-4 pb-4 text-sm gap-1">
        <span className="">© {new Date().getFullYear()} Cabanossy</span>
        <div
          className="w-5 ml-auto"
          onClick={() => {
            //set theme css var to red
            const hue = ThemeHues[(ThemeHues.indexOf(themeHue) + 1) % 4];
            setThemeHue(hue);
            document.documentElement.style.setProperty(
              "--theme-hue",
              hue.toString()
            );
          }}
        >
          <img src={palette} alt="palette" />
        </div>
        <a
          href="mailto:info@cabanossy.se?subject=Contact"
          className="w-5"
          onClick={() => {}}
        >
          <img src={Email} alt="email" />
        </a>
        <a href="https://www.linkedin.com/company/cabanossy" className="w-5">
          <img src={LinkedIn} alt="linkedin" />
        </a>
      </div>
    </>
  );
}

export default App;
