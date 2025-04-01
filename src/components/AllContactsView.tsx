import "./AllContactsView.scss";
import Contact from "./Contact";
import { loadContactsFromLocalStorage } from "../Storages/localStorage";
import { useState } from "react";
import { PersonData } from "./NewContact";

export default function AllContactsView() {
  const [listOfContacts, setListOfContacts] = useState<
    PersonData[] | null | undefined
  >(null);
  const newList = loadContactsFromLocalStorage();
  // if (newList?.length !== 0) {
  //   setListOfContacts(newList);
  // }

  if (newList !== null) {
    return (
      <div className="AllContactsview">
        {newList?.map((contact, index) => {
          console.log(`username: ${contact.id}`);
          return <Contact key={index} contactData={contact}></Contact>;
        })}
      </div>
    );
  }
}
