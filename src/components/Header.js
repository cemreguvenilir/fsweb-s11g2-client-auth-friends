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
    <div className="flex justify-around px-10 py-4 items-center font-extrabold">
      <h1 className="text-black text-2xl">FRIENDS DATABASE</h1>
      <nav className="flex gap-4">
        <NavLink className="bg-black text-white  py-5 px-3" to="/login">
          LOGIN.
        </NavLink>
        <NavLink className="bg-black text-white  py-5 px-3" to="/friends">
          FRIENDLIST.
        </NavLink>
        <NavLink className="bg-black text-white  py-5 px-3" to="/friends/add">
          ADDFRIEND.
        </NavLink>
        <NavLink
          className="bg-black text-white py-5 px-3"
          to="/logout"
          onClick={Logout}
        >
          LOGOUT
        </NavLink>
      </nav>
    </div>
  );
}
