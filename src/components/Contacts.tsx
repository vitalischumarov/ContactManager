import { useContext } from "react";
import { PersonContext } from "../App";
import Contact from "./Contact";

function Contacts() {
  const context = useContext(PersonContext);

  return <Contact></Contact>;
}

export default Contacts;
