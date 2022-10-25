import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute } from "../utils/APIRoutes";
import ChatContacts from "../Components/ChatContacts";
function ChatApp() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState();
  const [currentUser, setCurrentUser] = useState(undefined);
  // useEffect(async () => {
  //   if (!localStorage.getItem("chat-app-user")) {
  //     navigate("/dental-clinic/login_user");
  //   } else {
  //     setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
  //   }
  // }, []);
  // useEffect(async () => {
  //   if (currentUser) {
  //     const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
  //     setContacts(data.data);
  //   }
  // }, [currentUser]);
  return (
    <>
      <Container>
        <div className="container">
          <ChatContacts contacts={contacts} currentUser={currentUser} />
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
    @media screen and (min-width: 360px) and (max-width: 480px) {
    }
  }
`;
export default ChatApp;
