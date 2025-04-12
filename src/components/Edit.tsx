import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { PersonContext } from "../App";
import { iPerson } from "../Model/Contact";
import { useNavigate } from "react-router-dom";

function Edit() {
  const context = useContext(PersonContext);
  const { itemID } = useParams();
  const id = checkDataType(itemID);
  const [person, setPerson] = useState(searchForContact(id));
  const navigate = useNavigate();

  function checkDataType(itemID: string | undefined) {
    if (itemID !== undefined) {
      return Number(itemID);
    } else {
      return 0;
    }
  }

  function searchForContact(searchedID: number): iPerson {
    const searchedContact = context?.contacts.find(
      (contact) => contact.id === searchedID
    );
    if (searchedContact !== undefined) {
      return searchedContact;
    } else {
      return {
        id: Math.random(),
        vorname: "",
        geburtstag: "",
        geschlecht: "",
        email: "",
        strasse: "",
        telefon: "",
        webseite: "",
      };
    }
  }

  function clickHandler(event: React.ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case "vorname": {
        setPerson({ ...person, ...{ vorname: event.target.value } });
        break;
      }
      case "geburtstag": {
        setPerson({ ...person, ...{ geburtstag: event.target.value } });
        break;
      }
      case "email": {
        setPerson({ ...person, ...{ email: event.target.value } });
        break;
      }
      case "strasse": {
        setPerson({ ...person, ...{ strasse: event.target.value } });
        break;
      }
      case "telefon": {
        setPerson({ ...person, ...{ telefon: event.target.value } });
        break;
      }
      case "webseite": {
        setPerson({ ...person, ...{ webseite: event.target.value } });
        break;
      }
    }
  }

  function checkIfEmptyInput(): Boolean {
    if (
      person.email === "" ||
      // input.geburtstag === "" ||
      person.geschlecht === "" ||
      person.email === "" ||
      person.strasse === "" ||
      person.telefon === "" ||
      person.webseite === ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  function saveContact() {
    if (checkIfEmptyInput()) {
      context?.dispatch({
        type: "EDIT",
        payload: person,
      });
      navigate("/Contacts");
    }
  }

  function selectHander(event: React.ChangeEvent<HTMLSelectElement>) {
    setPerson({ ...person, ...{ geschlecht: event.target.value } });
  }

  return (
    <div className="view">
      <div className="formular">
        <h3>Vorname</h3>
        <input
          type="text"
          className="input-field"
          name="vorname"
          value={person.vorname}
          onChange={clickHandler}
        ></input>
        <h3>Geburtstag</h3>
        <input
          type="date"
          className="input-field"
          name="geburtstag"
          value={person.geburtstag}
          onChange={clickHandler}
        ></input>
        <h3>Geschlecht</h3>
        <select
          value={person.geschlecht}
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
          value={person.email}
          onChange={clickHandler}
        ></input>
        <h3>Strasse</h3>
        <input
          type="text"
          className="input-field"
          name="strasse"
          value={person.strasse}
          onChange={clickHandler}
        ></input>
        <h3>Telefonnummer</h3>
        <input
          type="text"
          className="input-field"
          name="telefon"
          value={person.telefon}
          onChange={clickHandler}
        ></input>
        <h3>Webseite</h3>
        <input
          type="text"
          className="input-field"
          name="webseite"
          value={person.webseite}
          onChange={clickHandler}
        ></input>
        <button className="saveBtn" onClick={saveContact}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Edit;
