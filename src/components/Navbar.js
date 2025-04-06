import { useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarButton from "./NavbarButton"

const Navbar = () => {
  const location = useLocation();
  const [lockedButton, setLockedbutton] = useState(location.pathname.replace('/', '') || "Start");

  const handleClick = (button) => {
    setLockedbutton(button);
  }

  return (
    <div className="Navbar">
        <div style={{ display: "flex", gap: "0px", listStyle: "none" }}>
          {["Start", "Art", "Gamedev"].map((button) => (
              <NavbarButton 
                key={button}
                to={"/" + button}
                label={button}
                locked={lockedButton.toLowerCase() === button.toLowerCase()}
                onClick={() => handleClick(button)}
              />
          ))}
        </div>
    </div>
  );
};

export default Navbar;
