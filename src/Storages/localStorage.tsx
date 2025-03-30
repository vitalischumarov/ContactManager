import { PersonData } from "../components/NewContact";

export function saveToLocalStorage(data: PersonData) {
  console.log("reached local storage");
  localStorage.setItem("contact", JSON.stringify(data));
}
