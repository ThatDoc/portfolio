import { useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarButton from "./NavbarButton"

const Navbar = () => {
  const location = useLocation();
  const [lockedButton, setLockedbutton] = useState(location.pathname.replace('/', ''));

  const handleClick = (button) => {
    setLockedbutton(button);
  }

  return (
    <div className="Navbar">
        <a style={{ display: "flex", gap: "0px", listStyle: "none" }}>
          {["Start", "Art", "Gamedev"].map((button) => (
              <NavbarButton 
                key={button}
                to={"/" + button}
                label={button}
                locked={lockedButton === button}
                onClick={() => handleClick(button)}
              />
          ))}
        </a>
    </div>
  );
};

export default Navbar;
