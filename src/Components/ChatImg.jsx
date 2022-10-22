import React from "react";
import "./ChatImg.css";
function ChatImg() {
  const fun_click = () => {
    var link_chat = document.getElementById("wccht");
    link_chat.href =
      "https://api.whatsapp.com/send?phone=+91-8879797976&text=Hi.%20I%20have%20a%20query%20regarding%20Dr.%20Rahul%20Achare";
  };
  return (
    <div className="chat_section">
      <div className="whatsapp_chat" id="wccht" onClick={fun_click}>
        <img
          src="https://drrahulachare.getmy.clinic/_next/image?url=%2Fimages%2FChat.gif&w=64&q=75"
          alt=""
        />
      </div>
    </div>
  );
}

export default ChatImg;
