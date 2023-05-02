import { useEffect, useState } from "react";
import axios from "axios";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  const token = localStorage.getItem("s11g2");

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setFriends(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="text-black font-extrabold text-xl w-1/3 mx-auto mt-10">
      <h1 className="text-6xl mb-4 text-left">FRIENDS LIST</h1>
      <div className="flex flex-col items-start gap-3">
        {friends.map((item) => (
          <h2 key={item.id}>
            - {item.name} - {item.email}
          </h2>
        ))}
      </div>
    </div>
  );
}
