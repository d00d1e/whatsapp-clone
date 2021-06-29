import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Avatar } from "@material-ui/core";

import db from "../../firebase.config";
import "./SidebarChat.css";

export default function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createNewChat = () => {
    const roomName = prompt("Enter a name for chatroom.");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/identicon/${seed}.svg`}
        />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createNewChat}>
      <h2>Add New Chat</h2>
    </div>
  );
}
