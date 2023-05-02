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
    <div>
      <h1>ADD FRIEND</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> FRIEND NAME </label>
        <input
          type="text"
          id="name"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <label htmlFor="email"> FRIEND EMAIL </label>
        <input
          type="email"
          id="email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />
        <button type="submit"> SUBMIT </button>
      </form>
    </div>
  );
}
