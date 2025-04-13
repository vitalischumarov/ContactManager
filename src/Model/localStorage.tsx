import { iPerson } from "./Contact";

//save to local storage
export function saveToLocalStorage(contacts: iPerson[]) {
  localStorage.setItem("ContactList", JSON.stringify(contacts));
}
//load from local storage
export function loadContactsFromLocalStorage() {
  const storedContacts = localStorage.getItem("ContactList");
  if (storedContacts !== null) {
    const parsedContacts: iPerson[] = JSON.parse(storedContacts);
    return parsedContacts;
  } else {
    return [];
  }
}
