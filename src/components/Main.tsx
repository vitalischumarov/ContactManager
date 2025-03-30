import { Link, Outlet } from "react-router-dom";
import "./Main.scss";
import Navbar from "./Navbar";

export default function Main() {
  return (
    <div className="MainView">
      <Navbar />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
