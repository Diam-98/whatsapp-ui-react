import { FilterList, Search } from "@mui/icons-material";
import React from "react";
import UserChatCard from "./UserChatCard";
import { users } from "../data/chat_list";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="search-part">
          <div className="icon-input">
            <Search />
            <input type="search" placeholder="Rechercher une discussion" />
          </div>
          <FilterList />
        </div>

        <div className="chat-list">
          {users.map((item) => {
            return <UserChatCard key={item.id} user={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
