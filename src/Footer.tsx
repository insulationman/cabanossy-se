import Email from "./assets/Email.svg";
import LinkedIn from "./assets/LinkedIn.svg";

import palette from "./assets/palette-solid.svg";

interface FooterProps {
  onColorChange: () => void;
}

const Footer = (props: FooterProps) => {
  return (
    <div className="flex align-items-center px-6 pb-4 text-sm gap-1 sticky top-[22rem]">
      <span className="">© {new Date().getFullYear()} Cabanossy</span>
      <div className="w-5 ml-auto" onClick={props.onColorChange}>
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
