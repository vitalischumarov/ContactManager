import { iPerson } from "./Contact";

//save to local storage
export function saveToLocalStorage(contacts: iPerson[]) {
  localStorage.setItem("ContactList", JSON.stringify(contacts));
}
//load from local storage
