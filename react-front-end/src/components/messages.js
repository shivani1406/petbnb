import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Input from './input';
import './messages.css';
import Chats from './Chats/chats';

const Messages = () => {
  const baseUrl = 'http://localhost:8080';

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    getMessages();
  }, [])

  const getMessages = () => {
    fetch(`${baseUrl}/api/messages/${id}`).then((result) => {
      result.json().then((resp) => {
        // setProperties(resp)
        setName(localStorage.getItem('user_name'));
        console.log(resp);
        setMessages(resp);
      })
    })
  }

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      const user_id = localStorage.getItem('user_id');
	    const userObject = {user_id, message};
      axios.post(`${baseUrl}/api/messages/${id}`, userObject)
          .then((res) => {
           console.log("message saved");
           setMessage("");
          }).catch((error) => {
              console.log(error)
          });
    }
  }

  const wsURL = 'ws://localhost:8080';
   //Websocket set up
   const socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);
   socket.onopen = () => {
     console.log("Web socket opened");
     socket.send("Ping...");
   };

  return(
    <div className="app__searchForm">
      <div className="outerContainer">
      <div className="container">
          {/* <InfoBar room={room} />*/}
          <Chats messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} /> 
      </div>
      {/* <TextContainer users={users}/> */}
    </div>
    </div>
  )
}

export default Messages;