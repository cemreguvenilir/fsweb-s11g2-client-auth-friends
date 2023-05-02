import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", formData)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          localStorage.setItem("s11g2", res.data.token);
          history.pushState("/friends");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="font-black text-xl mt-10 w-1/3 mx-auto">
      <h2 className="text-7xl mb-4">LOGIN</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="username" className="text-left">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="bg-black text-white py-4 px-4 mb-4"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="password" className="text-left">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-black text-white py-4 px-4"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="bg-black text-white py-4 px-4 mt-4">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
