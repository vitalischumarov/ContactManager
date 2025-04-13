import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./NewContact.scss";
import { iPerson } from "../Model/Contact";
import { PersonContext } from "../App";
import { fetchImage } from "../Model/api";

function NewContact() {
  let newPerson: iPerson = {
    id: Math.random(),
    vorname: "",
    geburtstag: "",
    geschlecht: "",
    email: "",
    strasse: "",
    telefon: "",
    webseite: "",
    profile_image: "",
  };

  const [input, setInput] = useState(newPerson);
  const context = useContext(PersonContext);
  const navigate = useNavigate();

  function clickHandler(event: React.ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case "vorname": {
        setInput({ ...input, ...{ vorname: event.target.value } });
        break;
      }
      case "geburtstag": {
        setInput({ ...input, ...{ geburtstag: event.target.value } });
        break;
      }
      case "email": {
        setInput({ ...input, ...{ email: event.target.value } });
        break;
      }
      case "strasse": {
        setInput({ ...input, ...{ strasse: event.target.value } });
        break;
      }
      case "telefon": {
        setInput({ ...input, ...{ telefon: event.target.value } });
        break;
      }
      case "webseite": {
        setInput({ ...input, ...{ webseite: event.target.value } });
        break;
      }
    }
  }

  function selectHander(event: React.ChangeEvent<HTMLSelectElement>) {
    setInput({ ...input, ...{ geschlecht: event.target.value } });
  }

  function checkIfEmptyInput(): Boolean {
    if (
      input.email === "" ||
      // input.geburtstag === "" ||
      input.geschlecht === "" ||
      input.email === "" ||
      input.strasse === "" ||
      input.telefon === "" ||
      input.webseite === ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  async function saveContact() {
    if (checkIfEmptyInput()) {
      input.profile_image = await fetchImage(input.geschlecht);
      context?.dispatch({
        type: "ADD",
        payload: input,
      });
      navigate("/Contacts");
    }
  }

  return (
    <div className="view">
      <div className="formular">
        <h3>Vorname</h3>
        <input
          type="text"
          className="input-field"
          name="vorname"
          value={input.vorname}
          onChange={clickHandler}
        ></input>
        <h3>Geburtstag</h3>
        <input
          type="date"
          className="input-field"
          name="geburtstag"
          value={input.geburtstag}
          onChange={clickHandler}
        ></input>
        <h3>Geschlecht</h3>
        <select
          value={input.geschlecht}
          className="input-field"
          onChange={selectHander}
        >
          <option value={""}>Geschlecht auswählen</option>
          <option value={"männlich"}>männlich</option>
          <option value={"weiblich"}>weiblich</option>
        </select>
        <h3>E-Mail Adresse</h3>
        <input
          type="text"
          className="input-field"
          name="email"
          value={input.email}
          onChange={clickHandler}
        ></input>
        <h3>Strasse</h3>
        <input
          type="text"
          className="input-field"
          name="strasse"
          value={input.strasse}
          onChange={clickHandler}
        ></input>
        <h3>Telefonnummer</h3>
        <input
          type="text"
          className="input-field"
          name="telefon"
          value={input.telefon}
          onChange={clickHandler}
        ></input>
        <h3>Webseite</h3>
        <input
          type="text"
          className="input-field"
          name="webseite"
          value={input.webseite}
          onChange={clickHandler}
        ></input>
        <button onClick={saveContact} className="saveBtn">
          Save
        </button>
      </div>
    </div>
  );
}

export default NewContact;
