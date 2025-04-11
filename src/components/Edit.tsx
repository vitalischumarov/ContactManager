import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { PersonContext } from "../App";
import { iPerson } from "../Model/Contact";

function Edit() {
  const context = useContext(PersonContext);
  const { itemID } = useParams();
  const id = checkDataType(itemID);
  const [person, setPerson] = useState(searchForContact(id));

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
  console.table(person);
  return <h3>{id}</h3>;
}

export default Edit;
