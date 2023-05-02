import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddFriend() {
  const token = localStorage.getItem("s11g2");

  const history = useHistory();

  const [newFriend, setNewFriend] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/friends", newFriend, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        history.push("/friends");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="font-black text-xl mt-10 w-1/3 mx-auto">
      <h2 className="text-7xl mb-4">ADD FRIEND</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="text-left" htmlFor="name">
          {" "}
          FRIEND NAME{" "}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-black text-white py-4 px-4 mb-4"
          value={newFriend.name}
          onChange={handleChange}
        />
        <label className="text-left" htmlFor="email">
          {" "}
          FRIEND EMAIL{" "}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-black text-white py-4 px-4 mb-4"
          value={newFriend.email}
          onChange={handleChange}
        />
        <button type="submit" className="bg-black text-white py-4 px-4 mt-4">
          {" "}
          SUBMIT{" "}
        </button>
      </form>
    </div>
  );
}
