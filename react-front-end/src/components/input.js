import React from 'react';
import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import microPhoneIcon from "./microphone.png";
import './input.css';

const Input = ({ setMessage, sendMessage, message }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };
//   let input_text = <input
//   className="input"
//   type="text"
//   placeholder="Type a message..."
//   value={message}
//   onChange={({ target: { value } }) => setMessage(value)}
//   onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
// />;

  // if(transcript)
  // {
  //   message = transcript;
  //  input_text= <input
  //     className="input"
  //     type="text"
  //     placeholder="Type a message..."
  //     value={message}
  //     onChange={({ target: { value } }) => setMessage(value)}
  //     onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
  //   />
  // } else {
  //   input_text = <input
  //   className="input"
  //   type="text"
  //   placeholder="Type a message..."
  //   value={message}
  //   onChange={({ target: { value } }) => setMessage(value)}
  //   onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
  // />
  // }
  

  return (
  <form className="form">
     {
       transcript? 
       <input
  className="input"
  type="text"
  placeholder="Type a message..."
  value={transcript}
  onChange={({ target: { value } }) => setMessage(value)}
  onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
/> : <input
  className="input"
  type="text"
  placeholder="Type a message..."
  value={message}
  onChange={({ target: { value } }) => setMessage(value)}
  onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
/>
     }


     <div>
     <div
          className="microphone-icon-container"
          ref={microphoneRef}
          onClick={handleListing}
        >
          <img src={microPhoneIcon} className="microphone-icon" alt=""/>
        </div>
        <div className="microphone-status">
          {isListening ? "Listening........." : "Click to start Listening"}
        </div>
        {isListening && (
          <button className="microphone-stop btn" onClick={(e) => { 
            // e.preventDefault();
            setIsListening(false);
          SpeechRecognition.stopListening();
        sendMessage(e);}
          }>
            Stop
          </button>
        )}
      </div>
    <button className="sendButton" onClick={e => 
      sendMessage(e)}>Send</button>


      
  </form>
  );
}

export default Input;