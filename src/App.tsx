import { Outlet } from "react-router-dom";
import { useReducer, createContext, Dispatch } from "react";
import "./App.scss";
import Menue from "./components/Menue";
import { iPerson } from "./Model/Contact";

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
      return [...personState, action.payload];
      break;
    }
    case "EDIT": {
      return personState;
      break;
    }
    case "DELETE": {
      const updatedpersonState = personState.filter(
        (contact) => contact.id !== action.payload
      );
      return updatedpersonState;
      break;
    }
  }
}

function App() {
  const [contacts, dispatch] = useReducer<React.Reducer<PersonState, Action>>(
    reducer,
    []
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
