import { Link } from "react-router-dom";
import "./Menue.scss";

function Menue() {
  return (
    <div className="menue">
      <Link to={"/newContact"}>newContact</Link>
      <Link to={"/Contacts"}>All Contacts</Link>
    </div>
  );
}

export default Menue;
