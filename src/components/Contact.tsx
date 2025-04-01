import { Link } from "react-router-dom";
import "./Contact.scss";
import { PersonData } from "./NewContact";

interface ContactDataProps {
  contactData: PersonData;
}

export default function Contact<PersonData>({ contactData }: ContactDataProps) {
  return (
    <>
      <div className="Contact">
        <Link to={"/editView"} className="link">
          <div className="imge">image</div>
          <div className="details">
            <div className="details__name">
              <h3>{contactData.username}</h3>
            </div>
            <div className="details__contact">
              <div className="leftDetails">
                <span className="detailText">{contactData.geburtsdatum}</span>
                <span className="detailText">{contactData.geschlecht}</span>
                <span className="detailText">{contactData.email}</span>
              </div>
              <div className="rightDetails">
                <span className="detailText">{contactData.post}</span>
                <span className="detailText">{contactData.phone}</span>
                <span className="detailText">{contactData.webseite}</span>
              </div>
            </div>
          </div>
        </Link>
        <div className="btn">X</div>
      </div>
    </>
  );
}
