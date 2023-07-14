import React from "react";

const UserChatCard = ({ user }) => {
  console.table(user);
  return (
    <>
      <div className="user-chat-card">
        <div className="left-part">
          <img
            src={`../assets/avatars/${user?.image}`}
            alt="User chat avatar"
          />
          <div className="user-chat-preview">
            <span>{user?.prenom}</span>
            <p>{user?.message_preview}</p>
          </div>
        </div>
        <div className="right-part">
          <span className="hour">{user?.heure}</span>
          {user?.nombre_non_lus === 0 ? null : (
            <span className="badge">{user?.nombre_non_lus}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default UserChatCard;
