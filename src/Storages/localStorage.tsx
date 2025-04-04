import { PersonData } from "../components/NewContact";

const allePersonen = loadContactsFromLocalStorage();
//useReducer verwenden!!!!!

export function saveToLocalStorage(data: PersonData) {
  if (allePersonen) {
    allePersonen.push(data);
    localStorage.setItem("contact", JSON.stringify(allePersonen));
  }
}

export function loadContactsFromLocalStorage() {
  const contactsJson = localStorage.getItem("contact");
  const allPersonData: PersonData[] = JSON.parse(String(contactsJson));
  console.log("data loaded from local storage.");
  return allPersonData;
}
