import dayjs from 'dayjs';
import { useGetMessagesQuery } from '../../api/messages';
import './chat.css';

function Messages() {
  const { data: messages } = useGetMessagesQuery();

  return (
    <div className="chat">
      <div className="chat__messages">
        {messages?.map((message) => (
          <div key={message._id} className="chat__message">
            <p className="chat__message-author">{message.author}</p>
            <p className="chat__message-text">{message.message}</p>
            <p className="chat__message-datetime">
              {dayjs(message.createdAt).format('DD MMM YYYY HH:mm')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
