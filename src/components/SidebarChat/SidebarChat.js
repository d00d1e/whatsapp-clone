import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";

import "./SidebarChat.css";

export default function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createNewChat = () => {
    const roomName = prompt("Enter a name for chatroom.");

    if (roomName) {
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/identicon/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>last message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createNewChat}>
      <h2>Add New Chat</h2>
    </div>
  );
}
