import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import site_c from '../assets/site_con.jpg';
import { useNavigate } from 'react-router-dom';
// import { allUsersRoute } from '../utils/APIRoutes';
// import ChatContacts from '../Components/ChatContacts';
function ChatApp() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState();
  const [currentUser, setCurrentUser] = useState(undefined);
  // useEffect(() => {
  //   if (!localStorage.getItem('chat-app-user')) {
  //     navigate('/login_user');
  //   } else {
  //     setCurrentUser(JSON.parse(localStorage.getItem('chat-app-user')));
  //   }
  // }, []);

  // useEffect(async () => {
  //   if (currentUser) {
  //     const data = await fetch(`${allUsersRoute}/${currentUser._id}`);
  //     setContacts(data.data);
  //   }
  // }, [currentUser]);
  return (
    <>
      <Container>
        <div className="container">
          <img
            src={site_c}
            alt=" site under construction "
            // style={{ width: "100%" }}
          />
          {/* <ChatContacts contacts={contacts} currentUser={currentUser} /> */}
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
  position: absolute;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;

    @media screen and (max-width: 620px) {
      img {
        width: 100%;
      }
    }
    @media screen and (min-width: 1024px) {
      .container {
        img {
          max-width: 600px;
        }
      }
    }
  }
`;
export default ChatApp;
