import Logo from "./assets/Cabanossy-Snurra_Rityta 1.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Email from "./assets/Email.svg";
import LinkedIn from "./assets/LinkedIn.svg";
import PilUpp from "./assets/Pil-Upp.svg";
import PilNer from "./assets/Pil-Ner.svg";
import palette from "./assets/palette-solid.svg";

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
      <div className="card">
        <h1>A passion for web and coding</h1>
        <p>
          At Cabanossy we are passionate – about web development and code in
          particular. Let’s create amazing websites and applications together.
        </p>
        <img src={PilNer} className="pil" alt="pilned" />
      </div>
      <div className="card">
        <h1>Grow with IT</h1>
        <p>
          Most businesses can use new and established technologies to grow and
          expand. We can help you with that.
        </p>
        <img src={PilNer} className="pil" alt="pilned" />
      </div>
      <div className="card">
        <h1>Get in touch</h1>
        <p>
          Do you want to know more? Get in touch – we will get back to you as
          soon as possible.
        </p>
        <img src={PilUpp} className="pil" alt="pilupp" />
      </div>
      <div className="footer">
        <span>© {new Date().getFullYear()} Cabanossy</span>
        <div
          className="color-picker"
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
          className="contact-link"
          onClick={() => {}}
        >
          <img src={Email} alt="email" />
        </a>
        <a
          href="https://www.linkedin.com/company/cabanossy"
          className="contact-link"
        >
          <img src={LinkedIn} alt="linkedin" />
        </a>
      </div>
    </>
  );
}

export default App;
