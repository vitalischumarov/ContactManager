import { useContext } from "react";
import { PersonContext } from "../App";

function Contacts() {
  const context = useContext(PersonContext);

  return <h3>{context?.contacts.length}</h3>;
}

export default Contacts;
