import React, { useState, useEffect } from 'react'; 
import { useParams} from "react-router-dom";
import axios from 'axios';
import Input from './input';
import './messages.css';
import Chats from './chats';

const Messages = () => {
  const baseUrl = 'http://localhost:8080';

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(new WebSocket(process.env.REACT_APP_WEBSOCKET_URL));

  let { id } = useParams();

  useEffect(
    () => {
      Promise.all([
        axios.get(`${baseUrl}/api/messages/${id}`)
      ]).then((resp) => {
          // setProperties(resp)
          setName(localStorage.getItem('user_name'));
          // console.log(resp);
          setMessages(resp[0].data);
        
      

    ws.onopen = () => {
      console.log('WebSocket Connected');
    }

    ws.onmessage = (e) => {
      // const message = JSON.parse(e.data);
      // setMessages([message, ...messages]);
    }
    

    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket(process.env.REACT_APP_WEBSOCKET_URL));
      }
    } });
  }, [ws.onmessage, ws.onopen, ws.onclose])


  const sendMessage = (event) => {
    event.preventDefault();
    
    if(message) {
      ws.send(JSON.stringify(message));
      const user_id = localStorage.getItem('user_id');
	    const userObject = {user_id, message};
      axios.post(`${baseUrl}/api/messages/${id}`, userObject)
          .then((res) => {
           console.log("message saved");
           setMessage("");
          //  window.location.reload();
          }).catch((error) => {
              console.log(error)
          });
    }
  }

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