import React from "react";
import background from "../assets/whp-bg.jpg";
import { Check, DoneAll } from "@mui/icons-material";

const Chat = () => {
  return (
    <>
      <div className="chat" style={{ backgroundImage: `url(${background})` }}>
        <div className="message sender">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            numquam eum, soluta voluptate eos iure obcaecati saepe, ipsa
            architecto ut tenetur repellat corrupti sit ipsam sequi hic neque?
            Mollitia, minima.
          </p>
          <div className="time-status">
            <span>11:43</span>
            <DoneAll className="msg-icon" />
          </div>
        </div>
        <div className="message receiver">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            numquam eum, soluta voluptate eos iure obcaecati saepe, ipsa
            architecto ut tenetur repellat corrupti sit ipsam sequi hic neque?
            Mollitia, minima.
          </p>
          <div className="time-status">
            <span>11:45</span>
            <Check />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
