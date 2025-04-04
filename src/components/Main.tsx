import { Outlet } from "react-router-dom";
import "./Main.scss";
import Navbar from "./Navbar";
import { PersonData } from "./NewContact";
import { useReducer } from "react";
import { loadContactsFromLocalStorage } from "../Storages/localStorage";
import { createContext, useContext } from "react";

type Action =
  | { type: "ADD"; payload: PersonData }
  | { type: "DELETE"; payload: number }
  | { type: "EDIT"; payload: number };

interface State {
  state: PersonData[];
}

function reducer(state: State, action: Action) {
  if (action.type === "ADD") {
    console.log("add ausgewaehlt");
    return { state: [...state.state, action.payload] };
  } else if (action.type === "DELETE") {
    return state;
  } else {
    return state;
  }
}

export default function Main() {
  const initialValue = loadContactsFromLocalStorage();

  const [listOfPerson, dispatch] = useReducer(reducer, { state: initialValue });

  return (
    <div className="MainView">
      <Navbar />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
