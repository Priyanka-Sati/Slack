import React, { useState } from "react";
import './ChatInput.css';

function ChatInput({channelName , channelId}) {

    const[input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
    }

  return (
    <div className="charInput">
      <form>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
        <button type="submit" inClick={sendMessage}>SEND</button>
      </form>
    </div>
  );
}

export default ChatInput;
