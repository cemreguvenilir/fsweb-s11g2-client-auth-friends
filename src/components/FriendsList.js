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
    <div>
      <h1>FRIENDS LIST</h1>
      <div>
        {friends.map((item) => (
          <h2 key={item.id}>
            {item.name} - {item.email}
          </h2>
        ))}
      </div>
    </div>
  );
}
