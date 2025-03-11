import { Link } from "react-router-dom";

const NavbarButton = ({ to, label, locked, onClick }) => {
  return (
        <Link
          className={locked == true ? "Navbar-link-locked" : "Navbar-link"}
          to={to}
          onClick={onClick}
        >
          {label}
        </Link>
  );
};

export default NavbarButton;