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
                <span>01.03.1988</span>
                <span>Male</span>
                <span>test@gmail.com</span>
              </div>
              <div className="rightDetails">
                <span>Musterstrasse 12</span>
                <span>123456789</span>
                <span>vitali-schumarov.ch</span>
              </div>
            </div>
          </div>
          <div className="btn">+</div>
        </div>
      </Link>
    </>
  );
}
