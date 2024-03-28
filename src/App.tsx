import Logo from "./assets/Cabanossy-Snurra_Rityta 1.svg";
import "./App.css";
import { useEffect, useRef } from "react";
import Email from "./assets/Email.svg";
import LinkedIn from "./assets/LinkedIn.svg";

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
      </div>
      <div className="card">
        <h1>Grow with IT</h1>
        <p>
          Most businesses can use new and established technologies to grow and
          expand. We can help you with that.
        </p>
      </div>
      <div className="card">
        <h1>Get in touch</h1>
        <p>
          Do you want to know more?Get in touch – we will get back to you as
          soon as possible.
        </p>
      </div>
      <div className="footer">
        <span>© 2021 Cabanossy</span>
        <a
          href="mailto:info@cabanossy.se?subject=Contact"
          className="contact-link"
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
