import { Link, Outlet } from "react-router-dom";
import "./Main.scss";

export default function Navbar() {
  return (
    <div className="MainView">
      <div className="Navbar">
        <Link to={"/allContactsView"}>Übersicht</Link>
        <Link to={"/newContact"}>Neuer Kontakt</Link>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
