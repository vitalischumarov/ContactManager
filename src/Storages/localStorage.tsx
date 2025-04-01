import { PersonData } from "../components/NewContact";

const allePersonen: PersonData[] = [];

export function saveToLocalStorage(data: PersonData) {
  allePersonen.push(data);
  localStorage.setItem("contact", JSON.stringify(allePersonen));
}

export function loadContactsFromLocalStorage() {
  const contactsJson = localStorage.getItem("contact");
  if (!contactsJson) {
    return null;
  } else {
    try {
      const allPersonData: PersonData[] = JSON.parse(contactsJson);
      console.log("data loaded from local storage.");
      return allPersonData;
    } catch {
      console.error("error appeared with parsing the loading data");
    }
  }
}
