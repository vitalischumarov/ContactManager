import { Outlet } from "react-router-dom";
import { useReducer, createContext, Dispatch } from "react";
import "./App.scss";
import Menue from "./components/Menue";
import { iPerson } from "./Model/Contact";
import {
  loadContactsFromLocalStorage,
  saveToLocalStorage,
} from "./Model/localStorage";

type contextType = {
  contacts: PersonState;
  dispatch: Dispatch<Action>;
};

export const PersonContext = createContext<contextType | undefined>(undefined);

type PersonState = iPerson[];

type Action =
  | { type: "ADD"; payload: iPerson }
  | { type: "EDIT"; payload: iPerson }
  | { type: "DELETE"; payload: number };

function reducer(personState: PersonState, action: Action) {
  switch (action.type) {
    case "ADD": {
      personState = [...personState, action.payload];
      saveToLocalStorage(personState);
      return personState;
      break;
    }
    case "EDIT": {
      for (let i = 0; i < personState.length; i++) {
        if (personState[i].id === action.payload.id) {
          personState[i].vorname = action.payload.vorname;
          personState[i].geburtstag = action.payload.geburtstag;
          personState[i].geschlecht = action.payload.geschlecht;
          personState[i].email = action.payload.email;
          personState[i].strasse = action.payload.strasse;
          personState[i].telefon = action.payload.telefon;
          personState[i].webseite = action.payload.webseite;
        }
      }
      saveToLocalStorage(personState);
      return personState;
      break;
    }
    case "DELETE": {
      const updatedpersonState = personState.filter(
        (contact) => contact.id !== action.payload
      );
      saveToLocalStorage(updatedpersonState);
      return updatedpersonState;
      break;
    }
  }
}

function App() {
  const [contacts, dispatch] = useReducer<React.Reducer<PersonState, Action>>(
    reducer,
    loadContactsFromLocalStorage()
  );

  return (
    <div className="app">
      <Menue></Menue>
      <PersonContext.Provider value={{ contacts, dispatch }}>
        <Outlet></Outlet>
      </PersonContext.Provider>
    </div>
  );
}

export default App;
