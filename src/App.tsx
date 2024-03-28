import Logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="logo-container">
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <div className="card">
        <h1>Passion for web and code</h1>
        <p>
          Cabanossy is a company that is passionate about web development and
          code. Together we can create amazing websites and applications.
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
