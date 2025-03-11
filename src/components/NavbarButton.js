import { Link } from "react-router-dom";

const NavbarButton = ({ to, label }) => {
  return (
        <Link className="Navbar-link" to={to}>{label}</Link>
  );
};

export default NavbarButton;