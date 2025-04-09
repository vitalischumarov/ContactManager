import { Outlet } from "react-router-dom";
import "./App.scss";
import Menue from "./components/Menue";

function App() {
  return (
    <div className="app">
      <Menue></Menue>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
