import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to={"/allContactsView"} className="link">
        Übersicht
      </Link>
      <Link to={"/newContact"} className="link">
        Neuer Kontakt
      </Link>
    </div>
  );
}
