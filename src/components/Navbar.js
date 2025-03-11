import NavbarButton from "./NavbarButton"

const Navbar = () => {
  return (
    <div className="Navbar">
        <a style={{ display: "flex", gap: "0px", listStyle: "none" }}>
            <NavbarButton to="/" label="Start" />
            <NavbarButton to="/Art" label="Art" />
            <NavbarButton to="/Gamedev" label="Gamedev" />
        </a>
    </div>
  );
};

export default Navbar;
