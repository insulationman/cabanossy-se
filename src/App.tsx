import Logo from "./assets/Cabanossy-Snurra_Rityta 1.svg";
import { useEffect, useRef } from "react";
import PilUpp from "./assets/Pil-Upp.svg";
import PilNer from "./assets/Pil-Ner.svg";
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
        <div className="sticky h-[14rem] flex justify-center items-center sticky top-0">
          <img src={Logo} className="h-32" alt="logo" ref={imageRef} />
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
