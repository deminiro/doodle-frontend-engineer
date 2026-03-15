import { useMemo } from 'react';
import type { Message } from '../../config/api/messages';
import { formatDate } from '../../utils/dates';

type Props = {
  currentUserName: string;
  data: Message;
};

function MessageItem({ currentUserName, data }: Props) {
  const { isAuthor, date } = useMemo(() => {
    return {
      isAuthor: data.author === currentUserName,
      date: formatDate(data.createdAt),
    };
  }, [data.author, currentUserName, data.createdAt]);

  return (
    <div
      key={data._id}
      className={`chat__message ${isAuthor ? 'chat__message--own' : 'chat__message--other'}`}
    >
      {!isAuthor && <p className="chat__message-author">{data.author}</p>}
      <p className="chat__message-text">{data.message}</p>
      <p className="chat__message-date">{date}</p>
    </div>
  );
}

export default MessageItem;
