import React from "react";
import userProfile from "../assets/user-profile.jpeg";
import avatar_1 from "../assets/avatars/avatar-1.jpg";
import {
  DataUsage,
  Groups2,
  Message,
  MoreVert,
  Search,
} from "@mui/icons-material";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <img src={userProfile} alt="user profile" />
          <ul>
            <li>
              <Groups2 />
            </li>
            <li>
              <DataUsage />
            </li>
            <li>
              <Message />
            </li>
            <li>
              <MoreVert />
            </li>
          </ul>
        </div>
        <div className="header-right">
          <div className="selected-user-chat">
            <img src={avatar_1} alt="selected user" />
            <div className="selected-user-chat-info">
              <span className="selected-user-chat-name">Diam Diallo</span>
              <p>En ligne il y'a 11:04</p>
            </div>
          </div>
          <ul className="right">
            <li>
              <Search />
            </li>
            <li>
              <MoreVert />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
