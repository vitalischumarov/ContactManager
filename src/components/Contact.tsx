import { iPerson } from "../Model/Contact";
import "./Contact.scss";

interface Prop {
  prop: iPerson;
}

function Contact({ prop }: Prop) {
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
      <div className="delete-btn">x</div>
    </div>
  );
}

export default Contact;
