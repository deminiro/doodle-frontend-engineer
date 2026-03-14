import { useGetMessagesQuery } from './api/messages';
import './App.css';

function App() {
  const { data: messages } = useGetMessagesQuery();

  return (
    <>
      <p>Chat</p>
      <div>
        {messages?.map((message) => (
          <div key={message._id}>
            <p>{message.message}</p>
            <p>{message.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
