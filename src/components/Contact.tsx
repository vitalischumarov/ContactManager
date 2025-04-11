import { iPerson } from "../Model/Contact";
import { useContext } from "react";
import { PersonContext } from "../App";
import "./Contact.scss";

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
      <div className="delete-btn" onClick={deleteContact}>
        x
      </div>
    </div>
  );
}

export default Contact;
