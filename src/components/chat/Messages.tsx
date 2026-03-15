import MessageItem from './MessageItem';
import type { Message } from '../../config/api/messages';
import { useAppSelector } from '../../store/hooks';

type Props = {
  messages: Message[];
  isMessagesLoading: boolean;
};

function Messages({ messages, isMessagesLoading }: Props) {
  const { userName } = useAppSelector((state) => state.user);

  return (
    <div className="chat__messages">
      <div className="chat__messages-inner">
        {isMessagesLoading && <div className="chat__message-loading">Loading...</div>}
        {messages?.map((message) => (
          <MessageItem key={message._id} data={message} currentUserName={userName} />
        ))}
      </div>
    </div>
  );
}

export default Messages;
