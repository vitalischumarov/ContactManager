import { Link } from "react-router-dom";
import "./Contact.scss";

export default function Contact() {
  return (
    <>
      <Link to={"/editView"} className="link">
        <div className="Contact">
          <div className="imge">image</div>
          <div className="details">
            <div className="details__name">
              <h3>Vitali</h3>
            </div>
            <div className="details__contact">
              <div className="leftDetails">
                <span className="detailText">01.03.1988</span>
                <span className="detailText">Male</span>
                <span className="detailText">test@gmail.com</span>
              </div>
              <div className="rightDetails">
                <span className="detailText">Musterstrasse 12</span>
                <span className="detailText">123456789</span>
                <span className="detailText">vitali-schumarov.ch</span>
              </div>
            </div>
          </div>
          <div className="btn">+</div>
        </div>
      </Link>
    </>
  );
}
