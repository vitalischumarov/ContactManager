import { Link } from "react-router-dom";
import "./Menue.scss";

function Menue() {
  return (
    <div className="menue">
      <div className="links">
        <Link to={"/newContact"} className="link">
          newContact
        </Link>
        <Link to={"/Contacts"} className="link">
          All Contacts
        </Link>
      </div>
    </div>
  );
}

export default Menue;
