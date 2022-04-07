import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Input from './input';
import './messages.css';
const Messages = () => {
  const baseUrl = 'http://localhost:8080';
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  let { id } = useParams();
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

  return(
    <div className="app__searchForm">
      <div className="outerContainer">
      <div className="container">
          {/* <InfoBar room={room} />
          <Messages messages={messages} name={name} />*/}
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} /> 
      </div>
      {/* <TextContainer users={users}/> */}
    </div>
    </div>
  )
}

export default Messages;