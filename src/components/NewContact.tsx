import "./NewContact.scss";

export default function NewContact() {
  return (
    <div className="NewContact">
      <form action="" className="Form">
        <label>Username</label>
        <input type="text" name="username" id="" className="input" />
        <label>Geburtsdatum</label>
        <input type="date" name="date" id="" className="input" />
        <label htmlFor={"geschlecht"}>Geschlecht:</label>
        <select name="geschlecht" id="geschlecht">
          <option value={"männlich"}>Männlich</option>
          <option value={"weiblich"}>Weiblich</option>
        </select>
        <label>Email Adresse</label>
        <input type="email" name="email" id="" className="input" />
        <label>Post Adresse</label>
        <input type="text" name="post" id="" className="input" />
        <label>Telefonnummer</label>
        <input type="text" name="phone" id="" className="input" />
        <label>Webseite</label>
        <input type="text" name="website" id="" className="input" />
        <br />
        <button className="Button">Submit</button>
      </form>
    </div>
  );
}
