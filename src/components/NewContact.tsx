import { useState } from "react";
import "./NewContact.scss";

interface PersonData {
  username: string;
  geburtsdatum: string;
  geschlecht: string;
  email: string;
  post: string;
  phone: string;
  webseite: string;
}

export default function NewContact() {
  const [person, setPerson] = useState<PersonData>({
    username: "",
    geburtsdatum: "",
    geschlecht: "",
    email: "",
    post: "",
    phone: "",
    webseite: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    console.log(`Eingabefeld: ${event.target.value}`);
    switch (event.target.name) {
      case "username": {
        setPerson({ ...person, ...{ username: event.target.value } });
        break;
      }
      case "email": {
        setPerson({ ...person, ...{ email: event.target.value } });
        break;
      }
      case "post": {
        setPerson({ ...person, ...{ post: event.target.value } });
        break;
      }
      case "phone": {
        setPerson({ ...person, ...{ phone: event.target.value } });

        break;
      }
      case "webseite": {
        setPerson({ ...person, ...{ webseite: event.target.value } });
        break;
      }
      case "geschlecht": {
        setPerson({ ...person, ...{ geschlecht: event.target.value } });

        break;
      }
      case "geburtsdatum": {
        setPerson({ ...person, ...{ geburtsdatum: event.target.value } });

        break;
      }
    }
  }

  function createNewContact() {
    console.log(person);
  }

  return (
    <div className="NewContact">
      <form action="" className="Form">
        <label>Username</label>
        <input
          type="text"
          name="username"
          className="input"
          onChange={handleChange}
        />
        <label>Geburtsdatum</label>
        <input
          type="date"
          name="date"
          id=""
          className="input"
          onChange={handleChange}
        />
        <label htmlFor={"geschlecht"}>Geschlecht:</label>
        <select name="geschlecht" id="geschlecht" onChange={handleChange}>
          <option value={"männlich"}>Männlich</option>
          <option value={"weiblich"}>Weiblich</option>
        </select>
        <label>Email Adresse</label>
        <input
          type="email"
          name="email"
          className="input"
          onChange={handleChange}
        />
        <label>Post Adresse</label>
        <input
          type="text"
          name="post"
          className="input"
          onChange={handleChange}
        />
        <label>Telefonnummer</label>
        <input
          type="text"
          name="phone"
          className="input"
          onChange={handleChange}
        />
        <label>Webseite</label>
        <input
          type="text"
          name="webseite"
          className="input"
          onChange={handleChange}
        />
        <br />
      </form>
      <button className="Button" onClick={createNewContact}>
        Submit
      </button>
    </div>
  );
}
