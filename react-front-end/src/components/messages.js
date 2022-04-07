import React, { useState, useEffect } from 'react'; 

import Input from './input';
import './messages.css';
const Messages = () => {

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      // socket.emit('sendMessage', message, () => setMessage(''));
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