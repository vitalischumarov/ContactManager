import "./AllContactsView.scss";
import Contact from "./Contact";
import { loadContactsFromLocalStorage } from "../Storages/localStorage";

export default function AllContactsView() {
  const newList = loadContactsFromLocalStorage();
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
