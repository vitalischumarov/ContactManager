import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-card">
      <div className="image">image</div>
      <div className="detail">
        <div className="details-left">
          <h4>Vitali</h4>
          <span>01.03.1988</span>
          <span>männlich</span>
          <span>v.schumarov@icloud.com</span>
        </div>
        <div className="details-right">
          <span>Heitligstrasse 27</span>
          <span>12345678</span>
          <span>vitali-schumarov.ch</span>
        </div>
      </div>
      <div className="delete-btn">x</div>
    </div>
  );
}

export default Contact;
