import dayjs from 'dayjs';
import { useCreateMessageMutation, useGetMessagesQuery } from '../../config/api/messages';
import './chat.css';
import { useState } from 'react';
import { useAppSelector } from '../../store/hooks';

const formInitialState = {
  message: '',
};

function Chat() {
  const userName = useAppSelector((state) => state.user.userName);
  const {
    data: messages,
    isLoading: isMessagesLoading,
    refetch: refetchMessages,
  } = useGetMessagesQuery();
  const [sendMessage, { isLoading: isMessageSending }] = useCreateMessageMutation();

  const [message, setMessage] = useState(formInitialState.message);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage({ author: userName, message }).then(() => {
      setMessage(() => formInitialState.message);
      refetchMessages();
    });
  };

  return (
    <div className="chat">
      <div className="chat__messages">
        <div className="chat__messages-inner">
          {isMessagesLoading && <div className="chat__message-loading">Loading...</div>}
          {messages?.map((message) => (
            <div
              key={message._id}
              className={`chat__message ${message.author === userName ? 'chat__message--own' : 'chat__message--other'}`}
            >
              {message.author !== userName && (
                <p className="chat__message-author">{message.author}</p>
              )}
              <p className="chat__message-text">{message.message}</p>
              <p className="chat__message-datetime">
                {dayjs(message.createdAt).format('DD MMM YYYY HH:mm')}
              </p>
            </div>
          ))}
        </div>
      </div>
      <form className="chat__form" onSubmit={handleSendMessage}>
        <div className="chat__form-inner">
          <input
            type="text"
            className="chat__form-input"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="chat__form-button" disabled={isMessageSending || message.length === 0}>
            {isMessageSending ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chat;
