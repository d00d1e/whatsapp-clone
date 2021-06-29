import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { MoreVert, SearchOutlined } from "@material-ui/icons";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";

import "./Sidebar.css";
import SidebarChat from "../SidebarChat/SidebarChat";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}
