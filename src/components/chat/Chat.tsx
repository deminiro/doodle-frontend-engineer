import { useCreateMessageMutation, useGetMessagesQuery } from '../../config/api/messages';
import './chat.css';
import { useCallback, useState, type SyntheticEvent } from 'react';
import { useAppSelector } from '../../hooks/useActions';
import MessageForm from './MessageForm';
import Messages from './Messages';
import { POLLING_INTERVAL } from '../../constants/requests';

const formInitialState = {
  message: '',
};

function Chat() {
  const userName = useAppSelector((state) => state.user.userName);

  const {
    data: messages = [],
    isLoading: isMessagesLoading,
    refetch: refetchMessages,
  } = useGetMessagesQuery(undefined, {
    pollingInterval: POLLING_INTERVAL,
  });
  const [sendMessage, { isLoading: isMessageSending }] = useCreateMessageMutation();

  const [message, setMessage] = useState(formInitialState.message);

  const handleSendMessage = useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();

      sendMessage({ author: userName, message })
        .then(() => {
          setMessage(() => formInitialState.message);
          refetchMessages();
        })
        .catch(() => {
          window.alert('Something went wrong, try again');
        });
    },
    [sendMessage, userName, message, refetchMessages]
  );

  return (
    <div className="chat">
      <Messages messages={messages} isMessagesLoading={isMessagesLoading} />
      <MessageForm
        message={message}
        isSending={isMessageSending}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default Chat;
