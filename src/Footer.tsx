import { useState } from "react";
import Email from "./assets/Email.svg";
import LinkedIn from "./assets/LinkedIn.svg";

import palette from "./assets/palette-solid.svg";

const Footer = () => {
  const ThemeHues = [55, 0, 90, 180, 270];
  const [themeHue, setThemeHue] = useState(0);

  return (
    <div className="flex align-items-center px-6 pb-4 text-sm gap-1">
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
  );
};

export default Footer;
