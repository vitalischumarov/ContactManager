import { Link } from "react-router-dom";
import "./Contact.scss";

export default function Contact() {
  return (
    <>
      <Link to={"/editView"}>
        <div className="Contact"></div>
      </Link>
    </>
  );
}
