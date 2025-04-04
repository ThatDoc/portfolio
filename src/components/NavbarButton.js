import { Link } from "react-router-dom";
import hoverSound from "../sounds/tick.wav"

const NavbarButton = ({ to, label, locked, onClick }) => {
  const playHoverSound = () => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    fetch(hoverSound)
      .then(res => res.arrayBuffer())
      .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start();
      })
      .catch(e => console.error("Audio play error:", e));
  };

  return (
        <Link
          className={locked === true ? "Navbar-link-locked" : "Navbar-link"}
          to={to}
          onClick={onClick}
          onMouseEnter={playHoverSound}
        >
          {label}
        </Link>
  );
};

export default NavbarButton;