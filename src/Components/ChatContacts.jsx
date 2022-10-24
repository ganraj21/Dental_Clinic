import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
function ChatContacts({ contacts, currentUser }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  useEffect(() => {}, [currentUser]);

  return <div>contacts</div>;
}

export default ChatContacts;
