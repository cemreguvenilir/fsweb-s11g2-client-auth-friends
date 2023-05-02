import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  function Logout() {
    localStorage.removeItem("s11g2");
    history.push("/login");
  }
  return (
    <div className="flex ">
      <h1>FRIENDS DATABASE</h1>
      <nav className="flex gap-3">
        <NavLink className="bg-black text-white py-5 px-3" to="/login">
          LOGIN.
        </NavLink>
        <NavLink to="/friends">FRIENDLIST.</NavLink>
        <NavLink to="/friends/add">ADDFRIEND.</NavLink>
        <NavLink to="/logout" onClick={Logout}>
          LOGOUT
        </NavLink>
      </nav>
    </div>
  );
}
