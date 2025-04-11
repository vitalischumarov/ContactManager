import { iPerson } from "../Model/Contact";
import { useContext } from "react";
import { PersonContext } from "../App";
import "./Contact.scss";
import { Link } from "react-router-dom";

interface Prop {
  prop: iPerson;
}

function Contact({ prop }: Prop) {
  const context = useContext(PersonContext);

  function deleteContact() {
    context?.dispatch({
      type: "DELETE",
      payload: prop.id,
    });
  }

  return (
    <div className="contact-card">
      <Link to={`/Edit/${prop.id}`} className="link">
        <div className="image">image</div>
        <div className="detail">
          <div className="details-left">
            <h4>{prop.vorname}</h4>
            <span>{prop.geburtstag}</span>
            <span>{prop.geschlecht}</span>
            <span>{prop.email}</span>
          </div>
          <div className="details-right">
            <span>{prop.strasse}</span>
            <span>{prop.telefon}</span>
            <span>{prop.webseite}</span>
          </div>
        </div>
      </Link>
      <div className="delete-btn" onClick={deleteContact}>
        x
      </div>
    </div>
  );
}

export default Contact;
