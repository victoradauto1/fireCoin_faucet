import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { mint } from "./Web3Service";

function App() {
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");

  function onBtnClick() {
    setMessage("Requesting your tokens... wait...");
    if (captcha) {
      mint()
        .then((tx) => setMessage(`Your tokens were sent to wallet ${localStorage.getItem("wallet")}. Tx:`  + tx))
        .catch((err) =>
          setMessage(err.response ? err.response.data : err.message)
        );
      setCaptcha("");
    } else {
      setMessage("Prove that you are not a robot.");
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      {/* Menu no topo */}
      <header className="p-3 bg-dark">
        <div className="container d-flex justify-content-between align-items-center">
          <h3 className="mb-0">FireCoin Faucet</h3>
          <nav className="nav nav-masthead">
            <a
              className="nav-link fw-bold px-2 text-white active"
              aria-current="page"
              href="#"
            >
              Home
            </a>
            <a className="nav-link fw-bold px-2 text-white" href="#">
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Main centralizado verticalmente */}
      <main className="d-flex flex-grow-1 align-items-center justify-content-center text-center">
        <div>
          <h1>Get your FireCoins, here!</h1>
          <p className="lead">
            Once a day, earn 10.000 FireCoins for free, just connecting your
            Metamask below.
          </p>
          <p className="lead">
            <a
              href="#"
              onClick={() => onBtnClick()}
              className="btn btn-lg btn-light fw-bold border-white bg-white"
            >
              <img
                src="/assets/MetaMask_Fox.svg.png"
                alt="MetaMask Logo"
                width={48}
              />
              Get my tokens!
            </a>
            <div style={{ display: "inline-flex" }}>
              <ReCAPTCHA
                sitekey={`${process.env.REACT_APP_RECAPTCHA_KEY}`}
                onChange={(value) => setCaptcha(value || "")}
              />
            </div>
          </p>
          {message}
        </div>
      </main>

      {/* Rodapé no final */}
      <footer className="text-white-50 text-center p-3">
        <p>
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/victor-silva-073b60267/"
            className="text-white"
          >
            Victor Silva
          </a>
          , available at{" "}
          <a href="https://github.com/victoradauto1" className="text-white">
            @victoradauto1
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
