import Logo from "./assets/Cabanossy-Snurra_Rityta 1.svg";
import "./App.css";
import { useEffect, useRef } from "react";

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
        <h1>Passion for web and code</h1>
        <p>
          Cabanossy is a company that is passionate about web development and
          code. Together we create amazing websites and applications.
        </p>
        <p></p>
      </div>
      <div className="card">
        <h1>Growing with IT</h1>
        <p>
          Most businesses can use new and established technologies to grow and
          expand. We can help you with that.
        </p>
      </div>
      <div className="card">
        <h1>Get in touch</h1>
        <p>
          Want to know more? Get in touch we will get back to you as soon as
          possible.
        </p>
        <p>
          <a href="mailto:info@cabanossy.se?subject=Contact">Email us</a>
        </p>
      </div>
    </>
  );
}

export default App;
