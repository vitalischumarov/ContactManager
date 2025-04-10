import "./Contacts.scss";
import { useContext } from "react";
import { PersonContext } from "../App";
import Contact from "./Contact";

function Contacts() {
  const context = useContext(PersonContext);

  return (
    <div className="contacts">
      {context?.contacts.map((contact) => {
        return <Contact prop={contact}></Contact>;
      })}
    </div>
  );
}

export default Contacts;
