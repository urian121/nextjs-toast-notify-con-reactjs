import reactLogo from "./assets/imgs/react.svg";
import nextjsLogo from "./assets/imgs/nextjs.svg";
import "./App.css";

import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

function App() {
  const handleShowToastLeft = () => {
    toast.success("¡La operación se realizó con éxito!", {
      duration: 9000,
      progress: true,
      position: "top-left",
      transition: "fadeIn",
    });
  };

  const handleShowToasCenter = () => {
    toast.error("¡La operación se realizó con éxito!", {
      duration: 9000,
      progress: true,
      position: "top-center",
      transition: "bounceIn",
    });
  };

  const handleShowToastRight = () => {
    toast.warning("¡La operación se realizó con éxito!", {
      duration: 15000,
      progress: true,
      position: "top-right",
      transition: "swingInverted",
    });
  };

  const handleShowToastBottomLeft = () => {
    toast.info("¡La operación se realizó con éxito!", {
      duration: 8000,
      progress: true,
      position: "bottom-left",
      transition: "popUp",
    });
  };

  const handleShowToastBottomCenter = () => {
    toast.info("¡La operación se realizó con éxito!", {
      duration: 6000,
      progress: true,
      position: "bottom-center",
      transition: "bottomToTopBounce",
      icon: "🎉",
      sonido: true,
    });
  };

  const handleShowToastBottomRight = () => {
    toast.info("¡La operación se realizó con éxito!", {
      duration: 7000,
      progress: true,
      position: "bottom-right",
      transition: "bounceInDown",
    });
  };

  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={nextjsLogo} className="logo nextjs" alt="logo nextjs" />
      </a>
      <h1>Nextjs Toast Notify</h1>
      <div className="card">
        <button id="top-left" onClick={handleShowToastLeft}>
          Top left
        </button>
        <button id="top-center" onClick={handleShowToasCenter}>
          Top center
        </button>
        <button id="top-right" onClick={handleShowToastRight}>
          Top right
        </button>

        <button id="bottom-left" onClick={handleShowToastBottomLeft}>
          Bottom left
        </button>
        <button id="bottom-center" onClick={handleShowToastBottomCenter}>
          Bottom center
        </button>
        <button id="bottom-right" onClick={handleShowToastBottomRight}>
          Bottom right
        </button>
      </div>
    </>
  );
}

export default App;
